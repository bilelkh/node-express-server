import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import axios from 'axios';

const app = express();

app.use(cors());

app.get('/:langue', (req, res) => {
  axios
    .get(
      `https://world-countries.s3.ca-central-1.amazonaws.com/data/${req.params['langue']}/world.json`,
    )
    .then(({ data }) => {
      return res.send(data);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
