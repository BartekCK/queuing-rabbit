# Queuing-rabbit

There were created 3 micro-applications: 
1. Producer (Node.js)
2. Consumer (Python)
3. Consumer (Node.js)

All services use single `queue` called *kotki* and by HTTP POST request clients have possibility to create new messages for producer. `http://localhost:3000`
```json
{
  "message": "New message which producer'll produce"
}
```
Consumers read all messages in order `%2` and console it on output.
## How it works 
[![Watch the video](https://img.youtube.com/vi/wxHMk44_4nU/hqdefault.jpg)](https://youtu.be/wxHMk44_4nU)

## How to run

Single command launch all services:
```bash
docker-compose up 
```
The most important is to wait for master host (RabitMQ) by all consumers and producer. [Wait-for-it](https://github.com/vishnubob/wait-for-it) was used to ensure sequence launching.
You can use command below to see additional logs: (with/without `container-name`)
```bash
docker-compose logs -f <container-name>
```
