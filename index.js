const app = require('./app');

const port = 8000;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`listening on port ${port}`);
});
