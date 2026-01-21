import http from 'http';
import { getDataFrame } from './database/db.js';
import { sendJsonResponse } from './utils/sendJsonResponse.js';
import { getDataByPathParams } from './utils/getDataByPathParams.js';
import { getDataByQueryParams } from './utils/getDataByQueryParams.js'
import { error } from 'console';

const PORT = 8000;

const server = http.createServer(async(req, res) => {
  try {

    const startTime = performance.now();

    console.log(`Incoming Request: ${req.method} ${req.url}`);

    const destinations = await getDataFrame();

    const urlObj = new URL(req.url, `http://${req.headers.host}`);

    const queryObj = Object.fromEntries(urlObj.searchParams);
    

    if (urlObj.pathname === '/api' && req.method === 'GET') {
      let filteredData = getDataByQueryParams(destinations, queryObj);
      
      sendJsonResponse(res, 200, filteredData);

    } else if (req.url.startsWith('/api/continent') && req.method == 'GET') {

      const pathParts = req.url.split('/').filter(Boolean); 

      if (pathParts.length <= 2) { 
        return sendJsonResponse(res, 400, { error: 'Continent name is required' });
      }

      const continent = pathParts.pop();

      if (!continent || continent === '') {
        return sendJsonResponse(res, 400, { error: 'Continent name is required' });
      }

      const filteredData = getDataByPathParams(destinations, 'continent', continent);

      if (filteredData.length === 0) {
        return sendJsonResponse(res, 404, { error: "Not Found", message: `No results found for continent: ${continent}` });
      }
      sendJsonResponse(res, 200, filteredData);

    } else if (req.url.startsWith('/api/country') && req.method == 'GET') {

      const pathParts = req.url.split('/').filter(Boolean); 

      if (pathParts.length <= 2) { 
        return sendJsonResponse(res, 400, { error: 'Country name is required' });
      }

      const country = pathParts.pop();

      if (!country || country === '') {
        return sendJsonResponse(res, 400, { error: 'Country name is required' });
      }

      const filteredData = getDataByPathParams(destinations, 'country', country);

      if (filteredData.length === 0) {
        return sendJsonResponse(res, 404, { error: "Not Found", message: `No results found for country: ${country}` });
      }
      sendJsonResponse(res, 200, filteredData);

    } else {

      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 404;
      sendJsonResponse(res, 404, ({
        error: "not found",
        message: "The requested route does not exist"
      }));

    }

    const duration = performance.now() - startTime;
    console.log(`Response sent in ${duration.toFixed(2)}ms`);

  } catch (error) {
    console.log("Server Error:", error.message);
    sendJsonResponse(res, 500, { error: "Something went wrong on our end" });
  } 
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`));