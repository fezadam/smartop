var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/smartop', {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
    if (err) {
        console.log("Erreur lors de la connexion à MongoDB : " + err);
    } else {
        console.log("Vous êtes connecté avec succès à MongoDB");
    }
});

module.exports = mongoose;