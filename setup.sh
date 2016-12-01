#!/bin/bash

# check package manager Homebrew
homebrew_path=$(which brew)
if [ homebrew_path = "" ]
then
    echo "Homebrew not found, need to install Homebrew"
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
else
    echo "Found Homebrew at" $homebrew_path
    echo "Skip installing Homebrew"
fi

# check for nodejs and npm
if [ $(which node) = "" ]
then
    echo "Nodejs not found, installing"
    brew install node
else
    echo "Found nodejs at" $(which node)
fi

# check if nodejs install and have npm
if [ $(which node) = "" ] 
then
    echo "NPM not found, installing"
    brew install npm
else 
    echo "Found npm at" $(which npm) 
fi

# install test suite dependencies
echo "Installing test suits dependencies"
npm install