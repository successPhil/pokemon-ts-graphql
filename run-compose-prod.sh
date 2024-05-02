#!/bin/sh

# The Dockerhub account where the images are stored


# These environment variables come from command line arguments.
# They are consumed by the docker-compose file.

#####################################
export POSTGRES_DB=node_pokemon_db
export POSTGRES_USER=postgres

#####################################

## Less sensitive variables above

## Sensitive variables that should be injected and shared with no one

#################################
#################################
export DOCKERHUB_UNAME=$DOCKERHUB_UNAME
export NEW_VERSION=$NEW_VERSION
export DB_PASS=$DB_PASS



export VITE_API_KEY=$VITE_API_KEY
export VITE_AUTH_DOMAIN=$VITE_AUTH_DOMAIN
export VITE_PROJECT_ID=$VITE_PROJECT_ID
export VITE_STORAGE_BUCKET=$VITE_STORAGE_BUCKET
export VITE_MESSAGING_SENDER_ID=$VITE_MESSAGING_SENDER_ID
export VITE_APP_ID=$VITE_APP_ID
export FIREBASE_AUTH_DOMAIN=$FIREBASE_AUTH_DOMAIN
#################################
#################################


COMPOSE_DOCKER_CLI_BUILD=0 DOCKER_BUILDKIT=0 docker-compose -f docker-compose.prod.yml build --no-cache
docker-compose -f docker-compose.prod.yml up -d