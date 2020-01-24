const app = require('./data/api/server');

const PORT = process.env.PORT || 7001;

app.listen(PORT, () => {
  console.log(`* Listening on ${PORT} *`);
})