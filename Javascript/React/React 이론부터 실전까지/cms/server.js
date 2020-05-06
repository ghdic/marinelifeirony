const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
          'id': 1,
          'image': 'http://placeimg.com/64/64/any',
          'name': 'marine',
          'birthday':'19960728',
          'gender':'man',
          'job':'student'
        },
        {
          'id': 2,
          'image': 'http://placeimg.com/64/64/any',
          'name': 'justin bibu',
          'birthday':'20170728',
          'gender':'man',
          'job':'baby'
        },
        {
          'id': 3,
          'image': 'http://placeimg.com/64/64/any',
          'name': 'jane',
          'birthday':'19961111',
          'gender':'female',
          'job':'professor'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));