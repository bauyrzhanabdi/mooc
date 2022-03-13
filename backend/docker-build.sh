#!/bin/bash

echo "----- Building image"
mkdir -p target/dependency && (cd target/dependency; jar -xf ../*.jar);

docker build -t mooc-backend:latest .
echo "----- Image was built"
