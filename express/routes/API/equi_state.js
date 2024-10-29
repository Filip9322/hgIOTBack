const { models } = require('../../../sequelize');
const { getIdParam } = require('../../helpers');

async function getAll(req,  res) {
  res.status(200).json('Not allowed');
}

async function getById(req, res) {
  const _id = getIdParam(req);
  const equi_state = await models.Equi_States.findOne(
    { where: { id: _id, is_deleted: false }, include: [{model: models.Equipments}]});

  if ( equi_state ) {
    res.status(200).json(equi_state);
  } else {
    res.status(404).json('404 - Not found');
  }
}

async function create (req, res) {
  console.log(Object.keys(req));
  if(req.body.id) {
    res.status(400).json('Bad request: ID should not be provided, since it is determined automatically by the db.');
  } else {
    // Validate local_num and local_area_controller_number
    
    //await models.Equi_States.create(req.body);
    res.status(201).end();
  }
}

async function update (req, res) {
  const _id = getIdParam(req);
  // We only accep a UPDATE request if the `:id` param matches the body `id` from the body
  if (req.body.id === _id) {
    await models.Equi_States.update(req.body, {
      where: {
        id: _id,
        is_deleted: false
      }
    });
    res.status(200).end();
  } else {
    res.status(400).json(`Bad request: param ID (${id}) does not match body ID(${req.body.id})`);
  }
}

async function remove (req, res) {
  const _id = getIdParam(req);
  // We only accep a UPDATE request if the `:id` param matches the body `id` from the body
  if (req.body.id === _id) {
    let body = {'is_deleted': true };
    await models.Equi_States.update(body, {where: { id: _id }});
    res.status(200).end();
  } else {
    res.status(400).json(`Bad request: param ID (${id}) does not match body ID(${req.body.id})`);
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}
    
    // RabbitMQ
    //const amqp = require('amqplib');
    //2024-10-31
    //** -- Test BEGIN
    /*
    // AMQP Connection
    const connection = await amqp.connect('amqp://ims_dev:4419gksrlf!@49.254.109.69:5672/IOT_NEW', async (error0, connection) => {
      if(error0) throw error0;
    });
    
    //Create Channel
    const channel = await connection.createChannel( async (error1, channel) =>{
        if(error1) {throw error1;}

    });
    
    // Create Exchange
    const exchange   = 'CRUD';
    const routingKey = 'React_app';

    await channel.assertExchange(exchange, 'direct', {durable: false });

    // Declare Queue , not created yet
    const queue   = 'UpdateItem';
    channel.assertQueue(queue, { durable: true });
        

    // BindChannel to Queue
    await channel.bindQueue(queue.queue, exchange, routingKey);
    
    const options = {
      persistent: true,
      timestamp: Date.now(),
      contentEncoding: 'utf-8',
      contenType: 'text/plain'
    }
    const message = req.body;
    
    // #publish(exchange, routingKey, content, [options])
    await channel.publish(exchange, routingKey, Buffer.from(JSON.stringify(message)), options);
    
    console.log(' [x] Sent %s:', message);
    
    // Close Connetion
    setTimeout(()=> {
      connection.close();
      //process.exit(0);
    }, 500);
    */
    //** -- Test END