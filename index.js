import express from 'express';
import cors from 'cors';

const bigNumber = require('big-number');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  let count = (n) => {
    if (n == 0) return 1;
      if (n == 1) return 6 * 3 * count(0);
      if (n == 2) return 6 * 2 * count(1) + 9 * 3 * count(0);
        return bigNumber(count(n - 1)).multiply(12).add(bigNumber(count(n - 2)).multiply(18));
      };

  let n = req.query.i;
  res.send(count(n).toString());
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
