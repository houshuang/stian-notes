---
title: "Wikidata"
---

- Founded by [[Denny Vrandečić]]
- Data structure
    - "Q - **Wikidata concept**, P - **Wikidata property**, L - **Wikidata lexems**"
    - "Q-items are related to a thing or an idea, not to the word describing it. Since 2018, Wikidata has also stored a new type of data: words, phrases and sentences, in many languages, described in many languages. This information is stored in new types of entities, called **Wikidata lexems** (L), **Wikidata forms** (F) and **Wikidata senses** (S). You can learn more about the data model on the documentation page."
- Strategy
    -  [[Wikidata]] strategy (from their Twitter) #Newsletter #p
       - https://www.wikidata.org/wiki/Wikidata:WikidataCon_2019/Program/Sessions/Glimpse_over_Wikidata
       - https://meta.wikimedia.org/wiki/Wikidata/Strategy/2019
       - https://www.wikidata.org/wiki/Wikidata:WikidataCon_2019/Program/Sessions/Glimpse_over_Wikidata
- Newsletter
    -  [[Wikidata]] #p
       - already have a huge amount of notes on this, should first go through and sort them. Also have a ton of saved tabs. Should also do a quick sweep to see if there's anything new related to Corona crisis.
       - Could even be two issues. Create outline and see.
       - Only Wikidata, or something else? Semantics in general etc?
- Use cases
    - recommend female authors for conference
        -  [[Wikidata]] as a service to recommend female authors for conferences #Newsletter #p
           - [link](https://query.wikidata.org/#%0ASELECT%0A%20%20%3Fscore%0A%20%20%3Fauthor%20%3FauthorLabel%0A%20%20%3Fexample_work%20%3Fexample_workLabel%0AWITH%20%7B%0A%20%20%23%20Universities%2C%20research%20centers%2C%20etc.%0A%20%20SELECT%20%3Funiversity%20WHERE%20%7B%0A%20%20%20%20VALUES%20%3Funiversity%20%7B%20wd%3AQ3918%20wd%3AQ1371037%20wd%3AQ7315155%20wd%3AQ31855%20wd%3AQ2385804%20%7D%0A%20%20%7D%0A%7D%20AS%20%25universities%0AWITH%20%7B%0A%20%20%23%20Academic%20institutions%20on%20all%20levels%0A%20%20SELECT%20DISTINCT%20%3Forganization%20%3Fother_geo%20WHERE%20%7B%0A%20%20%20%20INCLUDE%20%25universities%0A%20%20%20%20%3Forganization%20wdt%3AP361%2a%20%2F%20wdt%3AP31%20%2F%20wdt%3AP279%2a%20%3Funiversity%20.%0A%20%20%20%20%3Forganization%20wdt%3AP625%20%3Fother_geo%20.%0A%20%20%7D%0A%7D%20AS%20%25organizations%0AWITH%20%7B%0A%20%20%23%20Compute%20distance%20for%20authors%0A%20%20SELECT%0A%20%20%20%20%28MAX%28%3Finverse_distance_%29%20AS%20%3Finverse_distance%29%0A%20%20%20%20%3Fauthor%0A%20%20WHERE%20%7B%0A%20%20%20%20INCLUDE%20%25organizations%0A%20%20%20%20%23%20Choose%20a%20seed%20location%2C%20e.g.%20London%20%28Q84%29%0A%20%20%20%20wd%3AQ84%20wdt%3AP625%20%3Fgeo%20.%0A%20%20%20%20BIND%281%20%2F%20geof%3Adistance%28%3Fother_geo%2C%20%3Fgeo%29%20AS%20%3Finverse_distance_%29%0A%20%20%20%20%23%20Let%27s%20restrict%20that%20to%20places%20within%2020km%0A%20%20%20%20FILTER%28%3Finverse_distance_%20%3E%200.05%29%20%0A%20%20%20%20%3Fauthor%20wdt%3AP108%20%20%3Forganization%20.%20%20%0A%20%20%7D%0A%20%20GROUP%20BY%20%3Fauthor%0A%7D%20AS%20%25authors_with_distance%0AWITH%20%7B%0A%20%20SELECT%0A%20%20%20%20%3Fauthor%0A%20%20%20%20%28SUM%28%3Ftopic_score%29%20%2a%20MAX%28%3Finverse_distance%29%20AS%20%3Fscore%29%0A%20%20%20%20%28SAMPLE%28%3Fwork%29%20AS%20%3Fexample_work%29%0A%20%20WHERE%20%7B%0A%20%20%20%20INCLUDE%20%25authors_with_distance%0A%20%20%20%20%23%20Filter%20for%20female%20authors%0A%20%20%20%20%3Fauthor%20wdt%3AP21%20wd%3AQ6581072%20.%0A%20%20%20%20%23%20Filter%20for%20authors%20with%20Wikimedia%20sitelinks%0A%20%20%20%20%3Fauthor%20wikibase%3Asitelinks%20%3Fsitelinks.%0A%20%20%20%20FILTER%28%3Fsitelinks%20%3E%200%29%0A%20%20%20%20%23%20Filter%20for%20authors%20who%20have%20published%20on%20a%20specific%20topic%2C%20e.g.%20Q12156%20%28malaria%29%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%3Fwork%20wdt%3AP50%20%3Fauthor%20.%0A%20%20%20%20%20%20%3Fwork%20wdt%3AP921%20%20wd%3AQ12156%20.%20BIND%283%20AS%20%3Ftopic_score%29%0A%20%20%20%20%7D%0A%20%20%20%20UNION%0A%20%20%20%20%7B%20%3Fauthor%20wdt%3AP101%20wd%3AQ12156%20.%20BIND%2820%20AS%20%3Ftopic_score%29%20%7D%0A%20%20%7D%0A%20%20GROUP%20BY%20%3Fauthor%0A%7D%20AS%20%25results%0AWHERE%20%7B%0A%20%20INCLUDE%20%25results%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22en%2Cda%2Cde%2Ces%2Cfr%2Cjp%2Cnl%2Cno%2Cru%2Csv%2Czh%22.%20%7D%0A%7D%0AORDER%20BY%20DESC%28%3Fscore%29%20%0A)
           - https://twitter.com/ReaderMeter/status/1230882583455526912
    - GLAM institutions
        -  live query to show **GLAM** institutions in England **GIS**
               - [link](https://query.wikidata.org/embed.html#%23defaultView%3AMap%7B%22layer%22%3A%20%22%3FtypeLabel%22%7D%0ASELECT%20DISTINCT%20%3Fs%20%3FsLabel%20%3Fcoor%20%3Flayer%20%3FtypeLabel%20WHERE%20%7B%0Ahint%3AQuery%20hint%3Aoptimizer%20%22None%22%20.%0A%20%20%3Fs%20wdt%3AP131*%20wd%3AQ25%20.%20%20%0A%20%20%20%20%7B%20%3Fs%20wdt%3AP31%2Fwdt%3AP279*%20wd%3AQ33506%20%7D%0A%20%20UNION%20%7B%20%3Fs%20wdt%3AP31%2Fwdt%3AP279*%20wd%3AQ7075%20%7D%20%0A%20%20UNION%20%7B%20%3Fs%20wdt%3AP31%2Fwdt%3AP279*%20wd%3AQ166118%20%7D%20.%0A%20%20%20%20%20%20%20%3Fs%20%20%20wdt%3AP625%20%3Fcoor%20.%0A%20%20%3Fs%20wdt%3AP31%20%3Ftype%20.%0A%20%20%3Ftype%20wdt%3AP279*%20wd%3AQ1030034%20.%0A%20%0A%20%20%20%20%20%20%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%0ASERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22en%22%20%7D%0A%7D%0AORDER%20BY%20%20%3FsLabel%20%0A%0A%0A%0A)
               - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fstian%2F2q5JiU0KpU?alt=media&token=69abfa0f-b483-4a91-a8f1-a116db633d72)
    - query examples
        -  Query examples
               - [French female authors whose work is in the public domain](https://w.wiki/6fP) ([source](https://george2etexte.wordpress.com/2019/07/30/une-carte-de-france-des-autrices-dans-le-domaine-public/))
               - [Timeline of hypertext systems](https://w.wiki/6oo) ([source](https://twitter.com/nichtich/status/1158105666894082048))
               - [Megaliths in the Basque Country, color-coded by type](https://w.wiki/6oq) ([source](https://twitter.com/theklaneh/status/1157975728060870656))
               - [Heavy metal bands from Finland with or without picture and date of the picture](https://w.wiki/6or) ([source](https://twitter.com/sukkoria/status/1157969988898250752))
               - [Types of GLAMs in Wikidata](https://w.wiki/6jp) ([source](https://twitter.com/fagerving/status/1157248579330879488))
    - Use for **fact checking**
        - "[[Wikidata]] has concept of multiple claims, and "disputed by", however I found few examples of good usage with real sources #p"
        - wrote about this in **[[Newsletter]]-1**
- Ingestion
    -  But how is it fed?
                   - Right now there are bots importing from other similar monolithic databases.
                   - But what if, for example, the city of Lausanne could publish regular data in some kind of open format that could be automatically imported to the city of Lausanne page with proper attribution, updating when the mayor changes and so on.
                   - There could even be blockchain signatures verifying different sources, but that's not really necessary.
                   - Are there other ways in which micro data is used other than through scraping by Google or Twitter to show preview cards? I guess for bibliographic import or plugins
        - "made me think that one could have some kind of RSS feed for RDF statements, add that URL to the Lausanne entry, and Lausanne city could themselves every month publish new population figures, name of mayor etc, in semantic format, which would be automatically added to the knowledge base… [OpenFood.ch](http://openfood.ch/) could automatically publish nutritional data, etc."
        - "Actually just before the Wikidata presentation was the React meet-up, talking about **GraphQL**, a structured way of requesting hierarchical/nested/circular data from servers… I guess cities and institutions having GraphQL APIs would be great for [opendata.ch](http://opendata.ch/) etc, to have really flexible access to public data… All these nice ideas and linkages."
    - "**soweego** links [[Wikidata]] to large catalogs through machine learning. It partners with **Mix'n'match**, which mainly deals with small catalogs. #p"
        - https://meta.wikimedia.org/wiki/Grants:Project/Hjfocs/soweego
- Media
    - http://cre.fm/cre205-wikidata
    - https://chaosradio.ccc.de/cr240.html
- **linked data** connection
    - "semantic data, micro data. [[Wikidata]] is a single community and database even though it feels more like an infrastructure for the web, because it is open data that can be downloaded and that has open API's.  #p"
- Tools
    - {{embed:**Wikidata resolver** - resolve a Wikidata entity #p}}
    -  Primary sources tool
               - https://www.wikidata.org/wiki/Wikidata:Primary_sources_tool#Give_it_a_try
- People
    - "[[Guyuri Lajos]] #Wikidata #p"
- My ideas
    - "I think these are really interesting, would love to find ways to integrating them with education stuff - maybe automatic analysis of students answers, or actually used in teaching etc, in the future. (Wikidata could be interesting to talk about sources, verification, claims etc)"
- Related projects
    - "Related very cool tool/approach here: https://medium.com/@sklarman/querying-linked-data-with-graphql-959e28aa8013"
    - "AND also saw this released today, and a talk on this next week: [www.yago-knowledge.org](http://www.yago-knowledge.org/)"


Backlinks
# [[Newsletter]]
  - Issue 1  Topic - argumentation mapping  **fact checking** in general (newspapers)  Semantic metadata
    - [[Wikidata]] has concept of multiple claims, and "disputed by", however I found few examples of good usage with real sources #p
                        - https://www.wikidata.org/wiki/Q302
                            - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fstian%2FIjEXejX1P4?alt=media&token=b951552d-acb5-4a67-8df7-bcc182fe850a)
# [[Newsletter]]
  - Upcoming topics
    - [[Wikidata]] #p
            - already have a huge amount of notes on this, should first go through and sort them. Also have a ton of saved tabs. Should also do a quick sweep to see if there's anything new related to Corona crisis.
            - Could even be two issues. Create outline and see.
            - Only Wikidata, or something else? Semantics in general etc?
# **February 20th, 2020**
  - **Inbox**  [[Michael Karpeles]] has a **world wide graph** ap...
    - similar to **[[Wikidata]]-p**, designed as an open source replacement for [[The Brain]]
# [[Wikidata]]
  - Use cases  Use for **fact checking**
    - "[[Wikidata]] has concept of multiple claims, and "disputed by", however I found few examples of good usage with real sources #p"
# [[Wikidata]]
  - Ingestion
    - "**soweego** links [[Wikidata]] to large catalogs through machine learning. It partners with **Mix'n'match**, which mainly deals with small catalogs. #p"
            - https://meta.wikimedia.org/wiki/Grants:Project/Hjfocs/soweego
# [[Wikidata]]
  - **linked data** connection
    - "semantic data, micro data. [[Wikidata]] is a single community and database even though it feels more like an infrastructure for the web, because it is open data that can be downloaded and that has open API's.  #p"
# **February 24th, 2020**
  - [[Week 9, 2020]]  **Daily plan**  {{**DONE**}} get to tab-zero in 30 minutes  07:15 to 07:34 surprisingly few Chrome tabs, becau...
    - but now have a ton due to looking into [[Wikidata]] #p
# **February 24th, 2020**
  - [[Week 9, 2020]]  **Inbox** 
    - Notes from [[Wikidata]] #p
                - **Wikidata resolver** - resolve a Wikidata entity #p
                    - https://tools.wmflabs.org/wikidata-todo/resolver.php
                - Q - **Wikidata concept**, P - **Wikidata property**, L - **Wikidata lexems**
                - **soweego** links [[Wikidata]] to large catalogs through machine learning. It partners with **Mix'n'match**, which mainly deals with small catalogs. #p
                - Query examples
                    - [French female authors whose work is in the public domain](https://w.wiki/6fP) ([source](https://george2etexte.wordpress.com/2019/07/30/une-carte-de-france-des-autrices-dans-le-domaine-public/))
                    - [Timeline of hypertext systems](https://w.wiki/6oo) ([source](https://twitter.com/nichtich/status/1158105666894082048))
                    - [Megaliths in the Basque Country, color-coded by type](https://w.wiki/6oq) ([source](https://twitter.com/theklaneh/status/1157975728060870656))
                    - [Heavy metal bands from Finland with or without picture and date of the picture](https://w.wiki/6or) ([source](https://twitter.com/sukkoria/status/1157969988898250752))
                    - [Types of GLAMs in Wikidata](https://w.wiki/6jp) ([source](https://twitter.com/fagerving/status/1157248579330879488))
                - Q-items are related to a thing or an idea, not to the word describing it. Since 2018, Wikidata has also stored a new type of data: words, phrases and sentences, in many languages, described in many languages. This information is stored in new types of entities, called **Wikidata lexems** (L), **Wikidata forms** (F) and **Wikidata senses** (S). You can learn more about the data model on the documentation page.
# **February 24th, 2020**
  - [[Week 9, 2020]]  **Inbox**   Notes from [[Wikidata]] #p
    - **soweego** links [[Wikidata]] to large catalogs through machine learning. It partners with **Mix'n'match**, which mainly deals with small catalogs. #p
# **February 24th, 2020**
  - [[Week 9, 2020]]  **Inbox**   [[Newsletter]] on **Semantic Web**
    - [[Wikidata]] #p
# **February 24th, 2020**
  - [[Week 9, 2020]]  **Inbox** 
    - [[Wikidata]] as a service to recommend female authors for conferences #Newsletter #p
                - [link](https://query.wikidata.org/#%0ASELECT%0A%20%20%3Fscore%0A%20%20%3Fauthor%20%3FauthorLabel%0A%20%20%3Fexample_work%20%3Fexample_workLabel%0AWITH%20%7B%0A%20%20%23%20Universities%2C%20research%20centers%2C%20etc.%0A%20%20SELECT%20%3Funiversity%20WHERE%20%7B%0A%20%20%20%20VALUES%20%3Funiversity%20%7B%20wd%3AQ3918%20wd%3AQ1371037%20wd%3AQ7315155%20wd%3AQ31855%20wd%3AQ2385804%20%7D%0A%20%20%7D%0A%7D%20AS%20%25universities%0AWITH%20%7B%0A%20%20%23%20Academic%20institutions%20on%20all%20levels%0A%20%20SELECT%20DISTINCT%20%3Forganization%20%3Fother_geo%20WHERE%20%7B%0A%20%20%20%20INCLUDE%20%25universities%0A%20%20%20%20%3Forganization%20wdt%3AP361%2a%20%2F%20wdt%3AP31%20%2F%20wdt%3AP279%2a%20%3Funiversity%20.%0A%20%20%20%20%3Forganization%20wdt%3AP625%20%3Fother_geo%20.%0A%20%20%7D%0A%7D%20AS%20%25organizations%0AWITH%20%7B%0A%20%20%23%20Compute%20distance%20for%20authors%0A%20%20SELECT%0A%20%20%20%20%28MAX%28%3Finverse_distance_%29%20AS%20%3Finverse_distance%29%0A%20%20%20%20%3Fauthor%0A%20%20WHERE%20%7B%0A%20%20%20%20INCLUDE%20%25organizations%0A%20%20%20%20%23%20Choose%20a%20seed%20location%2C%20e.g.%20London%20%28Q84%29%0A%20%20%20%20wd%3AQ84%20wdt%3AP625%20%3Fgeo%20.%0A%20%20%20%20BIND%281%20%2F%20geof%3Adistance%28%3Fother_geo%2C%20%3Fgeo%29%20AS%20%3Finverse_distance_%29%0A%20%20%20%20%23%20Let%27s%20restrict%20that%20to%20places%20within%2020km%0A%20%20%20%20FILTER%28%3Finverse_distance_%20%3E%200.05%29%20%0A%20%20%20%20%3Fauthor%20wdt%3AP108%20%20%3Forganization%20.%20%20%0A%20%20%7D%0A%20%20GROUP%20BY%20%3Fauthor%0A%7D%20AS%20%25authors_with_distance%0AWITH%20%7B%0A%20%20SELECT%0A%20%20%20%20%3Fauthor%0A%20%20%20%20%28SUM%28%3Ftopic_score%29%20%2a%20MAX%28%3Finverse_distance%29%20AS%20%3Fscore%29%0A%20%20%20%20%28SAMPLE%28%3Fwork%29%20AS%20%3Fexample_work%29%0A%20%20WHERE%20%7B%0A%20%20%20%20INCLUDE%20%25authors_with_distance%0A%20%20%20%20%23%20Filter%20for%20female%20authors%0A%20%20%20%20%3Fauthor%20wdt%3AP21%20wd%3AQ6581072%20.%0A%20%20%20%20%23%20Filter%20for%20authors%20with%20Wikimedia%20sitelinks%0A%20%20%20%20%3Fauthor%20wikibase%3Asitelinks%20%3Fsitelinks.%0A%20%20%20%20FILTER%28%3Fsitelinks%20%3E%200%29%0A%20%20%20%20%23%20Filter%20for%20authors%20who%20have%20published%20on%20a%20specific%20topic%2C%20e.g.%20Q12156%20%28malaria%29%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%3Fwork%20wdt%3AP50%20%3Fauthor%20.%0A%20%20%20%20%20%20%3Fwork%20wdt%3AP921%20%20wd%3AQ12156%20.%20BIND%283%20AS%20%3Ftopic_score%29%0A%20%20%20%20%7D%0A%20%20%20%20UNION%0A%20%20%20%20%7B%20%3Fauthor%20wdt%3AP101%20wd%3AQ12156%20.%20BIND%2820%20AS%20%3Ftopic_score%29%20%7D%0A%20%20%7D%0A%20%20GROUP%20BY%20%3Fauthor%0A%7D%20AS%20%25results%0AWHERE%20%7B%0A%20%20INCLUDE%20%25results%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22en%2Cda%2Cde%2Ces%2Cfr%2Cjp%2Cnl%2Cno%2Cru%2Csv%2Czh%22.%20%7D%0A%7D%0AORDER%20BY%20DESC%28%3Fscore%29%20%0A)
                - https://twitter.com/ReaderMeter/status/1230882583455526912
# **February 24th, 2020**
  - [[Week 9, 2020]]  **Inbox** 
    - [[Wikidata]] #Newsletter #p
                - live query to show **GLAM** institutions in England **GIS**
                    - [link](https://query.wikidata.org/embed.html#%23defaultView%3AMap%7B%22layer%22%3A%20%22%3FtypeLabel%22%7D%0ASELECT%20DISTINCT%20%3Fs%20%3FsLabel%20%3Fcoor%20%3Flayer%20%3FtypeLabel%20WHERE%20%7B%0Ahint%3AQuery%20hint%3Aoptimizer%20%22None%22%20.%0A%20%20%3Fs%20wdt%3AP131*%20wd%3AQ25%20.%20%20%0A%20%20%20%20%7B%20%3Fs%20wdt%3AP31%2Fwdt%3AP279*%20wd%3AQ33506%20%7D%0A%20%20UNION%20%7B%20%3Fs%20wdt%3AP31%2Fwdt%3AP279*%20wd%3AQ7075%20%7D%20%0A%20%20UNION%20%7B%20%3Fs%20wdt%3AP31%2Fwdt%3AP279*%20wd%3AQ166118%20%7D%20.%0A%20%20%20%20%20%20%20%3Fs%20%20%20wdt%3AP625%20%3Fcoor%20.%0A%20%20%3Fs%20wdt%3AP31%20%3Ftype%20.%0A%20%20%3Ftype%20wdt%3AP279*%20wd%3AQ1030034%20.%0A%20%0A%20%20%20%20%20%20%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%0ASERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22en%22%20%7D%0A%7D%0AORDER%20BY%20%20%3FsLabel%20%0A%0A%0A%0A)
                    - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fstian%2F2q5JiU0KpU?alt=media&token=69abfa0f-b483-4a91-a8f1-a116db633d72)
                - **soweego** links [[Wikidata]] to external catalogs (by **Marco Fossati** @hjfocs) #p
                - Primary sources tool
                    - https://www.wikidata.org/wiki/Wikidata:Primary_sources_tool#Give_it_a_try
                - AND also saw this released today, and a talk on this next week: [www.yago-knowledge.org](http://www.yago-knowledge.org/)
                - I think these are really interesting, would love to find ways to integrating them with education stuff - maybe automatic analysis of students answers, or actually used in teaching etc, in the future. (Wikidata could be interesting to talk about sources, verification, claims etc)
                - made me think that one could have some kind of RSS feed for RDF statements, add that URL to the Lausanne entry, and Lausanne city could themselves every month publish new population figures, name of mayor etc, in semantic format, which would be automatically added to the knowledge base… [OpenFood.ch](http://openfood.ch/) could automatically publish nutritional data, etc.
                - Actually just before the Wikidata presentation was the React meet-up, talking about **GraphQL**, a structured way of requesting hierarchical/nested/circular data from servers… I guess cities and institutions having GraphQL APIs would be great for [opendata.ch](http://opendata.ch/) etc, to have really flexible access to public data… All these nice ideas and linkages.
                - Very interesting presentation about Wikidata today. He focused mostly on automatic mining of data, but I just found this stuff on #**Linked Research**
                    - https://rubenverborgh.github.io/Linked-Research-ESWC2017/
                        - (presentation on publishing **RDF** on your own publication)
                    - Related very cool tool/approach here: https://medium.com/@sklarman/querying-linked-data-with-graphql-959e28aa8013
                    - http://www.wcri2017.org/
                    - [Workshop on Enabling Decentralised Scholarly Communication](https://linkedresearch.org/events/eswc2017/)
# **February 24th, 2020**
  - [[Week 9, 2020]]  **Inbox**   [[Wikidata]] #Newsletter #p
    - **soweego** links [[Wikidata]] to external catalogs (by **Marco Fossati** @hjfocs) #p
# **March 2nd, 2020**
  - **Inbox**  **DebateMap** for #graph-reasoning #[[argumentatio...  Features
    - unique identifiers (but not linked externally like [[Wikidata]]?) #p
# **March 2nd, 2020**
  - **Inbox**
    - [[Wikidata]] strategy (from their Twitter) #Newsletter #p
            - https://www.wikidata.org/wiki/Wikidata:WikidataCon_2019/Program/Sessions/Glimpse_over_Wikidata
            - https://meta.wikimedia.org/wiki/Wikidata/Strategy/2019
            - https://www.wikidata.org/wiki/Wikidata:WikidataCon_2019/Program/Sessions/Glimpse_over_Wikidata
# **March 25th, 2020**
  - **Inbox**  From **February 26th, 2020**  #Newsletter idea. 
    - semantic data, micro data. [[Wikidata]] is a single community and database even though it feels more like an infrastructure for the web, because it is open data that can be downloaded and that has open API's.  #p
                    - But how is it fed?
                        - Right now there are bots importing from other similar monolithic databases.
                        - But what if, for example, the city of Lausanne could publish regular data in some kind of open format that could be automatically imported to the city of Lausanne page with proper attribution, updating when the mayor changes and so on.
                        - There could even be blockchain signatures verifying different sources, but that's not really necessary.
                        - Are there other ways in which micro data is used other than through scraping by Google or Twitter to show preview cards? I guess for bibliographic import or plugins
# **April 14th, 2020**
  - **Log**
    - Cleaned up [[Wikidata]] mentions using #p
# **April 14th, 2020**
  - **Inbox**  **Stian Håklev (侯爽)**: Experimenting with a way of...
    - As I go along, I add the tag whenever I've fully processed a note, and use a filter to remove these. When there are two important tags, and I might want to process the second tag, I instead change from [[Wikidata]] to **[[Wikidata]]-p**.
# **April 14th, 2020**
  - **Inbox**  **Stian Håklev (侯爽)**: Experimenting with a way of...
    - As I go along, I add the tag whenever I've fully processed a note, and use a filter to remove these. When there are two important tags, and I might want to process the second tag, I instead change from [[Wikidata]] to **[[Wikidata]]-p**.
# **April 14th, 2020**
  - **Inbox**  **Stian Håklev (侯爽)**: Experimenting with a way of...
    - Thus I can still click on Wikidata to get to this page, but I can filter on **[[Wikidata]]-p** to remove it from the linked references of this page (it will still show up in the linked references for that other tag). Here I might also want to process it in the context of The Brain. https://t.co/keQjZGfp48
                - ![](https://pbs.twimg.com/media/EVlrGI-WAAICYKS.png)
# [[Denny Vrandečić]]
  - [[Wikidata]] founder #p
