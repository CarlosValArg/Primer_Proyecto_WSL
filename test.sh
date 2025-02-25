#!/bin/bash

set -e

echo "Ejecutando pruebas..."

npx mocha -r ts-node/register "src/**/*.spec.ts" --timeout 10000 --require tsconfig-paths/register

echo "Pruebas finalizadas."
