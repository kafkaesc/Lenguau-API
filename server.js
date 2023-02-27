const express = require('express');
const app = express();

var cors = require('cors');
app.use(
	cors({
		credentials: true,
		optionSuccessStatus: 200,
		origin: 'http://localhost:3000',
	})
);

const vocabRouter = require('./routes/vocab');
app.use('/vocab', vocabRouter);

app.get('/', (req, res) => {
	res.json({ message: 'Nothing to see here.' });
});

app.listen(3010);
