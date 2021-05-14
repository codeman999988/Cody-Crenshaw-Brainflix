This project is Brainflix.  It is being built using react.

It was a project done for BrainStation's web development bootcamp.  Mockups and functionality requirements were provided by BrainStation.

It is a mock-website that represents a video site that has different videos that a user can watch.  The site also will allow users to upload their own videos.  This site is at it's final version, it has been built in three distinct sprints..  

It has limited functionality as it can not currently play videos or perform searches.

It is populated using a backend build with express.

This version's functionality includes:
1. Populating the page with data pulled from the backend server.
2. Comment section that allows users to post comments to the server, and delete them.
3. Upload page that can load video objects to the backend.
4. Video uploads and comment posts persist after the server goes down.

I attempted some of the diving deeper sections, and I had hoped to accomplish more but was distracted many hours providing help to other students.  I included comment posting and deleting functionality.  I had intended to blow the world away and actually include the ability to upload videos, but my attempts to figure that out ultimately proved fruitless.

I fixed most of the styling issues that plagued the sprint 2 version of the site, and utilized @use for importing partials instead of using the deprecated @import.  This, surprisingly, was a challenge, as I didn't know why earlier @use wasn't working for me.

Turns out you have to install sass in your NPM xD.

I still included the upload video form elements that I attempted to use.  It changes the styling somewhat, but it looks much more like the final version that I would have liked to have submitted.

If I had another day I would implement likes functionality, a dynamic views counter, a functioning video player, and if I had another week I would attempt the holy grail of video file upload functionality.

Check out the comments xD!

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


