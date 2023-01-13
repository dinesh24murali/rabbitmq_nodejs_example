## RabbitMQ Example

This is a simple RabbitMQ setup with two nodeJS apps

### Prerequisites:

- Install Docker
- Install nodeJS
- Pull rabbitmq docker image using `docker pull rabbitmq`

### Steps to run:

- Start the rabbitmq docker container
```
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:latest
```
- Start the client app

- Start the provider app in another terminal

- Open your browser and hit http://localhost:4001/send-msg

- You should see a log in the provider app saying that message has been sent

- You should see a log in the client app saying that message has been received
