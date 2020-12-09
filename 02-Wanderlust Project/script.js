// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = $("#venues");
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const weatherUrl='http://api.weatherstack.com/current?access_key='
const url='https://api.foursquare.com/v2/venues/VENUE_ID/links'
// Foursquare API Info
const clientId = '1FYL3UDSA4FEATQF0GZJJON1TCPWVYCK1QISOZPOYZG1IBG5';
const clientSecret = '4HULZXBJV0H1P3RKYBRH5IPFQRP44FKGDWUILLYTML4QXA4A';
const submit=document.getElementById("buttom")

// // WEATHER API Info
const apiKey = '3643f1688b16adb141006edd62cccc5d';

// Add AJAX functions here:

async function getVenues(){
  const city='paris'
  console.log(city)
  const urlToFetch = `${url}${city}&limit=8&client_id=${clientId}&client_secret=${clientSecret}&v=20201203`;
  console.log(urlToFetch)
  try {
    const response = await fetch(urlToFetch);
    if(response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse)    
    }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error)
  }
}
getVenues()


//submit.click('click', getVenues);

// Execute function

