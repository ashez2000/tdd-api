const fastify = require('fastify')

function build(opts = {}) {
  const app = fastify(opts)
  app.get('/', async () => ({
    hello: 'world',
  }))

  return app
}

module.exports = build
