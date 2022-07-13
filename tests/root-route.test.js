const build = require('../src/app')

let app

describe('Root route', () => {
  beforeEach(() => {
    app = build()
  })

  afterEach(() => {
    app.close()
  })

  it('should return a 200 status code', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/',
    })

    expect(response.statusCode).toBe(200)
  })
})
