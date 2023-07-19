# Weather App

A web app that uses Express as the backend and fetches data from the Open Weather API and displays it at the front end. You can search for major cities and the app will give you the current weather conditions there.

## Features

- Search for any city in the world and get the current temperature, humidity, wind speed, and weather description.
- See the weather icons corresponding to the weather conditions.
- Get an error message if the city is not found or the API request fails.

## Installation

To run this app locally, you need to have Node.js and npm installed on your machine. You also need to get an API key from [Open Weather].

1. Clone this repository or download the zip file.
2. Navigate to the project directory and run `npm install` to install the dependencies.
3. Create a `.env` file in the root directory and add your API key as `API_KEY=your_api_key`.
4. Run `npm start` to start the server.
5. Open your browser and go to `http://localhost:3000` to see the app.

## Usage

To use this app, simply enter a city name in the search box and click on the search button. You will see the weather information for that city below the search box. You can also press enter to submit your query.

## Contributing

This project is open for contributions. If you want to contribute, please follow these steps:

1. Fork this repository and create a new branch for your feature or bug fix.
2. Write your code and test it locally.
3. Commit your changes and push them to your forked repository.
4. Create a pull request with a clear description of your changes and link it to the issue if applicable.
5. Wait for a review and feedback from the maintainer.

## License

This project is licensed under the MIT License.
