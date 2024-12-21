// deneme amaçlı yapılmış sayfa

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// // MongoDB'ye bağlan
// mongoose.connect('mongodb://localhost/cleanblog-test-db', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Şema ve model tanımlaması
// const PhotoSchema = new Schema({
//   title: String,
//   description: String,
// });

// const Photo = mongoose.model('Photo', PhotoSchema);

// async function main() {
//   try {
//     // Yeni bir fotoğraf oluştur
//     const newPhoto = await Photo.create({
//       title: 'Photo Title 1',
//       description: 'Photo description 1 lorem ipsum',
//     });
//     console.log('Yeni fotoğraf eklendi:', newPhoto);

//     // Fotoğrafları listele
//     const photos = await Photo.find({});
//     console.log('Tüm fotoğraflar:', photos);

//     // Fotoğraf güncelleme
//     const updateId = '6079f04e5916c524d4bdcb74'; // Örnek ID, kendi veritabanınızdan bir ID kullanın
//     const updatedPhoto = await Photo.findByIdAndUpdate(
//       updateId,
//       {
//         title: 'Photo Title 111 updated',
//         description: 'Photo description 111 updated',
//       },
//       { new: true } // Güncellenmiş dökümanı döndür
//     );
//     console.log('Güncellenen fotoğraf:', updatedPhoto);

//     // Fotoğraf silme
//     const deleteId = '6079f1ce8c0f602c98964346'; // Örnek ID
//     await Photo.findByIdAndDelete(deleteId);
//     console.log('Fotoğraf silindi.');
//   } catch (error) {
//     console.error('Hata oluştu:', error);
//   } finally {
//     // MongoDB bağlantısını kapat
//     mongoose.connection.close();
//   }
// }

// // Fonksiyonu çalıştır
// main();
