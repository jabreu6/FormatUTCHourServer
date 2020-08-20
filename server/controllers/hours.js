
/**
 * Función para obtener la hora en formatu UTC, dado una hora y una zona horaria.
 * @param {string} req.body.dato1 - campo correspondiente a la hora. 
 * @param {string} req.body.dato1 - campo correspondiente a la zona horaria. 
 * @returns {string} time - campo correspondiente a la hora en el formato solicitado. 
 * @returns {string} timezone: - campo correspondiente a la zona horaria.

 */
exports.getFormatHour = async function(req, res) {
    try {
        let hour = req.body.dato1
            sim = (''+req.body.dato2).substring(0,1), // se toma el signo de la operación 
            num = (''+req.body.dato2).substring(1,3), // se toma la cantidad de horas de la zona horaria
            num2 = (''+req.body.dato2).substring(4), // se toma la cantidad de minutos de la zona horaria
            ddd = new Date(); // se crea una variable con la fecha del dia
        // se crean variables para la fecha por parte
        let year = ddd.getFullYear(), 
            month =ddd.getMonth()+1,
            day = ddd.getDate();
        let todayFullDate = (month)+'/'+day+'/'+year  // se crea una variable con una fecha en formato MM/DD/AAAA
        let str = todayFullDate+' '+hour+' GMT'+sim+num+num2 // se crea una variable con la hora recibida, la fecha y la zona horaria
        let date = new Date(str); // se crea una variable de fecha con la zona horaria definida
        // se crea una variable resultado haciendo uso de las funciones del tipo date de JS para el manejo UTC
        let result = ('0' + date.getUTCHours()).slice(-2) +':'+ ('0' + date.getUTCMinutes()).slice(-2) +':'+ ('0' + date.getUTCSeconds()).slice(-2) 
        res.status(200).json({
            statusCode: 200,
            response: {
                time: result,
                timezone: "utc"
            } 
        });
    } catch (err) {
        res.status(500).json({
            statusCode: 500,
            error: err
        });
    }
}; 


/**
 * Función Versión 2 para obtener la hora en formatu UTC, dado una hora y una zona horaria.
 * @param {string} req.body.dato1 - campo correspondiente a la hora. 
 * @param {string} req.body.dato1 - campo correspondiente a la zona horaria. 
 * @returns {string} time - campo correspondiente a la hora en el formato solicitado. 
 * @returns {string} timezone: - campo correspondiente a la zona horaria.

 */
exports.getFormatHourV2 = async function(req, res) {
    try {
        let hour = req.body.dato1,
            parts = hour.split(":"), // se hace la separación de la hora recibida en horas, minutos y segundos
            sim = (''+req.body.dato2).substring(0,1), // se toma el signo de la operación 
            num = (''+req.body.dato2).substring(1,3), // se toma la cantidad de horas de la zona horaria
            num2 = (''+req.body.dato2).substring(4), // se toma la cantidad de minutos de la zona horaria
            hh, hhf, mmf; // se crean las variables necesarias a usar

        // se verifica el signo de ;a operación y se suma o se restan las horas de acuerdo al caso
        sim === '-' ? hh = parseInt(parts[0])+parseInt(num) : hh = parseInt(parts[0])-parseInt(num) 
        // se verifica si el numero es mayor a 23 es que paso un dia, entonces se debe hacer el ajuste de la hora 
        hh > 23 ? hhf = hh-24 : hhf = hh
        // se hace el calculo de los minutos de acuerdo a la operación a realizar
        if (sim === '-') {
            mmf = parseInt(parts[1])+parseInt(num2)
            if (mmf > 59) {
                mmf -= 60
                hhf++
            }
        }
        else{
            mmf = parseInt(parts[1])-parseInt(num2)
            if (mmf < 0) {
                mmf = 60 + mmf
                hhf--
            }
        }
        // se concatena el resultado con el formato deseado
        let result = ('0' + hhf).slice(-2) +':'+ ('0' + mmf).slice(-2) +':'+ ('0' + parts[2]).slice(-2) 
        res.status(200).json({
            statusCode: 200,
            response: {
                time: result,
                timezone: "utc"
            } 
        });
    } catch (err) {
        res.status(500).json({
            statusCode: 500,
            error: err
        });
    }
}; 