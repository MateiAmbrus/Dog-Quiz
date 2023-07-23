const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000; // Choose any available port number

app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
