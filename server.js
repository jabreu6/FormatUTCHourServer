var express = require('express');
var nodemailer = require('nodemailer');
const config = require('./config/config');
var app = express();
const helmet = require('helmet');
var path          = require('path'),
	cookieParser  = require('cookie-parser'),
	cors		  = require('cors');
    PORT          = process.env.PORT || config.port;

app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname)));
app.use(helmet())
const bodyParser = require('body-parser')
app.use(bodyParser.json())
// inico de la aplicacion, con escucha al puerto a usar
app.listen(config.port, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on port ", config.port);
    }
});
// petición de archivos de rutas para generacion de usos
const hours = require('./server/routes/hours');
//definición de uso de las rutas solicitadas a petición
app.use('/api/hours', hours);



























// app.get('/send', function (req, res) {

//     var mailOptions = {
//         to: req.query.to,
//         subject: 'Contact Form Message',
//         from: "Contact Form Request" + "<" + req.query.from + '>',
//         html:  "From: " + req.query.name + "<br>" +
//                "User's email: " + req.query.user + "<br>" +     "Message: " + req.query.text
//     }

//     console.log(mailOptions);
//     smtpTransport.sendMail(mailOptions, function (err, response) {
//         if (err) {
//             console.log(err);
//             res.end("error");
//         } else {
//             console.log("Message sent: " + response.message);
//             res.end("sent");
//         }
//     });

// });







