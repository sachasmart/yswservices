const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');
const { kStringMaxLength } = require('buffer');

app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://sacha:cheeks21x@yswcluster.wn0uk.mongodb.net/services?retryWrites=true&w=majority');

const ysw_servicesSchema = {
   agency_name : String,
   address: String,
   phone: String,
   email: String,
   website: String,
   services: String, 
   hours: String,

}

const Service = mongoose.model('Service', ysw_servicesSchema);

app.get('/', (req, res) => {
    Service.find({}, function(err, services) {
        res.render('index', {
            servicesList: services
        })


    })

})

app.listen(4000, function() {
    console.log('server is running');
})