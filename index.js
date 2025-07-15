
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/janken', (req, res) => {
  const user = req.body.user;
  const hands = ['グー', 'チョキ', 'パー'];
  const bot = hands[Math.floor(Math.random() * 3)];
  let result = '';
  if (user === bot) result = 'あいこ';
  else if (
    (user === 'グー' && bot === 'チョキ') ||
    (user === 'チョキ' && bot === 'パー') ||
    (user === 'パー' && bot === 'グー')
  ) result = 'あなたの勝ち！';
  else result = 'あなたの負け...';

  res.send(\`<h2>あなた：\${user} / Bot：\${bot}</h2><h3>\${result}</h3><a href="/">戻る</a>\`);
});

app.listen(PORT, () => {
  console.log(\`Server is running on port \${PORT}\`);
});
