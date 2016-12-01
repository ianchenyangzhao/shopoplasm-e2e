#!/bin/bash

# check pakage manager Homebrew
homebrew_path=$(which brew)
if [ homebrew_path = "" ]
then
    echo "Homebrew not found, need to install Homebrew"
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
else
    echo "Found Homebrew at" $homebrew_path
    echo "Skip installing Homebrew"
fi

# check selenim standalone server