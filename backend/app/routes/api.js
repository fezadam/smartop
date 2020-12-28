var Interventions = require ('../models/interventions');

module.exports = function (router) {

    router.get('/interventions', (request, response) => {
        response.header('Access-Control-Allow-Origin', '*');
        Interventions.find((err, docs) => {
            if (!err) {
                response.send(docs);
            } else {
                console.log('Erreur lors de la récupération des interventions : ' + JSON.stringify(err, undefined, 2));
            }
        });
    });

    router.get('/surgeons', (request, response) => {
        response.header('Access-Control-Allow-Origin', '*');
        Interventions.aggregate([
            {
                $group: {
                    _id: {
                        surgeon: "$surgeon"
                    },
                    name: {"$first": "$surgeon"},
                    speciality: {"$first": "$specialty"},
                    interventionsNb:{$sum:1},
                    favoriteAnesthesist: {"$max": "$anesthsiste"},
                    favoriteNurse: {"$max": "$nurse1"},
                    mostFrequentedRoom: {"$max": "$roomNumber"},
                    mostFrequentAct: {"$max": "$intervention"}
                }
            },
            {
                $project: {
                    _id: 0,
                    name: 1,
                    speciality: 1,
                    interventionsNb: 1,
                    favoriteAnesthesist: 1,
                    favoriteNurse: 1,
                    mostFrequentedRoom: 1,
                    mostFrequentAct: 1
                }
            }
        ], (err, docs) => {
            if (!err) {
                response.send(docs);
            } else {
                console.log('Erreur lors de la récupération des interventions : ' + JSON.stringify(err, undefined, 2));
            }
        })
    });

    return router;
}