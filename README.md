mymail
======

# Welcome to the angular-training wiki!

# **Step 1:** Download and install the required software

The following tools are required for training and could be easily installed over internet. The startup session will cover the tools required. Please download the appropriate versions based on your OS.

* NodeJS platform (download nodejs from http://nodejs.org/download/)
* Modern Web Browser (Chrome)
* An IDE to write code (https://www.jetbrains.com/webstorm/download/)
* Version Control System (http://git-scm.com/download/win)

# **Step 2:** Creating an empty project

Execute the following

* Create a folder named 'my mail' (say C:/Training on windows or ~/Training on a mac) in a place where you want to keep this project
* cd mymail
* git init - this will make your directory a local git repository
* npm install -g bower - installs bower (bower.io/)
* bower init - This will ask you a set of questions to create a bower.json file with those answers

Now you should see a new file bower.json in your project. Open the folder in IDE (web storm) and verify the contents of the json file.

# **Step 3:** Add required dependencies to the project

A web project typically depends on various other dependencies like JavaScript and CSS libraries. We are going to use angularjs, bootstrap, jquery to start with. Bower package manager helps us do all that from command line. Execute the following from command prompt (terminal):

* bower install angularjs --save
* bower install jquery --save
* bower install bootstrap --save

Now your bower.json should look something like this.

      {
    "name": "mymail",
    "version": "1.0.0",
    "authors": [
      "training"
    ],
    "description": "simple mail client",
    "main": "app.js",
    "license": "MIT",
    "private": true,
    "ignore": [
      "**/.*",
      "node_modules",
      "bower_components",
      "test",
      "tests"
    ],
    "dependencies": {
      "angularjs": "~1.3.3",
      "bootstrap": "~3.3.1",
      "jquery": "~2.1.1"
    }
    }
