const axios = require('axios');

let response = null;
new Promise(async (resolve, reject) => {
  try {
    response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map', {
      headers: {
        'X-CMC_PRO_API_KEY': 'e53e22cd-c5f2-4f9f-8958-9914b5bb4ecd',
      },
    });
  } catch(ex) {
    response = null;

    console.log(ex);
    reject(ex);
  }
  if (response) {
    
    const json = response.data;
    console.log(json);
    resolve(json);
  }
});