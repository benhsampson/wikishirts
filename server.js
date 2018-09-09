const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
const queryString = require('querystring');
const wtf = require('wtf_wikipedia');
const fetch = require('node-fetch');

const app = express();
const port = process.env.POST || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/test-tags', (req, res) => {
  wtf.fetch('Meme').then((doc) => {
    res.send({ express: doc.categories().splice(0,8) });
  });
});

app.get('/api', async (req, res) => {
  const search = req.query.search;

  const response = await fetch(`https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=${search}&limit=3`);
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  }

  const descriptionPromises = [];

  body[1].forEach((title, index) => {
    descriptionPromises.push(new Promise(async (resolve, reject) => {
      try {
        resolve(await wtf.fetch(title).then((doc) => doc.sentences(0).text()));
      } catch (exception) {
        reject(exception);
      }
    }));
  });

  Promise.all(descriptionPromises).then((descriptions) => {
    const shirts = body[1].map((title, index) => ({
      name: title,
      description: descriptions[index],
    }));

    res.send(shirts);
  });
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle react routing, return all requests to the React client-side app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listing on port: ${port}`));
