# Brainflix

Brainflix is a project I completed as part of BrainStation's Web Development Diploma Program. It is a youtube-clone that allows users to upload videos and for users to make comments on those videos.  All mockups were provided by Brainstation.  The project did not require video upload functionality. I welcome all questions and feedback for future features, modifications, and improvements.

## Usage

To clone this project and run it locally, run the following commands in Terminal:

- `$ git clone git@github.com:codeman999988/Brainflix.git`
- `$ cd gatherings`
- `$ npm install`
- `$ cd server`
- `$ npm install`
- `$ cd ../client`
- `$ npm install`
- `$ npm start` to run the client side React app locally
- In a new Terminal tab:
  - `$ cd server`
  - `$ nodemon index.js` to run the Express server locally

## Tech Stack

- React
- SASS
- Node.js
- Express

## Dependencies

A description of some of the packages used in this project can be found below. You can find the full lists of dependencies used in the project's `package.json` files.

- `axios`: used for making API calls
- `uuid`: used for generating keys
- `unique name generator`: used for creating unique names for video uploaders
- `sass`: used for styling

## Future Features

- Set up database and use for storing information instead of server side JSON files
- Functionality that allows users to upload videos.


