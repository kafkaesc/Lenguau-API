const express = require('express');
const app = express();

const vocabRouter = require('./routes/vocab');
app.use('/vocab', vocabRouter);

app.get('/', (req, res) => {
	res.json({ message: 'Nothing to see here.' });
});

app.listen(3010);
