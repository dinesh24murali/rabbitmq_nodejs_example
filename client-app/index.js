const express = require("express");
const amqp = require("amqplib");

const app = express();
const PORT = process.env.PORT || 4002;
app.use(express.json());
app.listen(PORT, () => console.log("Server running at port " + PORT));

var channel, connection;

async function connectQueue() {
    try {
        connection = await amqp.connect("amqp://localhost:5672");
        channel = await connection.createChannel()

        await channel.assertQueue("test-queue")

        channel.consume("test-queue", data => {
            console.log("Inside consumer");
            console.log(`${Buffer.from(data.content)}`);
            channel.ack(data);
        })
    } catch (error) {
        console.log(error);
    }
}

connectQueue()  // call the connect function

