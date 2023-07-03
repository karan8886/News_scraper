const express =require('express');
let Parser = require('rss-parser');
const bodyParser = require("body-parser");
var fs = require('fs');
const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
let {fetcher} = require('./Rssfeedls.js');
let parser =    new Parser({customFields: {
    item: [
      ['media:content', 'media:content'],
    ]
    }
    //,defaultRSS: 2.0
    // Accept header from request
    ,headers: {'Accept': 'application/rss+xml,application/xml'}
});
var feedor;
mongoose.connect("mongodb://localhost:27017/qappdb"
//,{useNewUrlParser: True }
);

const feedSchema = new mongoose.Schema ({
    idk:String, pub:String,  topic:[String] , title:String,    _id:String,    pubdate:Date,    creator:String,    desc:String, image:String, godf:String, userf:String, algof:String});

const feed = mongoose.model('feeds26',feedSchema);

async function scraper (key,pubx,top,url) {
    feedor = await parser.parseURL(url);
    //await console.log(feedor.items[0].enclosure);
    console.log(pubx);
    feedor.items.forEach(item => {
        id = Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9*Math.pow(10, 12)).toString(36);
        if (item.contentSnippet) desc_t = item.contentSnippet.substring(0, 500);
        feed.insertMany([{idk:id,pub:pubx,topic:top,title:item.title,_id:item.link,pubdate:item.pubDate,creator:item.creator,desc:desc_t, godf:"", userf:"",algof:""}],function(err){if(err) {console.log(err.code);}});
    }); 
  
} 
  //fetcher.map(fetch => scraper(fetch.key,fetch.pub,fetch.top,fetch.url));
async function main() {
    for (const fetch of fetcher) {
      await scraper(fetch.key,fetch.pub,fetch.top,fetch.url);
      await new Promise(resolve => setTimeout(resolve, 50));
      //console.log(res);
    }}
  main();
