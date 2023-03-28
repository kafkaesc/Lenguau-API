const express = require('express');

const router = express.Router();

/* Returns a list of available categories */
router.get('/', (req, res) => {
	res.json({
		categoryList: [
			{ en: 'Around Town', es: 'En el Pueblo', kebab: 'Around-Town' },
			{ en: 'At the Office', es: 'En la Oficina', kebab: 'At-the-Office' },
			{ en: 'Colors', es: 'De Colores', kebab: 'Colors' },
			{ en: 'Literature', es: 'La Literatura', kebab: 'Literature' },
			{
				en: 'Top 50 Verbs',
				es: '50 Verbos Principales',
				kebab: 'Top-50-Verbs',
			},
		],
	});
});

/* Returns the list of vocabulary based on the category */
router.get('/:category', parseCategory, (req, res) => {
	switch (req.params.category) {
		case 'around town':
			res.json({
				title: { en: 'Around Town', es: 'En el Pueblo' },
				vocabList: [
					{ en: 'airport', es: 'el aeropuerto' },
					{ en: 'bakery', es: 'la panadería' },
					{ en: 'bank', es: 'el banco' },
					{ en: 'bar', es: 'el bar' },
					{ en: 'bookstore', es: 'la librería' },
					{ en: 'bus stop', es: 'la parada de autobús' },
					{ en: 'church', es: 'la iglesia' },
					{ en: 'coffee shop', es: 'el café' },
					{ en: 'concert', es: 'el concierto' },
					{ en: 'factory', es: 'la fábrica' },
					{ en: 'game (sports)', es: 'el partido' },
					{ en: 'gas station', es: 'la gasolinera' },
					{ en: 'grocery store', es: 'el supermercado' },
					{ en: 'hotel', es: 'el hotel' },
					{ en: 'library', es: 'la biblioteca' },
					{ en: 'mosque', es: 'la mezquita' },
					{ en: 'movie theater', es: 'el cine' },
					{ en: 'museum', es: 'el museo' },
					{ en: 'the park', es: 'el parque' },
					{ en: 'plaza/square', es: 'la plaza' },
					{ en: 'restaurant', es: 'el restaurante' },
					{ en: 'school', es: 'la escuela' },
					{ en: 'stadium', es: 'el estadio' },
					{ en: 'store', es: 'la tienda' },
					{ en: 'synagogue', es: 'la sinagoga' },
					{ en: 'taco stand/restaurant', es: 'la taquería' },
					{ en: 'theater', es: 'el teatro' },
					{ en: 'university', es: 'la universidad' },
				],
			});
			break;
		case 'at the office':
			res.json({
				title: { en: 'At the Office', es: 'En la Oficina' },
				vocabList: [
					{ en: 'boss', es: 'el jefe/la jefa' },
					{ en: 'calculator', es: 'la calculadora' },
					{ en: 'chair', es: 'la silla' },
					{ en: 'computer', es: 'la computadora' },
					{ en: 'coworker', es: 'el colega/la colega' },
					{ en: 'desk', es: 'el escritorio' },
					{ en: 'email', es: 'el correo electrónico' },
					{ en: 'job', es: 'el trabajo' },
					{ en: 'keyboard', es: 'el teclado' },
					{ en: 'mail', es: 'el correo' },
					{ en: 'office', es: 'la oficina' },
					{ en: 'paper', es: 'el papel' },
					{ en: 'pencil', es: 'un lápiz' },
					{ en: 'pen', es: 'el bolígrafo' },
					{ en: 'profession', es: 'la profesión' },
					{ en: 'staple', es: 'la grapa' },
					{ en: 'stapler', es: 'la grapadora' },
				],
			});
			break;
		case 'colors':
			res.json({
				title: { en: 'Colors', es: 'De Colores' },
				vocabList: [
					{ en: 'black', es: 'negro/a' },
					{ en: 'blue', es: 'azul' },
					{ en: 'gold', es: 'dorado/a' },
					{ en: 'gray', es: 'gris' },
					{ en: 'green', es: 'verde' },
					{ en: 'orange', es: 'anaranjado/a' },
					{ en: 'pink', es: 'rosado/a' },
					{ en: 'purple', es: 'morado/a' },
					{ en: 'yellow', es: 'amarillo/a' },
					{ en: 'red', es: 'rojo/a' },
					{ en: 'silver', es: 'plateaado/a' },
					{ en: 'white', es: 'blanco/a' },
				],
			});
			break;
		case 'literature':
			res.json({
				title: { en: 'Literature', es: 'La Literatura' },
				vocabList: [
					{ en: 'book', es: 'el libro' },
					{ en: 'chapter', es: 'el capítulo' },
					{ en: 'character', es: 'el personaje' },
					{ en: 'comedy', es: 'la comedia' },
					{ en: 'drama', es: 'el drama' },
					{ en: 'fantasy', es: 'la literatura fantastica' },
					{ en: 'genre', es: 'el género' },
					{ en: 'horror', es: 'el terror' },
					{ en: 'literature', es: 'la literatura' },
					{ en: 'novel', es: 'la novela' },
					{ en: 'novella', es: 'la novela corta' },
					{ en: 'satire', es: 'la sátira' },
					{ en: 'science fiction', es: 'la ciencia ficción' },
					{ en: 'setting', es: 'el ambientación' },
					{ en: 'short story', es: 'el cuento' },
					{ en: 'theme', es: 'el tema' },
					{ en: 'tragedy', es: 'la tragedia' },
				],
			});
			break;
		default:
			res.status(400).send('That category does not exist');
			break;
	}
});

function parseCategory(req, res, next) {
	req.params.category = req.params.category
		.replace(/-/g, ' ')
		.replace(/_/g, ' ')
		.toLowerCase();
	next();
}

module.exports = router;
