# This is a docker file for setting up the elm client.

# let's use node to run elm
# NOTE: Sadly we need the full version of node (can't use alpine, like in snippet'). Maybe this can change in the future

FROM node:7-slim

# Set an environment variable for our home folder inside the container
ENV HOME=/home/app

# Copy over our package json to the home folder
COPY package.json $HOME/client/
COPY elm-package.json $HOME/client/
# COPY webpack.config.js $HOME/client/

# Set our working directory to /home/app/client - For the ELM client, INSIDE the container.
WORKDIR $HOME/client

RUN npm install

CMD ["npm", "start"]

