const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/phones';

mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log(`Perfectamente conectado a ${MONGODB_URI}`))
  .catch(error => console.error(`Un error ha ocurrido intentando conectar con ${MONGODB_URI}`, error));


  