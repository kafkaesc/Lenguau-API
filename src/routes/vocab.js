const express = require('express');

const router = express.Router();

/* Returns a list of available categories */
router.get('/', (req, res) => {
	res.json({
		categoryList: [
			{ en: 'Around Town', es: 'En el Pueblo', kebab: 'Around-Town' },
			{ en: 'At the Office', es: 'En la Oficina', kebab: 'At-the-Office' },
			{ en: 'Colors', es: 'De Colores', kebab: 'Colors' },
			{ en: 'In the Kitchen', es: 'En la Cocina', kebab: 'In-the-Kitchen' },
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
					{ en: 'bridge', es: 'el puente' },
					{ en: 'bus stop', es: 'la parada de autobús' },
					{ en: 'church', es: 'la iglesia' },
					{ en: 'city block', es: 'la cuadra' },
					{ en: 'coffee shop', es: 'el café' },
					{ en: 'concert', es: 'el concierto' },
					{ en: "doctor's office", es: 'el consultario' },
					{ en: 'factory', es: 'la fábrica' },
					{ en: 'game (sports)', es: 'el partido' },
					{ en: 'gas station', es: 'la gasolinera' },
					{ en: 'grocery store', es: 'el supermercado' },
					{ en: 'the gym', es: 'el gimnasio' },
					{ en: 'hotel', es: 'el hotel' },
					{ en: 'library', es: 'la biblioteca' },
					{ en: 'mosque', es: 'la mezquita' },
					{ en: 'movie theater', es: 'el cine' },
					{ en: 'museum', es: 'el museo' },
					{ en: 'the park', es: 'el parque' },
					{ en: 'parking lot', es: 'el estacionamiento' },
					{ en: 'plaza/square', es: 'la plaza' },
					{ en: 'post office', es: 'la oficina de correo' },
					{ en: 'restaurant', es: 'el restaurante' },
					{ en: 'school', es: 'la escuela' },
					{ en: 'stadium', es: 'el estadio' },
					{ en: 'store', es: 'la tienda' },
					{ en: 'street', es: 'la calle' },
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
		case 'in the kitchen':
			res.json({
				title: { en: 'In the Kitchen', es: 'En la Cocina' },
				vocabList: [
					{ en: 'can opener', es: 'el abrelatas' },
					{ en: 'chair', es: 'la silla' },
					{ en: 'colander', es: 'el colador' },
					{ en: 'counter', es: 'la cubierta' },
					{ en: 'cup', es: 'la taza' },
					{ en: 'bowl', es: 'el bol/el tazón' },
					{ en: 'dishwasher', es: 'el lavaplatos' },
					{ en: 'a drink', es: 'la bebida' },
					{ en: 'fork', es: 'el tenedor' },
					{ en: 'freezer', es: 'el freezer' },
					{ en: 'glass', es: 'el vaso' },
					{ en: 'grater', es: 'el rallador' },
					{ en: 'grill', es: 'la parrilla' },
					{ en: 'kitchen, stove', es: 'la cocina' },
					{ en: 'knife', es: 'el cuchillo' },
					{ en: 'lid', es: 'la tapa' },
					{ en: 'microwave', es: 'el microondas' },
					{ en: 'oven', es: 'el horno' },
					{ en: 'pan', es: 'el sartén' },
					{ en: 'plate, dish', es: 'el plato' },
					{ en: 'pot', es: 'la olla' },
					{ en: 'peeler', es: 'el pelador' },
					{ en: 'refrigerator', es: 'el refrigerador' },
					{ en: 'rolling pin', es: 'el rodillo' },
					{ en: 'spatula', es: 'el espátula' },
					{ en: 'spoon', es: 'la cuchara' },
					{ en: 'stool', es: 'el taburete' },
					{ en: 'table', es: 'la mesa' },
					{ en: 'tongs', es: 'las pinzas' },
					{ en: 'whisk', es: 'el batidor' },
				],
			});
			break;
		case 'literature':
			res.json({
				title: { en: 'Literature', es: 'La Literatura' },
				vocabList: [
					{ en: 'action', es: 'la acción' },
					{ en: 'adventure', es: 'la aventura' },
					{ en: 'author', es: 'el/la autor/a' },
					{ en: 'book', es: 'el libro' },
					{ en: 'chapter', es: 'el capítulo' },
					{ en: 'character', es: 'el personaje' },
					{ en: 'comedy', es: 'la comedia' },
					{ en: 'comic', es: 'el cómic' },
					{ en: 'drama', es: 'el drama' },
					{ en: 'fantasy', es: 'la literatura fantastica' },
					{ en: 'fiction', es: 'la ficción' },
					{ en: 'genre', es: 'el género' },
					{ en: 'horror', es: 'el terror' },
					{ en: 'literature', es: 'la literatura' },
					{ en: 'non-fiction', es: 'la no ficción' },
					{ en: 'novel', es: 'la novela' },
					{ en: 'novella', es: 'la novela corta' },
					{ en: 'plot', es: 'la trama' },
					{ en: 'poem', es: 'el poema' },
					{ en: 'poet', es: 'el/la poeta' },
					{ en: 'poetry', es: 'la poesía' },
					{ en: 'prose', es: 'la prosa' },
					{ en: 'reader', es: 'el/la lector/a' },
					{ en: 'satire', es: 'la sátira' },
					{ en: 'science fiction', es: 'la ciencia ficción' },
					{ en: 'setting', es: 'el ambientación' },
					{ en: 'short story', es: 'el cuento' },
					{ en: 'theme', es: 'el tema' },
					{ en: 'title', es: 'el título' },
					{ en: 'tragedy', es: 'la tragedia' },
				],
			});
			break;
		case 'top 50 verbs':
			res.json({
				title: { en: 'Top 50 Verbs', es: '50 Verbos Principales' },
				vocabList: [
					{ en: 'to accept', es: 'aceptar' },
					{ en: 'to arrive', es: 'llegar' },
					{ en: 'to be (innate)', es: 'ser' },
					{ en: 'to be (state)', es: 'estar' },
					{ en: 'to begin', es: 'comenzar' },
					{ en: 'to believe', es: 'creer' },
					{ en: 'to call', es: 'llamar' },
					{ en: 'to carry', es: 'llevar' },
					{ en: 'to change', es: 'cambiar' },
					{ en: 'to count', es: 'contar' },
					{ en: 'to create', es: 'crear' },
					{ en: 'to do', es: 'hacer' },
					{ en: 'to exist', es: 'existir' },
					{ en: 'to explain', es: 'explicar' },
					{ en: 'to feel', es: 'sentir' },
					{ en: 'to find', es: 'encontrar' },
					{ en: 'to give', es: 'dar' },
					{ en: 'to go', es: 'ir' },
					{ en: 'to go out', es: 'salir' },
					{ en: 'to have', es: 'tener' },
					{ en: 'to help', es: 'ayudar' },
					{ en: 'to play (sport, game)', es: 'jugar' },
					{ en: 'to know (personally)', es: 'conocer' },
					{ en: 'to know (data)', es: 'saber' },
					{ en: 'to listen', es: 'escuchar' },
					{ en: 'to live', es: 'vivir' },
					{ en: 'to look for', es: 'buscar' },
					{ en: 'to lose', es: 'perder' },
					{ en: 'to need', es: 'necesitar' },
					{ en: 'to open', es: 'abrir' },
					{ en: 'to owe', es: 'deber' },
					{ en: 'to pay', es: 'pagar' },
					{ en: 'to read', es: 'leer' },
					{ en: 'to remember', es: 'recordar' },
					{ en: 'to return', es: 'volver' },
					{ en: 'to run', es: 'correr' },
					{ en: 'to say', es: 'decir' },
					{ en: 'to see', es: 'ver' },
					{ en: 'to speak, to talk', es: 'hablar' },
					{ en: 'to start', es: 'empezar' },
					{ en: 'to study', es: 'estudiar' },
					{ en: 'to touch, to play (instrument)', es: 'tocar' },
					{ en: 'to understand', es: 'comprender, entender' },
					{ en: 'to walk', es: 'caminar' },
					{ en: 'to want', es: 'querer' },
					{ en: 'to wait', es: 'esperar' },
					{ en: 'to watch', es: 'mirar' },
					{ en: 'to win', es: 'ganar' },
					{ en: 'to work', es: 'trabajar' },
					{ en: 'to write', es: 'escribir' },
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
