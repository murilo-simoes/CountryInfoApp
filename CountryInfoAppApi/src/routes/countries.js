const express = require("express");
const axios = require("axios");
const { BadRequest } = require("../lib/functions");

const router = express.Router();

//Get all countries route
router.get("/getAll", async (req, res) => {
  try {
    const countries = await axios.get(
      "https://date.nager.at/api/v3/AvailableCountries"
    );
    return res.status(200).send(countries.data);
  } catch (err) {
    return BadRequest(
      res,
      "Error getting all countries.",
      "REQUEST_ERROR",
      400
    );
  }
});

//Get a single country information route
router.get("/getOne/:countryCode", async (req, res) => {
  const countryCode = req.params.countryCode.trim();

  if (countryCode.length != 2)
    return BadRequest(
      res,
      "Invalid parameter: Country Code. Please provide a valid value.",
      "INVALID_DATA",
      400
    );

  try {
    const borders = await axios.get(
      `https://date.nager.at/api/v3/CountryInfo/${countryCode}`
    );

    const populations = await axios.post(
      "https://countriesnow.space/api/v0.1/countries/population",
      {
        country: borders.data.commonName,
      }
    );
    const flag = await axios.post(
      "https://countriesnow.space/api/v0.1/countries/flag/images",
      {
        iso2: countryCode,
      }
    );
    res.status(200).send({
      borders: borders.data,
      populations: populations.data,
      flag: flag.data.data.flag,
    });
  } catch (err) {
    return BadRequest(res, "Country not found.", "NOT_FOUND", 400);
  }
});

module.exports = router;
