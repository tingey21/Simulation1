require('dotenv').config()
const express = require('express')
      bodyParser = require('body-parser'),
      cors = require('cors'),
      massive = require('massive'),
      products_controller = require('./products_controller');
  
      const app = express();
      app.use( bodyParser.json());
      app.use( cors());
      
      massive( process.env.CONNECTION_STRING).then(
          dbInstance => {
            app.set('db', dbInstance)
          }
        );

        app.get('/test', products_controller.getAllShelves);




        const port = process.env.PORT || 8080;
        app.listen( port, () => {console.log(`server listening on port ${port}`)});