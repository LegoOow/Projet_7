const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models/database');

const TOKEN = process.env.TOKEN;

exports.signup = (req, res, next) => {
    // Test password strength //
    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.{6,})/.test(req.body.password)) {   
        return res.status(401).json({ error: 'Le mot de passe doit contenir une lettre majuscule, une minuscule et au moins 1 chiffre (6 caractères min)' });
      } else {
            bcrypt.hash(req.body.password, 10)
                .then(hash => {
                    //add to BDD//
                    db.query(`INSERT INTO users VALUES (NULL, '${req.body.nom}', '${req.body.prenom}', '${hash}', '${req.body.email}', 0)`,
                        (err, results, fields) => {
                            if (err) {
                                console.log(err);
                                return res.status(400).json("erreur");
                            }
                            return res.status(201).json({
                                message: 'Votre compte a bien été crée !'
                            });
                        }
                    );
                })
                .catch(error => res.status(500).json({ error }));
        }
};

exports.login = (req, res, next) => {
    //Search users in BDD//
    db.query(`SELECT * FROM users WHERE email='${req.body.email}'`,
        (err, results, rows) => {
            //if users find// 
            if (results.length > 0) {
                //Password verification//
                bcrypt.compare(req.body.password, results[0].password)
                    .then(valid => {
                        //if not valid//
                        if (!valid) {
                            res.status(401).json({ message: 'Mot de passe incorrect' });
                            //if valid, token create//
                        } else {
                            res.status(200).json({
                                userId: results[0].id,
                                nom: results[0].nom,
                                prenom: results[0].prenom,
                                admin: results[0].admin,
                                token: jwt.sign(
                                    { userId: results[0].id }, 
                                    TOKEN, 
                                    { expiresIn: '8h' }
                                )
                            });
                        }
                    });
            } else {
                res.status(404).json({ message: 'Utilisateur inconnu' });
            }
        }
    );
};