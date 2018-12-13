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


### TWIST Folder:
For this project, I collaborated with Kylee. [Kylee's github](https://github.com/kyleeh)

The main learning objective for this project was to create a fully-functioning and deployable site built with nodeJS and express. MongoDB was used as a no-SQL database, hosted on mLab. Given an ER-diagram, we built the site using nodeJS models, controllers, routes, and views using the pug templating engine. Bootstrap was used to build the front-end. 

I contributed a large majority to this project, including the entire front-end as well as building the files for all of the models, controllers, and routes. Collaboration was used on this project to connect all of the data to the site as well as figure out problems with the nodeJS not connecting to the views. 

This project was very challenging. Although I am familiar with building sites on the front-end quite well, a back-end project as large of this took a lot of time. One challenge in particular was having data from mLab seed correctly to the site. I checked all of my variable names for consistency several times over, and after consulting with an outside source, found out that it is because mongo via mLab only reads collections as plural, all-lower-case entities. Since I use camel case for everything except for Schema names, this caused me a lot of trouble. Another example of a challenge I had was when running my code, the console would return an error that I couldn't understand, and a quick Google search wouldn't get me anywhere, either. After looking over my files for consistency, I realized that because I imported express-validators elsewhere, I needed to include the calls to it in all of my controllers as well as async, if it was called in the code. I have found that usually if an error is returned that doesn't list exactly what line is causing the issue, it may be a variable name capitalized wrong or an endpoint missing.

Features that are currently incomplete include the delete and update methods for all models. The create and read appear to work in the majority of cases, but time put a constraint on getting these done. The code is there; however, it is just short of working. Another feature that needs to be implemented for this project to be considered finished would be a table respresenting all of the current schedule instances, pulling data from each field. This way, a user can see all of the current times, topics, and presenters linked to specific sessions. Lastly, this project needs to be deployed to heroku for more practice in deployment. 

If I were to start over, I would do more research on how CRUD operations work with nodeJS code before starting the project. I would also like to see how interactions between tables in a normal SQL database are translated into a mongo database, as I am not entirely sure how that can be done other than required: "true". All in all, I am very happy with this project and would mostly like to bring the same enthusiam to learn to all of the new projects that I begin.
