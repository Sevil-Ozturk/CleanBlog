const express = require('express');

const ejs = require('ejs'); // ejs modülü için ulaşma
const path = require('path'); //dosyaya ulaşmak için 3üncül dosyayı require yapıyoruz
const app = express();

app.set("view engine", "ejs");

const myLogger = (req, res, next) => {
  console.log('sıdafıor111');
  next();
};

const myLogger2 = (req, res, next) => {
  console.log('sıdafıor2222');
  next();
};

app.use(express.static('public'));
app.use(myLogger);
app.use(myLogger2);

app.get('/', (req, res) => {
  res.render('index')
});

app.get('/about', (req, res) => {
  res.render('about')
});

app.get('/add', (req, res) => {
  res.render('add')
});

const port = 5000;
app.listen(port, () => {
  console.log(`sunucu ${port} portunda başlatıldı...`);
});
