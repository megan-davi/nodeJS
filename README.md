# Repository for testing sites built with nodeJS and express.


### Express Local Library Tutorial Folder:
[Link to tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website)

The main learning objective for this project was creating my first start-to-finish site using nodeJS on the back end. This included creating a skeleton website, using node as a web server, creating a database via mLab, displaying the data using forms via pug html templating, and deploying the finished product to heroku.

I ran into several issues throughout this project: 
* Formatting the lifespan of the authors to look like how I wanted was difficult. All I needed to work though this was making sure that moment was installed and to not use the same names (date_of_birth vs date_of_birth_formatted) for the schema names.
* Getting the genre detail page to display. I continue to run into a 404 error. Currently working on a fix for this one.
* Deploying to heroku. I am able to get a heroku app running, but pushing my files onto the heroku server seems to be causing issues.

Despite the issues that I ran into when working on this project, I have learned far more doing this tutorial about nodeJS than I have in the past. In particular, seeing how the views, controllers, and models all work together is much more clear to me now. I also have a much greater appreciation for the amount of dedication it takes to get a project up and running, from development to deployment. 


### Student Database Folder:
[Link to tutorial](https://www.youtube.com/watch?v=4yqu8YF29cU)
[Link to deployment](https://student-db-rlukmi.turbo360-vertex.com/)

After learning the basics of how nodeJS, express, and mongoDB can work together, this project allowed me to expand that knowledge to include deployment to Turbo360 as well. Turbo360 is a site that scaffolds RESTful apis and allows for an easy means to deploy nodeJS-based projects. 

My largest obstacle in this project was the actual deployment to Turbo360. Although my local machine ran the site and its connection to the mLab-hosted database fine, the connection to the database appeared to be lost after deployment. 

My greatest takeaways from this project include using URL endpoints to troubleshoot nodeJS code and good practice with writing CRUD operations that can interact with a database.
