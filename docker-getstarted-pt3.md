# Basic Docker commands list used in pt 3

## Docker Stack's
docker stack ls                                            # List stacks or apps
docker stack deploy -c <composefile> <appname>  # Run the specified Compose file
docker service ls                 # List running services associated with an app
docker service ps <service>                  # List tasks associated with an app
docker inspect <task or container>                   # Inspect task or container
docker container ls -q                                      # List container IDs
docker stack rm <appname>                             # Tear down an application
docker swarm leave --force      # Take down a single node swarm from the manager

# Cheat Sheet for Load-balanced deploy (scale)

## Run ur new load-balanced app
### Before we can use the docker stack deploy command we first run
docker swarm init # Active Swarm mode
### Now let’s run it. You need to give your app a name. Here, it is set to **app_name**;
docker stack deploy -c docker-compose.yml app_name
### Our single service stack is running 5 container instances of our deployed image on one host. Let’s investigate. Get the service ID for the one service in our application:
docker service ls