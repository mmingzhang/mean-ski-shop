var Product = require('./models/skiproduct');
var Usercontact = require('./models/usercontact');
var path = require('path');

function getSkiproduct(res) {
    Product.find(function (err, skiproducts) {
        // if there is an error retrieving, send the error.
        if (err) {
            res.send(err);
        }
        res.json(skiproducts); // return all skiproducts in JSON format
    });
};

function getUsercontact(res) {
    Usercontact.find(function (err, usercontacts) {
        // if there is an error retrieving, send the error.
        if (err) {
            res.send(err);
        }
        res.json(usercontacts); // return all usercontacts in JSON format
    });
};

module.exports = function (app) {

    // skiproduct -------------------------------------------------------------
    // get all skiproducts
    app.get('/skiproducts', function (req, res) {
        // use mongoose to get all skiproducts in the database
        getSkiproduct(res);
    });

    // create skiproducts and send back all skiproducts after creation
    app.post('/skiproducts', function (req, res) {

        // create a skiproduct
        Product.create({
            ItemCode: req.body.ItemCode,
            DisplayName: req.body.DisplayName,
            Brand: req.body.Brand,
            ListPrice: req.body.ListPrice,
            MainImage: req.body.MainImage,
            DisplaySizes: req.body.DisplaySizes,
            Sizes: req.body.Sizes,
            EnableAltImage: req.body.EnableAltImage,
            AltImage: req.body.AltImage,
            EnableAltImage2: req.body.EnableAltImage2,
            AltImage2: req.body.AltImage2,
            DisplayImg: req.body.DisplayImg
         }, function (err, skiproduct) {
            if (err)
                res.send(err);

            // get and return all the skiproducts after you create another
            getSkiproduct(res);
        });

    });

    // delete a skiproducts
    app.delete('/skiproducts/:ItemCode', function (req, res) {
        Product.remove({
            ItemCode: req.params.ItemCode
        }, function (err, skiproduct) {
            if (err)
                res.send(err);

            getSkiproduct(res);
        });
    });

    // usercontact -------------------------------------------------------------
    // get all usercontacts
    app.get('/usercontacts', function (req, res) {
        // use mongoose to get all usercontacts in the database
        getUsercontact(res);
    });

    // create usercontact and send back all usercontacts after creation
    app.post('/usercontacts', function (req, res) {

        // create a usercontact, information comes from Angular
        Usercontact.create({
            name: req.body.name,
            email: req.body.email,
            telphone: req.body.telphone,
            message: req.body.message
        }, function (err, usercontact) {
            if (err)
                res.send(err);

            // get and return all the usercontacts after you create another
            getUsercontact(res);
        });

    });

    // delete a usercontact
    app.delete('/usercontacts/:id', function (req, res) {
        Usercontact.remove({
            _id: req.params.id
        }, function (err, usercontact) {
            if (err)
                res.send(err);

            getUsercontact(res);
        });
    });

    // application
    app.get('*', function (req, res) {
        //res.sendFile(__dirname + './../public/index.html');
        res.sendFile(path.resolve(__dirname + './../public/index.html'));
    });
};

