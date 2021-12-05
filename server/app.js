
// const array_to_image = require('array-to-image')
const mqtt = require('mqtt')

const host = '94.247.183.5'
const clientId = 'mqtt_client'
// Chanel
const topic = 'test_chanel'
const connectUrl = `mqtt://${host}`

const express = require("express");
const app = express();
const PORT = 3001

// Lunch server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json())

app.post("/api", (req, res) => {
    // console.log(req.body.data_);
    console.log("'"+req.body.data_+"'")
    data_ = '"'+req.body.data_+'"'
    Publisher(data_);
    res.json({ message: "request received" });
    // Publisher(req.body.data_);
});

// Connection
const client = mqtt.connect(connectUrl, {
    clientId,
    clean: true,
    connectTimeout: 4000,
    username: '',
    password: '',
    reconnectPeriod: 1000,
  })


// data_ = "paparazzi ."
function Publisher(data) {
    console.log("Publishe", data)
    // Publish message
    client.on('connect', () => {
        client.subscribe([topic], () => {
            console.log(`Subscribe to topic '${topic}'`)
          })
        client.publish(topic, data, { qos: 0, retain: false }, (error) => {
        if (error) {
            console.error(error)
        }
        })
    })
}
// Publisher(data_)

// move speed(int) sleep_time(int)(0 for infinite run) forward|backward
// servo numero_du_servo(int) angle(int)
// reinit -> reinit le bras moteur
// light gauche(bool) droite(bool) durée(0=continuous int=nbr de sec)
// turn right|left .
// paparazzi .
