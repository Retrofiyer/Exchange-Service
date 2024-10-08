const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const currencyRoutes = require('./routes/currencyRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger/swagger.json');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8103;

app.use(bodyParser.json());
app.use(cors());

app.use('/api', currencyRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`Currency service is running on port ${PORT}`);
});