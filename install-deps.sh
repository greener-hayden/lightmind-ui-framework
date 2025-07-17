#!/bin/bash
# Script to install dependencies properly bypassing workspace protocol issues

echo "Installing dependencies for gallery app..."

# Navigate to gallery directory
cd apps/gallery

# Remove existing node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Install dependencies without workspace protocol
npm install --no-package-lock --legacy-peer-deps

echo "Dependencies installed successfully!"