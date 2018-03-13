# Ski Shop app using MEAN Stack

A ski shop application built with MEAN stack.

## Prerequisites
* Node.js - Download and Install [Node.js](https://nodejs.org/en/download/). 
* MongoDB - Download and Install [MongoDB](http://www.mongodb.org/downloads) - Make sure it's running on the default port (27017).

## Installation
* Clone the repository: `git clone git@github.com:mmingzhang/mean-ski-shop`
* Install dependencies: `npm install`
* Import server/db/products-ski.json file to MongoDB:

  `mongoimport -d meanskishop -c skiproducts --file products-ski.json`

## Usage 
* Start server: `npm start`

  then navigate to http://localhost:8800 to view the app.

