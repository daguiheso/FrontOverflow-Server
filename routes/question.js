import express from 'express'

const app = express.Router()

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

// /api/questions/
app.get('/', (req, res) => res.status(200).json(questions))

// /api/questions/:id
app.get('/:id', (req, res) => res.status(200).json(question))

export default app