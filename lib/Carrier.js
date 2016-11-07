const http = require(`http`)

class Carrier {
  _handleRoutes (request, response, context, next)
  {
    console.log(arguments)
  }
  listen (port)
  {
    const server = http.createServer((req, res) =>
    {
      this._handleRoutes(req, res, {}, () => {})
    })
    return new Promise((resolve, reject) =>
    {
      server.listen(port, `127.0.0.1`, resolve)
        .on(`error`, reject)
    })
  }
  use ()
  {
  }
}

module.exports = Carrier
