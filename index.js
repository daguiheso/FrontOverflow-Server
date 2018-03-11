import http from 'http'
import Debug from 'debug'

const PORT = 3000
const debug = new Debug('front-overflow:root')

const app = http.createServer((req, res) => {
	debug('New request')
	res.writeHead(200, { 'COntent-Type': 'text/plain'})
	res.write('Hola desde FrontOverflow')
	res.end()
})

app.listen(PORT, () => {
	debug('Server running at port' + PORT)
})