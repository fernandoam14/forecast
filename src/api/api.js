import { getDateWithBars, getDateInFull, getWeatherConditions } from './util';

const axios = require('axios');
var parseString = require('xml2js').parseString;

export async function getCityForecast(station, cityId) {
  try {
    const currentWeatherResponse = await axios.get('http://servicos.cptec.inpe.br/XML/estacao/' + station + '/condicoesAtuais.xml');
    const forecastResponse = await axios.get('http://servicos.cptec.inpe.br/XML/cidade/7dias/' + cityId + '/previsao.xml');
    return parseXMLForecast(currentWeatherResponse.data, forecastResponse.data);
  } catch(error) {
    console.log(error);
  }
}

function parseXMLForecast(currentWeatherXML, forecastXML) {
  var currentWeather = null;

  parseString(currentWeatherXML, (error, result) => {
    currentWeather = result;
  });

  var forecast = null;

  parseString(forecastXML, (error, result) => {
    forecast = result;
  });

  forecast.cidade.previsao.forEach((day, i, array) => {
    array[i] = {
      date: getDateWithBars(new Date(day.dia[0] + 'T00:00:00')),
      weatherConditions: getWeatherConditions(day.tempo[0]),
      minimumTemperature: day.minima[0],
      maximumTemperature: day.maxima[0],
      iuv: day.iuv[0]
    }
  });

  return {
    city: forecast.cidade.nome[0],
    dateNow: getDateInFull(new Date()),
    temperatureNow: currentWeather.metar.temperatura[0],
    weatherConditionsNow: getWeatherConditions(currentWeather.metar.tempo[0]),
    weekForecast: forecast.cidade.previsao
  };
}
