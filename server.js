const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Dados em memória (substituir por banco de dados em produção)
let contatos = [];
let agendamentos = [];

// Rotas API
app.post('/api/contact', (req, res) => {
  const { nome, email, telefone, tipoAtendimento, mensagem } = req.body;
  
  // Validação básica
  if (!nome || !email || !telefone) {
    return res.status(400).json({ 
      success: false, 
      message: 'Campos obrigatórios não preenchidos' 
    });
  }
  
  const contato = {
    id: Date.now(),
    nome,
    email,
    telefone,
    tipoAtendimento,
    mensagem,
    data: new Date().toISOString()
  };
  
  contatos.push(contato);
  console.log('Novo contato:', contato);
  
  res.json({ 
    success: true, 
    message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' 
  });
});

app.post('/api/schedule', (req, res) => {
  const { nome, email, telefone, data, horario, tipoSessao } = req.body;
  
  // Validação básica
  if (!nome || !email || !telefone || !data || !horario) {
    return res.status(400).json({ 
      success: false, 
      message: 'Todos os campos são obrigatórios' 
    });
  }
  
  // Verificar conflito de horário
  const conflito = agendamentos.find(a => a.data === data && a.horario === horario);
  if (conflito) {
    return res.status(400).json({ 
      success: false, 
      message: 'Este horário já está agendado. Por favor, escolha outro.' 
    });
  }
  
  const agendamento = {
    id: Date.now(),
    nome,
    email,
    telefone,
    data,
    horario,
    tipoSessao,
    status: 'pendente',
    dataCriacao: new Date().toISOString()
  };
  
  agendamentos.push(agendamento);
  console.log('Novo agendamento:', agendamento);
  
  res.json({ 
    success: true, 
    message: 'Agendamento realizado com sucesso! Enviaremos confirmação via WhatsApp.',
    whatsappLink: `https://wa.me/5511999999999?text=Olá! Gostaria de confirmar meu agendamento para ${data} às ${horario}.`
  });
});

app.get('/api/available-times', (req, res) => {
  const { date } = req.query;
  
  // Horários disponíveis (simulação)
  const allTimes = [
    '08:00', '09:00', '10:00', '11:00',
    '14:00', '15:00', '16:00', '17:00', '18:00'
  ];
  
  // Remover horários já agendados para a data
  const bookedTimes = agendamentos
    .filter(a => a.data === date)
    .map(a => a.horario);
  
  const availableTimes = allTimes.filter(time => !bookedTimes.includes(time));
  
  res.json({ availableTimes });
});

// Rota principal - servir o HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
