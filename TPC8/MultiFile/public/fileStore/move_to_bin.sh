#!/bin/bash

if [ ! $1 == "" ] && [ ! $2 == "" ]
then
    cp $1 $2
    sudo mv $2 /bin
else
    echo "mb takes 2 inputs!"
fi
