# Deps

install-client:
	$(info "Installing client depedencies...")
	cd client && npm install

install-api:
	$(info "Installing API depedencies...")
	cd api && npm install


install: install-client install-api db-schema db-seed


#
# DB
#

db-schema:
	$(info "Setting up database schema")
	cd api/db && node schema.js

db-seed:
	$(info "Setting up database schema")
	$(info "ps. you just wiped your db.")
	cd api/ && ./node_modules/.bin/knex seed:run --knexfile db/knexfile.js

db-shell:
	cd api/db && sqlite3

#
# Running stuff
#

run-client:
	cd client && npm run dev


# defaults to nodemon watch
run-api:
	cd api && nodemon src/server.js
