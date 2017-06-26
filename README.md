# Adventu-cars
Rental car search app using a freely available public API (Hotwire’s Shopping API). [Link to the heroku app](https://adventu-cars.herokuapp.com)

#### Technical Specifications
Some of the libraries and APIs used for this app:
  * ReactJS
  * ES6
  * Lodash
  * Sass
  * Hotwire’s Shopping API
  * Google API

#### Approach
  For this app I decided to use ES6 and React as my main resources for building the one page application.
  After thinking about how to build the project and writing down the desired features, I built component by component having the state in the parent component and passing the states through the props of each component.


  I decided to don't use Redux for this application because I thought it was overkill for this small project and it would have taken more time to implement. Having said that, I think Redux is a brilliant solution for managing the state in a react app.
  For the style I decided to use Sass because helps to organize the css code.

  Regarding to the `destination input`, I thought that using the Google API would avoid errors trying to find a wrong location.


  For some of the features I have used external addons to save development time. This creates dependencies and some of them could be avoided by building those features from scratch.

#### Issues
  * There is a warning when enter location in development. This is due to the add-on `geosuggest`. There is already a pull request for this([link](https://github.com/ubilabs/react-geosuggest/pull/330)). In a real life application It would be more convenient to implement the google API without using an add-on for this.

  * The current documentation for Hotwire’s Shopping API could specify better how to format the parameters. One example of this would be the format of the dates, following the documentation the dates should be like this example: `&enddate=01/23/2010`. The API doesn't accept this format, instead I had to used encodeURIComponent to format the parameters in a way that they API accepts (`&enddate=01%2F23%2F2010`).

#### Todo

  * Add a spinner gif that will be displayed while the API call is being made
  * Ask Hotwire for the different errors that the app can produce and adapt them to the UI for a better user experience.
  * Change react favicon for a custom one.
  * Update geosuggest when warning problem is solved.
  * Email Hotwire’s Shopping API regarding to the documentation.
  * Improve styling of carListEntries


#### Use in development
Adventu-cars is using [Hotwire’s Shopping API](http://developer.hotwire.com/docs/read/Rental_Car_Shopping_API) to get the different rental cars. This API requires a key.
Fill the keys in the provided .env file.


For REACT_APP_HOTWIRE_API_KEY add the Hotwire’s Shopping API key.


For REACT_APP_HOTWIRE_API_URL add the Hotwire’s Shopping API url with the right version.


Currently is expecting the following url: https://api.hotwire.com/v1.

After cloning this repository and adding the keys run `npm install` and `npm start`.
