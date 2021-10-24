#!/bin/bash

pwd

function coverage() {
  curl -L https://codeclimate.com/downloads/test-reporter/test-reporter-latest-linux-amd64 > ./cc-test-reporter
  chmod +x ./cc-test-reporter
  ./cc-test-reporter before-build
}

function envs() {
  cp .env.example .env  
}

coverage
envs