import express from 'express';

import './database/connection';

const app = express();

app.use(express.json());

app.post('/score', (request, response) => {
  console.log(request.body);

  response.json(request.body);
});

app.listen(3333, () => {
  console.log('🚀 Server started! Port: 3333!');
});
