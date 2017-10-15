import express from 'express';
import path from 'path';

const port = process.env.PORT || 9000;

const app = express();

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
})