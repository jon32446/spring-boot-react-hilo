# HiLo game with Spring Boot backend and React frontend

This project is a simple test to have a React frontend communicate with a Spring Boot backend.

A Docker compose file is provided to run the project in development. Hot-reloading is supported on
the React frontend when running from Docker.

To start the services:

    docker-compose up -d --build

To stop them:

    docker-compose down

The frontend is available at http://localhost:3000

Example:

![High Low Game](/hilo_demo.gif "High Low Game")
