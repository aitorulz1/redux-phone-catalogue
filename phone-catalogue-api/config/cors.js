const cors = require('cors');

const corsMiddleware = cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000', // origin es la api que en .env declaro 4000 || esta segunda dice que la api el front sea en el puerto 3000. Ahora no hay conflicto
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Access-Control-Allow-Methods",
    "Access-Control-Request-Headers"
  ],
  credentials: true
})

module.exports = corsMiddleware