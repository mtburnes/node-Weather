# NodeWeather

A Simple Node API Server for OpenWeatherMap's weather API.

This is technically just a proxy for running queries, so nothing special is happening here.

## Usage

Querying with the parameter `?zip=` will (in theory) relay the OpenWeatherMap API data in the response.

Example:

`http://localhost/?zip=10001` will return the current weather conditions for 10001 (New York).

## Installation

### npm

This project relies on Node and `npm`, so be sure that those are installed properly.

Runnning this command will install all necessary dependencies to your project folder.
```
npm install
```

After this is done, create a file called apiKey, then place your [OpenWeatherMap API Key](https://home.openweathermap.org/api_keys) as it's only contents.

## Run

```
node .\weather.js
```

This will launch a node.js server on 8080. Browse to `http://localhost:8080` to see it in action.
