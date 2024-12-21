const express = require('express');
const mongoose = require('mongoose')

const ejs = require('ejs'); // ejs modülü için ulaşma
const path = require('path'); //dosyaya ulaşmak için 3üncül dosyayı require yapıyoruz
const Photo = require('./models/Photo.js');


const app = express();

//expressden sonra bağlantı kurdurduk.
mongoose.connect('mongodb://localhost/cleanblog-test-db');


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
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(myLogger);
app.use(myLogger2);

app.get('/', async(req, res) => {
  const photos = await Photo.find({})
  res.render('index',{
    photos:photos //sadece photos da yazabilirsin
  })
});

app.get('/about', (req, res) => {
  res.render('about')
});

app.get('/add', (req, res) => {
  res.render('add')
});

app.post('/photos', async(req, res) => {
 await Photo.create(req.body);
 res.redirect('/')
});

const port = 5000;
app.listen(port, () => {
  console.log(`sunucu ${port} portunda başlatıldı...`);
});
