
const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

//30e3a6e31e7613317fa97ad5a033dfba

const argv = yargs
            .options({
              a:
              {
                demand: true,
                alias: 'address',
                describe: 'Address to fetch weather for',
                string: true
              }
            })
            .help()
            .alias('help','h')
            .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) =>
{
  if(errorMessage)
  {
    console.log(errorMessage);
  }
  else
  {
    console.log(results.address);
    weather.getWeather(results.lattitude,
                       results.longitude,
                        (errorMessage, weatherResults) =>
      {
        if(errorMessage)
        {
          console.log(errorMessage);
        }
        else
        {
          console.log(`It's currently ${weatherResults.temperature}. It fells like ${weatherResults.apparentTemperature}.`);
        }
      });
  }
});

//lat, lng, callback
