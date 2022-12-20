# Cypress_telnyx_task
 <h3>Installing</h3>

In terminal type:

npm init -y

Run the following command in terminal:

npm install cypress --save-dev

Go to package.json file and add in two different scripts, for cypress run and the other for cypress open:

"scripts": {
    "cypress:run": "cypress run",
    "cypress:open": "cypress open"
},

<h3>How to open and run a project</h3>

Run the following command to open Cypress:

npm run cypress:open

The test scripts are located at: cypress\e2e\ \*.cy.js

The page objects are in: cypress\pages\ \*.page.js


