#!/bin/bash

# Docker Test Script
echo "🐳 Testing Docker setup..."

# Build the image
echo "Building Docker image..."
docker build -t order-system-test .

if [ $? -eq 0 ]; then
    echo "✅ Docker image built successfully"
else
    echo "❌ Docker build failed"
    exit 1
fi

# Run the container
echo "Starting container..."
docker run -d --name order-system-test -p 3001:80 order-system-test

# Wait for container to start
sleep 5

# Test if the application is running
echo "Testing application..."
response=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3001)

if [ $response -eq 200 ]; then
    echo "✅ Application is running successfully"
else
    echo "❌ Application test failed (HTTP $response)"
fi

# Cleanup
echo "Cleaning up..."
docker stop order-system-test
docker rm order-system-test

echo "🎉 Docker test completed!"
