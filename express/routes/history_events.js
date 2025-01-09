var express = require('express');
var router = express.Router();
const { models } = require('../../sequelize');

router.get('/byLocalArea/:local_area', (req,res, next) => {
  try {
    eventHistoryByLocalArea(req,res,next);
  } catch (err) {
    next(err);
  }
});

router.get('/byLocalArea/:local_area/:equi_num', (req,res, next) => {
  try {
    eventHistoryByLocalArea_EquiNum(req,res,next);
  } catch (err) {
    next(err);
  }
});

router.get('/byLocalArea/:local_area/:fromDate/:toDate', (req,res, next) => {
  try {
    eventHistoryByLocalArea_BetweenDates(req,res,next);
  } catch (err) {
    next(err);
  }
});

router.get('/byLoraID/:lora_id', (req,res, next) => {
  try {
    byLoraID(req,res,next);
  } catch (err) {
    next(err);
  }
});

/**
 * ---
 * ByLocalArea
 * ByLocalArea_EquiNum
 * ByLocalArea_BetweenDates
 * ByLoraID
 * */

const eventHistoryByLocalArea = async (req,res, next) => {
  const local_area_id = req.params.local_area;

  let events = [];

  try {
    events = await models.Event_History.findAll(
    {
      where: {
        local_num  : local_area_id,
        is_deleted : false 
      },
      order: [['event_time', 'ASC']]
    });
  }

}

const eventHistoryByLocalArea_EquiNum = async (req,res, next) => {
  const local_area_id    = req.params.local_area;
  const controller_la_id = req.params.controller_la_id;

  let events = [];

  try {
    events = await models.Event_History.findAll(
    {
      where: {
        local_num: local_area_id,
        equi_num: controller_la_id,
        is_deleted: false
      },
      order: [['event_time', 'ASC']]
    });
  }
}

const eventHistoryByLocalArea_BetweenDates = async (req,res, next) => {
  const toDate        = req.params.toDate;
  const fromDate      = req.params.fromDate;
  const equi_num      = '';
  const local_area_id = req.params.local_area;

  if(req.params.equi_num){
    equi_num = req.params.equi_num;
  }

  let events = [];

  try {
    events = await models.Event_History.findAll(
    {
      where: {
        local_num: local_area_id,
        event_time: {
          $between: [fromDate, toDate]
        }
        is_deleted: false
      },
      order: [['equi_num', 'ASC']]
    });
  }
}

const byLoraID = async (req,res, next) => {
  const loraID = req.params.lora_id;

  let events = [];

  try {
    events = await models.Event_History.findAll(
    {
      where: {
        lora_id: loraID,
        is_deleted: false
      },
      order: [['event_time', 'ASC']]
    });
  }
}

module.exports = router;