# Order System

Modern React-based restaurant order management system.

## 🚀 Features

- Modern UI/UX with React 18
- Responsive design with Tailwind CSS
- Docker containerization
- CI/CD pipeline (GitHub Actions)
- Production deployment with Nginx

## 🛠️ Technologies

- **Frontend**: React 18, React Router, Tailwind CSS
- **Containerization**: Docker, Docker Compose
- **CI/CD**: GitHub Actions
- **Web Server**: Nginx

## 📦 Installation

### Development Environment

```bash
# Install dependencies
npm install

# Start development server
npm start
```

### Running with Docker

```bash
# Production build
npm run docker:prod

# Development mode
npm run docker:dev

# Build only
npm run docker:build

# Stop container
npm run docker:down
```

### Manual Docker Commands

```bash
# Build image
docker build -t order-system .

# Run container
docker run -p 3000:80 order-system

# Run with Docker Compose
docker-compose up -d
```

## 🌐 Access

- **Development**: http://localhost:3000
- **Docker Production**: http://localhost:3000

## 🔧 Environment Variables

Create `.env` file and copy variables from `env.example`:

```bash
cp env.example .env
```

## 🚀 CI/CD

The project has an automated CI/CD pipeline with GitHub Actions:

- **Test**: Tests run on every push/PR
- **Build**: Docker image is automatically built
- **Deploy**: Automatic deploy on main branch push

## 📁 Project Structure

```
├── src/
│   ├── components/     # React components
│   ├── pages/         # Page components
│   ├── context/       # Context API
│   └── assets/        # Static files
├── public/            # Public files
├── .github/workflows/ # CI/CD workflows
├── Dockerfile         # Production Docker image
├── Dockerfile.dev     # Development Docker image
├── docker-compose.yml # Docker Compose configuration
└── nginx.conf         # Nginx configuration
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Create Pull Request

## 📄 License

This project is licensed under the MIT License.