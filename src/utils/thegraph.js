const axios = require("axios");

/**
 * 
 * @param {string} apiUrl - url of thegraph api
 * @param {string} queryString
 * @returns the result of thegraph api | false on failure
 */
const query = async (apiUrl, queryString) => {
  try {
    let response = await axios.post(apiUrl, {
      query: queryString 
    });
    const data = response.data;
    if(
      response.status === 200 &&
      data.hasOwnProperty('data')
      )
    {
      return data.data;
    }
  } catch (error) {
  }
  return false;
}

module.exports = {
  query: query,
}