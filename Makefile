install: install_docker_postgres install_project_node_deps install_client_deps

# start the whole stack
start:
	npm run start-db && npm start

db_shell:
	@echo "============ entering the docker psql shell ================"
	docker exec -it speakfriend_db psql -U postgres

clean:
	@echo "stopping and removing docker containers, removing node modules"
	docker stop speakfriend_db || docker rm speakfriend_db ||  rm -rf client/node_modules || rm -rf node_modules

# Install commands
# check_postgrest:
#   echo "postgrest"

# ======== Installation Commands =========== #

# These are the commands for installing different parts of the app. 
# These should be ran when `make install` is called. If you've had issues getting installed you may need to dig around here for each respective part of the stack to make changes / try installing things by hand.

# Install the docker postgres image; give the image the name "speakfriend_db"; assign it the port of 5432.
install_docker_postgres:
	@echo "installing docker postgrest image"
	docker run --name speakfriend_db -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres

# install the general project dependencies for all of speakfriend:  these are mostly just tools for build processes and documentation.
install_project_node_deps:
	@echo "installing project node dependencies"
	npm install 

# install dependencies for the preact client.
install_client_deps:
	@echo "installing client node dependencies"
	cd client && npm install 