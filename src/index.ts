require('dotenv').config();
import express from 'express';

const PORT = process.env.PORT || 9999;
const app  = express();

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
});