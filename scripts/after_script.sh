#!/bin/bash

function coverage() {
  ./cc-test-reporter after-build
}

coverage