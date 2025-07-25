const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

// 정적 파일 제공 (dist 폴더)
app.use(express.static(path.join(__dirname, '../react/dist')));

// 루트 경로에 dist/index.html 제공
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../react/dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
