const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

var cors = require('cors');
app.use(
	cors({
		credentials: true,
		optionSuccessStatus: 200,
		origin: process.env.CORS_ORIGIN,
	})
);

const vocabRouter = require('./routes/vocab');
app.use('/.netlify/functions/api/vocab', vocabRouter);

router.get('/', (req, res) => {
	res.json({ message: 'Nothing to see here.' });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
