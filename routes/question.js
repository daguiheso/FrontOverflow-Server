import express from 'express'

const app = express.Router()

function questionMiddleware(req, res, next) {
	const { id } = req.params
	// Obteniendo el _id solamente de cada question : es lo mismo que esto : const q = questions.find(question => question._id === +id)
	req.question = questions.find(({ _id }) => _id === +id)
	next()
}

const question = {
	_id: 1,
	title: 'Como reutilizo un componente en Angular',
	description: 'Miren esta es mi pregunta...',
	createdAt: new Date(),
	icon: 'devicon-android-plain',
	answers: [],
	user: {
		firstName: 'Daniel',
		lastName: 'Hernandez',
		email: 'daguiheso@gmail.com',
		password: '123456'
	}
}

const questions = new Array(10).fill(question)

// GET /api/questions/
app.get('/', (req, res) => res.status(200).json(questions))

// GET /api/questions/:id
app.get('/:id', questionMiddleware, (req, res) => {
	res.status(200).json(req.question)
})

// POST /api/questions/
app.post('/', (req, res) => {
	const question = req.body
	question._id = +new Date()
	question.user = {
		email: 'daguiheso@gmail.com',
		password: '123456',
		firstName: 'Daniel',
		lastName: 'Hernández'
	}
	question.createdAt = new Date()
	question.answers = []
	questions.push(question)
	res.status(201).json(question)

})

export default app