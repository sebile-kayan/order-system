# Docker Test Script for Windows PowerShell
Write-Host "🐳 Testing Docker setup..." -ForegroundColor Green

# Build the image
Write-Host "Building Docker image..." -ForegroundColor Yellow
docker build -t order-system-test .

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Docker image built successfully" -ForegroundColor Green
} else {
    Write-Host "❌ Docker build failed" -ForegroundColor Red
    exit 1
}

# Run the container
Write-Host "Starting container..." -ForegroundColor Yellow
docker run -d --name order-system-test -p 3001:80 order-system-test

# Wait for container to start
Start-Sleep -Seconds 5

# Test if the application is running
Write-Host "Testing application..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "http://localhost:3001" -UseBasicParsing
    if ($response.StatusCode -eq 200) {
        Write-Host "✅ Application is running successfully" -ForegroundColor Green
    } else {
        Write-Host "❌ Application test failed (HTTP $($response.StatusCode))" -ForegroundColor Red
    }
} catch {
    Write-Host "❌ Application test failed: $($_.Exception.Message)" -ForegroundColor Red
}

# Cleanup
Write-Host "Cleaning up..." -ForegroundColor Yellow
docker stop order-system-test
docker rm order-system-test

Write-Host "🎉 Docker test completed!" -ForegroundColor Green
