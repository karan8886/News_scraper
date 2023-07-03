let fetcher = 
[
{ pub: "Project syndicate", top: ["Economics"], url: "https://www.project-syndicate.org/RSS" }
,{ pub: "Behavioral scientist", top: ["Economics"], url: "https://behavioralscientist.org/feed/" }
,{ pub: "Bridgewater associates", top: ["Economics"], url: "https://www.bridgewater.com/research-and-insights.rss" }
,{ pub: "Marginal revolution", top: ["Economics"], url: "http://marginalrevolution.com/feed" }
,{pub:"Nature",top:["Science"],url:"https://www.nature.com/nature.rss"}
,{pub:"Science news",top:["Science"],url:"https://www.sciencenews.org/feed"}
,{pub:"Scientific American",top:["Science"],url:"http://rss.sciam.com/ScientificAmerican-Global"}
,{pub:"New scientist",top:["Science"],url:"https://feeds.newscientist.com/home"}
,{pub:"The conversation",top:["Science"],url:"https://theconversation.com/us/articles.atom"}
,{pub:"Science",top:["Science"],url:"https://www.science.org/rss/news_current.xml"}
,{pub:"The scientist",top:["Science"],url:"https://www.the-scientist.com/rss/feed-the-scientist.xml"}
,{pub:"MIT",top:["Science"],url:"https://news.mit.edu/rss/feed"}
,{pub:"Stanford",top:["Science"],url:"https://news.stanford.edu/feed/"}
,{pub:"MIT Tech review",top:["Science"],url:"https://www.technologyreview.com/feed"}
,{pub:"Bioengineer",top:["Science"],url:"https://bioengineer.org/feed/"}
,{pub:"Neuroscience news",top:["Science"],url:"https://neurosciencenews.com/feed/"}
,{pub:"Food navigator",top:["Food"],url:"https://www.foodnavigator.com/Info/FoodNavigator-RSS"}
,{pub:"Windows on theory",top:["Comp science"],url:"https://windowsontheory.org/feed/"}
,{pub:"Daniel Lemire",top:["Comp science"],url:"https://lemire.me/blog/feed/"}
,{pub:"Freedom to Tinker",top:["Comp science"],url:"https://freedom-to-tinker.com/feed/"}
,{pub:"Columbia university",top:["Comp science"],url:"https://knightcolumbia.org/rss"}
,{pub:"Robotics business review",top:["Robotics"],url:"https://www.roboticsbusinessreview.com/feed/"}
,{pub:"MIT Lincoln lab",top:["Emerging tech"],url:"https://www.ll.mit.edu/news/rss"}
,{pub:"CDC",top:["Health"],url:"https://tools.cdc.gov/api/v2/resources/media/316422.rss"}
,{pub:"CDC",top:["Health"],url:"https://tools.cdc.gov/api/v2/resources/media/285676.rss"}
,{pub:"FDA",top:["Health"],url:"https://www.fda.gov/about-fda/contact-fda/stay-informed/rss-feeds/consumers/rss.xml"}
,{pub:"FDA",top:["Health"],url:"https://www.fda.gov/about-fda/contact-fda/stay-informed/rss-feeds/fda-outbreaks/rss.xml"}
,{pub:"FDA",top:["Health"],url:"https://www.fda.gov/about-fda/contact-fda/stay-informed/rss-feeds/food-safety-recalls/rss.xml"}
,{pub:"Brookings",top:["Economics"],url:"https://www.brookings.edu/feed/"}
,{pub:"Google-Oliview Blanchard",top:["Economics"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNR0kzYURCaUVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Raghuram Rajan",top:["Economics"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNR0pyZEhkNkVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Walter C. Willett",top:["Medicine"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNR2d3ZDJKckVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Sean M. Carroll",top:["Physics"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNR2QwYkdzMEVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Lisa Randall",top:["Physics"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNRE14YlhBd0VnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Mark S. Granovetter",top:["Sociology"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNRE16ZVdSNUVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Richard Thaler",top:["Economics"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNRE50TUhacUVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Gerd Gigerenzer",top:["Psychology"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNRE51WkhGcUVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Charlie Munger",top:["Business"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNRE53Tm1keEVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Elizabeth F. Loftus",top:["Psychology"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNRE5qZG1aNkVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Cass Sunstein",top:["Psychology"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNRE5vY1Rkc0VnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Philip G. Zimbardo",top:["Psychology"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNREk0YW5SbkVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Jurgen Schmidhuber",top:["AI"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNREkwWTJkZkVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Elliot Aronson",top:["Psychology"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNREowWHpjeUVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Eric S. Lander",top:["Medicine"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNREozTjJJMkVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-arlie russell hochschild",top:["Sociology"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNREp0T0dSeEVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Carlo Rovelli",top:["Physics"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNREprZDJSM0VnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Geoffrey E. Hinton",top:["Computer science"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNREpxYm1Sd0VnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Slavoj Zizek",top:["Philosophy"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNREUyT1dabUVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Daniel Kahneman",top:["Economics"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNREUyTVRodUVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Lee Smolin",top:["Physics"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNREUzTXpScUVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Paul Graham",top:["Business"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNREUzWTIwNUVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Martha Nussbaum",top:["Philosophy"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNREY1TTJvMkVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-David Chalmers",top:["Philosophy"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNREZ0TXpneUVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Richard Garriott",top:["Computer engg"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNREZ1Y0hCeEVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Larry Summers",top:["Economics"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNREZrTjJ4NkVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-daniel goleman",top:["Psychology"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNREZrZEcxMkVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Guido van Rossum",top:["Computer engg"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNREZvTURWakVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Kip S. Thorne",top:["Physics"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNREZxYkdzekVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Kwame Anthony Appiah",top:["Philosophy"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNRFExTjJoakVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Nassim Taleb",top:["Philosophy"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNRFExWkhSeEVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Brendan Eich",top:["Computer engg"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNRFF6TW5NNUVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Stanley Druckenmiller",top:["Business"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNRFJvZGpGMEVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Jensen Huang",top:["Business"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNRFp1TnpjMEVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Robert Langer",top:["Natural science"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNRFp3T0RSNkVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Eugene Kaspersky",top:["Cybersecurity"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNRFpmZHpNM0VnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Kai-Fu Lee",top:["Computer engg"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNRFpmZVRONkVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Michael I. Jordan",top:["Computer science"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNRFUzTTJnMUVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Daron Acemoglu",top:["Economics"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNRFY1TjNSZkVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Mihaly Csikszentmihalyi",top:["Psychology"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNRFZpTTJkM0VnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-George Loewenstein",top:["Economics"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNRGhvWmpsaUVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Thomas S. Huang",top:["Computer science"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNRGsyTW1kb0VnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Demis Hassabis",top:["Computer engg"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNRGt4ZEhnMEVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Bert Vogelstein",top:["Natural science"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNRGt5YTNCb0VnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Brian Krebs",top:["Cybersecurity"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNRGw0YkROc0VnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Richard Stallman",top:["Computer engg"],url:"https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNRGxqTnpVMUVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Steven A. Pinker",top:["Psychology"],url:"https://news.google.com/rss/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNR015Ym1jU0FtVnVLQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Joe Stiglitz",top:["Economics"],url:"https://news.google.com/rss/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNR2RmTmpFU0FtVnVLQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Sherry Turkle",top:["Sociology"],url:"https://news.google.com/rss/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNR3MxTm1zU0FtVnVLQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Craig Venter",top:["Biology"],url:"https://news.google.com/rss/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNREkwTUhZU0FtVnVLQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-jurgen habermas",top:["Philosophy"],url:"https://news.google.com/rss/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNRFEwZDJJU0FtVnVLQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Linus Torvalds",top:["Computer engg"],url:"https://news.google.com/rss/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNRFJuYm1ZU0FtVnVLQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Richard Dawkins",top:["Biology"],url:"https://news.google.com/rss/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNRFpuTkY4U0FtVnVLQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Roger Penrose",top:["Physics"],url:"https://news.google.com/rss/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNRFpxWnprU0FtVnVLQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Miguel de Icaza",top:["Computer engg"],url:"https://news.google.com/rss/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNRFUyZEhnU0FtVnVLQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Peter Singer",top:["Philosophy"],url:"https://news.google.com/rss/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNRFY0Ym1JU0FtVnVLQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Naomi Klein ",top:["Sociology"],url:"https://news.google.com/rss/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNRFZxY1dZU0FtVnVLQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Tim Berners-Lee",top:["Computer engg"],url:"https://news.google.com/rss/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNRGRrTldJU0FtVnVLQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Bruce Schneier",top:["Cybersecurity"],url:"https://news.google.com/rss/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNRGsxYW5NU0FtVnVLQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-John Carmack",top:["Computer engg"],url:"https://news.google.com/rss/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNRGxyWjE4U0FtVnVLQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Yoshua Bengio",top:["Computer science"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNR016Wm5wNGVSSUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Margaret Hamilton",top:["Computer engg"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNR053TVcxak1SSUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Patrick Collison",top:["Business"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNR0kyYm01NmVoSUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Brene Brown",top:["Psychology"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNR1JuYm5Oc01SSUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Kevin Systrom",top:["Computer engg"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNR281YXpJME54SUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Scott Sumner",top:["Economics"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNR2M1ZGpoelloSUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Jennifer Doudna",top:["Biology"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNR3hzTVhCZk1SSUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Yuval Noah Harari ",top:["History"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNR3N5YlRCcmNSSUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Ray Dalio",top:["Business"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNRE50TldwdGNCSUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Tobi Lutke",top:["Business"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNRE54TlRScWNoSUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Jonathan D. Haidt",top:["Psychology"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNRE5pWDJoclpCSUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Gary Marcus",top:["AI"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNRE5qZVRsbVp4SUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Jason Fried",top:["Computer engg"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNRE5vT1dOaVloSUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Mikko Hypponen",top:["Cybersecurity"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNREkxZUhKa1l4SUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Carolyn Bertozzi",top:["Chemistry"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNREkyZEdkbmVCSUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Paul Bloom",top:["Psychology"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNREkzWm5RMGNCSUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Dan Ariely",top:["Economics"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNREkzYWpoNk5SSUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Douglas Crockford",top:["Computer engg"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNREp4TURocU5oSUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Carol Dweck",top:["Psychology"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNREp4YTJZMGFoSUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Sam Altman",top:["Business"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNREpyZURBMmJCSUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Esther Duflo",top:["Economics"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNRFF3Tkd0eWJCSUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Chris Voss",top:["Psychology"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNRFI1WjI0eVpCSUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Edward F. Diener",top:["Psychology"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNRFI2ZVRneGF4SUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Ta-Nehisi Coates ",top:["Sociology"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNRFJ4T0RScU9CSUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Yann LeCun",top:["Computer science"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNRFozTlY5dE9CSUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Alison Gopnik",top:["Psychology"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNRFUzWDNwZmVSSUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Heung-Yeung Shum",top:["Computer science"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNRFV5WDNabmRoSUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Thomas Piketty",top:["Economics"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNRFY2YldkdFl4SUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Nicholas Eberstadt",top:["Business"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNRFZ6ZW5SemR4SUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-JoAnn E. Manson",top:["Natural science"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNRGd3Tlcxa05SSUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Fei Fei Li",top:["AI"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNRGxyYlRkNmVoSUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Jan Koum",top:["Computer engg"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNRjl6TlRsd2VCSUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Vitalik Buterin",top:["Computer engg"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNRjltYm1zNGVCSUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Dmitri Alperovitch",top:["Cybersecurity"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNRzVtZHpJME1CSUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Adam Grant",top:["Psychology"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNSE5uYUhOaWNSSUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Anil K Jain",top:["Computer science"],url:"https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNSHBqZGpaM05SSUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Rana el Kaliouby",top:["AI"],url:"https://news.google.com/rss/topics/CAAqJQgKIh9DQkFTRVFvTEwyMHZNREV4YW1obk0yUVNBbVZ1S0FBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Frank B. Hu",top:["Natural science"],url:"https://news.google.com/rss/topics/CAAqJQgKIh9DQkFTRVFvTEwyMHZNREV4ZGpWNFp6UVNBbVZ1S0FBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Tali Sharot",top:["Psychology"],url:"https://news.google.com/rss/topics/CAAqJQgKIh9DQkFTRVFvTEwyMHZNREV5ZG5oMFgyc1NBbVZ1S0FBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Zhong Lin Wang",top:["Natural science"],url:"https://news.google.com/rss/topics/CAAqJQgKIh9DQkFTRVFvTEwyY3ZNVEl4WnpkbU5Yb1NBbVZ1S0FBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Pushmeet Kohli",top:["Computer science"],url:"https://news.google.com/rss/topics/CAAqKAgKIiJDQkFTRXdvTkwyY3ZNVEZpZDJZeGRITm5NQklDWlc0b0FBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Maya Shankar",top:["Psychology"],url:"https://news.google.com/rss/topics/CAAqKAgKIiJDQkFTRXdvTkwyY3ZNVEZqTlhoelltSnlNQklDWlc0b0FBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Ilya Sutskever",top:["AI"],url:"https://news.google.com/rss/topics/CAAqKAgKIiJDQkFTRXdvTkwyY3ZNVEZqTUhSaU4zcGZheElDWlc0b0FBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Ian J. Goodfellow",top:["AI"],url:"https://news.google.com/rss/topics/CAAqKAgKIiJDQkFTRXdvTkwyY3ZNVEZqY0RkbmF6Vm5OUklDWlc0b0FBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Andrej Karpathy",top:["AI"],url:"https://news.google.com/rss/topics/CAAqKAgKIiJDQkFTRXdvTkwyY3ZNVEZtT0dKeGRuUjNOQklDWlc0b0FBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-katy milkman",top:["Economics"],url:"https://news.google.com/rss/topics/CAAqKAgKIiJDQkFTRXdvTkwyY3ZNVEZtTUhveGNteG9jeElDWlc0b0FBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Luke Burgis",top:["Philosophy"],url:"https://news.google.com/rss/topics/CAAqKAgKIiJDQkFTRXdvTkwyY3ZNVEZtTUhwMGVIQXdZaElDWlc0b0FBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Shlomo Benartzi",top:["Psychology"],url:"https://news.google.com/rss/topics/CAAqKAgKIiJDQkFTRXdvTkwyY3ZNVEZtWDNKNFkyeG5OUklDWlc0b0FBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Imran Chaudhri",top:["Computer science"],url:"https://news.google.com/rss/topics/CAAqKAgKIiJDQkFTRXdvTkwyY3ZNVEZuWjNaNWVuWXdZaElDWlc0b0FBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Sabine Hossenfelder",top:["Physics"],url:"https://news.google.com/rss/topics/CAAqKAgKIiJDQkFTRXdvTkwyY3ZNVEZuWm1zeGJuaHdPQklDWlc0b0FBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Olivier Sibony",top:["Management"],url:"https://news.google.com/rss/topics/CAAqKAgKIiJDQkFTRXdvTkwyY3ZNVEZuWW1oMGJHb3diUklDWlc0b0FBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Francois Chollet",top:["AI"],url:"https://news.google.com/rss/topics/CAAqKAgKIiJDQkFTRXdvTkwyY3ZNVEZvTW1kbWFtdG9jUklDWlc0b0FBUAE?hl=en-US&gl=US&ceid=US%3Aen"}
,{pub:"Google-Davide Scaramuzza",top:["Robotics"],url:"https://news.google.com/rss/topics/CAAqKAgKIiJDQkFTRXdvTkwyY3ZNVEZxTkhFeVlteDBjUklDWlc0b0FBUAE?hl=en-US&gl=US&ceid=US%3Aen"}

];

module.exports = {fetcher}
