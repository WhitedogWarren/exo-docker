To build your container :
```sudo docker build -t exo-docker:latest .```

to start container and publish on localhost:3000 :
```sudo docker run -d --name docker-exo -p 3000:3000 exo-docker```