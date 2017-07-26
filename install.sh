#!/bin/bash

# Check if postgrest is installed. If not, exit.
if ! [ -x "$(command -v postgrest)" ]; then
  echo 'Error: Postgrest is not installed.' >&2
  exit 1
fi


# Check if docker is installed. If not, exit.
if ! [ -x "$(command -v docker)" ]; then
  echo 'Error: Postgrest is not installed.' >&2
  exit 1
fi

# run the install 
echo 'Installing Dependencies, this will take a moment...'

make install


echo 'Thanks for installing SpeakFriend. You can get started by running "make start" to boot the application stack'