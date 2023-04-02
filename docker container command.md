Remember to pull the latest rabbitmq docker image
```
docker pull rabbitmq
```

run the following command to start rabbitmq
```
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:latest
```
