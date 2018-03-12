import http from 'http'
import Debug from 'debug'
import app from './app'

const PORT = 3000
const debug = new Debug('front-overflow:root')

app.listen(PORT, () => {
	debug('Server running at port' + PORT)
})