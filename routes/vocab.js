const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.json([{ name: 'Abc' }, { name: 'Def' }]);
});

router.get('/:category', (req, res) => {
	res.json({ message: 'List of vocabulary words.' });
});

module.exports = router;
