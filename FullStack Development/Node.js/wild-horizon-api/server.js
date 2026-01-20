import http from 'http';
import { getDataFrame } from './database/db.js';
import { sendJsonResponse } from './utils/sendJsonResponse.js';
import { getDataByPathParams } from './utils/getDataByPathParams.js';

const PORT = 8000;

const server = http.createServer(async(req, res) => {

  const destinations = await getDataFrame();

  if (req.url === '/api' && req.method === 'GET') {

    sendJsonResponse(res, 200, destinations);

  } else if (req.url.startsWith('/api/continent') && req.method == 'GET') {

    const continent = req.url.split('/').pop();
    const filteredData = getDataByPathParams(destinations, 'continent', continent);
    sendJsonResponse(res, 200, filteredData);

  } else if (req.url.startsWith('/api/country') && req.method == 'GET') {

    const country = req.url.split('/').pop();
    const filteredData = getDataByPathParams(destinations, 'country', country);
    sendJsonResponse(res, 200, filteredData);

  } else {

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;
    sendJsonResponse(res, 404, ({
      error: "not found",
      message: "The requested route does not exist"
    }));

  }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`));