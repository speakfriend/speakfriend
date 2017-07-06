install:
	npm install || cd client && npm install || cd .. && docker run --name speakfriend_db -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres
# TODO: make sure user has downloaded postgrest binary

# start the whole stack
start:
	npm run start-db && npm start

# remove docker images
# this isjn't working i don't htink

clean:
	docker stop speakfriend_db || docker rm speakfriend_db ||  rm -rf client/node_modules || rm -rf node_modules
