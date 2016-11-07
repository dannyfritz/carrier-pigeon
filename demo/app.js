const Carrier = require(`..`)
const app = new Carrier()
const PORT = 8080

app.listen(PORT)
  .then(() =>
  {
    console.info(`Server started on PORT ${PORT}`)
  })
  .catch((err) =>
  {
    console.error(`Server didn't start. ${err}`)
  })
