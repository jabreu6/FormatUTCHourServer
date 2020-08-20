const express = require("express");
const hoursCtrl = require("../controllers/hours");
const hours = express.Router();


hours.post("/getFormatHour", hoursCtrl.getFormatHour);
hours.post("/getFormatHourV2", hoursCtrl.getFormatHourV2);

module.exports = hours;