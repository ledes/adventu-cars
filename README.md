# Adventu-cars
Rental car search app using a freely available public API (Hotwire’s Shopping API)
[link to the heroku app](https://adventu-cars.herokuapp.com)

#### Technical Specifications
Some of the libraries and APIs used for this app:
  * ReactJS
  * ES6
  * Lodash
  * Hotwire’s Shopping API
  * Google Api

#### Issues
  * There is a warning when enter location in development. This is due to the add-on geosuggest. There is already a pull request for this([link](https://github.com/ubilabs/react-geosuggest/pull/330)). In a real life application It would be more convenient to implement the google api without using an add-on for this.
  * The current documentation for Hotwire’s Shopping API could specify better how to format the parameters. One example of this would be the format of the dates, in the documentation an example would be the following: &enddate=01/23/2010). The api doesn't accept this format, instead I had to used encodeURIComponent to format the parameters in a way that they api accepts (&enddate=01%2F23%2F2010)

#### TODO

  * Ask Hotwire for the different errors that the app can produce and adapt them to the UI for a better user experience.
  * Change react favicon for a custom one.
  * Update geosuggest when warning problem is solved.
  * Email Hotwire’s Shopping API regarding to the documentation


#### Use in development
Adventu-cars is using [Hotwire’s Shopping API](http://developer.hotwire.com/docs/read/Rental_Car_Shopping_API) to get the different rental cars. This API requires a key.
Fill the keys in the provided .env file.
For REACT_APP_HOTWIRE_API_KEY add the Hotwire’s Shopping API key.
For REACT_APP_HOTWIRE_API_URL add the Hotwire’s Shopping API url with the right version.
Currently is expecting the following url: https://api.hotwire.com/v1.

After cloning this repository and adding the keys run `npm install` and `npm start`.
