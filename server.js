const express = require('express');
const { execFile } = require('child_process');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post('/api/calculate', (req, res) => {
  const { operation, num1, num2 } = req.body;

  const args = operation === 'sqrt' ? [operation, num1] : [operation, num1, num2];

  execFile('./calculator.sh', args, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ error: stderr || error.message });
    }
    res.json({ result: stdout.trim() });
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});