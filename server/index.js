const express = require('express')
      bodyParser = require('body-parser'),
      cors = require('cors'),
      massiveve = require('massive'),
      products_controller = require('./package_controller');
      require('dotenv').config();

      const app = express();
      app.use( bodyParser.json());
      app.use( cors());
      massive( process.env.CONNECTION_STRING).then(
          dbInstance => app.set('db', dbInstance));





        const port = process.env.PORT || 8080;
        app.listen( port, () => {console.log(`server listening on port ${port}`)});