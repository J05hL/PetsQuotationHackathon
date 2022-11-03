import express from "express";
const router = express.Router();

import {buildQuoteForArray} from '../calculations/mainCalcFunc.js'
import {validateArray} from '../validation/validateArray.js'

import * as dotenv from 'dotenv' 
dotenv.config()

// import {validatePostcode} from './validatePostcode.js'
// import {validateBreed} from './validateBreed.js'


router.get("/", function (req, res, next) {
  res.json({ message: "I wish we had some information to give you ☹️" });
});

export default router;

router.post("/", async function (req, res) {
  const pets = await req.body;

  console.log(`pets >>>` , pets)

  const validate = await validateArray(pets)

  console.log(`validate >>>` , validate)

  if (!validate) {
    res.status(400).json({success: false, message: `pet breed or address postcode was invalid, please check and try again` });
    return;
  }
  
  const quote = buildQuoteForArray(pets)
  try {
    res.status(201).json({success: true, payload: `£${quote.toFixed(2)}`});
  } catch (err) {
    res.status(400).json({success: false, message: err.message });
  }
});

