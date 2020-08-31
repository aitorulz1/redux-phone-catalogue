# redux-phone-catalogue
The project has a REST API and React-redux API

The API is deployed in Heroku and also can run locally with the commands entered in the README of the API, it is necessary to have mongo in the background to work

React has the necessary configuration to work also with the service provided with Heroku or locally

In the project directory, you can run:

npm i
For install all dependencies and devDependencies necessary for the API run correctly

npm run dev
Runs the app in the development mode and listen for changes
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

npm run seeds
Launches the seeds configuration for creating a MongoDB
The db calls an api with some different phones. The db only have a length of 8 items for testing, you can add as much as you like

Heroku
It comes with the necessary configuration for the deployment in Heroku, you only need to configure your own database

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

Cors
Cors (HTTP access control) configuration implemented, the API works in PORT http://localhost:4000

In case you want to use the API with a library like React.js that uses port 3000 by default