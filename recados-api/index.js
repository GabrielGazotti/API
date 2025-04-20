const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());

const filePath = path.join(__dirname, 'recados.json');

// String em array
function getRecados() {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

// Array para JSON
function saveRecados(recados) {
  fs.writeFileSync(filePath, JSON.stringify(recados, null, 2));
}

// Rota para criar recado
app.post('/recados', (req, res) => {
  const { titulo, descricao } = req.body;

  if (!titulo || !descricao) {
    return res.status(400).json({ mensagem: 'Título e descrição são obrigatórios.' });
  }

  const recados = getRecados();
  const novoRecado = {
    id: Date.now().toString(),
    titulo,
    descricao
  };

  recados.push(novoRecado);
  saveRecados(recados);

  res.status(201).json(novoRecado);
});

// Rota para listar recados
app.get('/recados', (req, res) => {
  const recados = getRecados();
  res.json(recados);
});

// Rota para deletar recado
app.delete('/recados/:id', (req, res) => {
  const { id } = req.params;
  let recados = getRecados();
  const recadoIndex = recados.findIndex(r => r.id === id);

  if (recadoIndex === -1) {
    return res.status(404).json({ mensagem: 'Recado não encontrado.' });
  }

  recados.splice(recadoIndex, 1);
  saveRecados(recados);

  res.json({ mensagem: 'Recado removido com sucesso.' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
