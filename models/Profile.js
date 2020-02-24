const mongoose = require('mongoose')

const Profile = new mongoose.Schema({

    id:  String,
    product_categories_mapped: Number,
    product_id:   String,
    url: String,
    gender: String,
    brand: String,
    product_description: String,
   image_urls: String,
product_imgs_src: String,
source: String,
product_categories: String,
images: [{
url: String,
path: String,
checksum: String
}],
price: Number,
product_title: String
  });



module.exports = mongoose.model('Profile', Profile)