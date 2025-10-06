# Restoran Sipariş Sistemi

Modern React tabanlı restoran sipariş yönetim sistemi.

## 🚀 Özellikler

- React 18 ile modern UI/UX
- Tailwind CSS ile responsive tasarım
- Docker containerization
- CI/CD pipeline (GitHub Actions)
- Nginx ile production deployment

## 🛠️ Teknolojiler

- **Frontend**: React 18, React Router, Tailwind CSS
- **Containerization**: Docker, Docker Compose
- **CI/CD**: GitHub Actions
- **Web Server**: Nginx

## 📦 Kurulum

### Geliştirme Ortamı

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm start
```

### Docker ile Çalıştırma

```bash
# Production build
npm run docker:prod

# Development mode
npm run docker:dev

# Sadece build
npm run docker:build

# Container'ı durdur
npm run docker:down
```

### Manuel Docker Komutları

```bash
# Image build et
docker build -t restoransistemi .

# Container çalıştır
docker run -p 3000:80 restoransistemi

# Docker Compose ile çalıştır
docker-compose up -d
```

## 🌐 Erişim

- **Development**: http://localhost:3000
- **Docker Production**: http://localhost:3000

## 🔧 Environment Variables

`.env` dosyası oluşturun ve `env.example` dosyasındaki değişkenleri kopyalayın:

```bash
cp env.example .env
```

## 🚀 CI/CD

Proje GitHub Actions ile otomatik CI/CD pipeline'a sahiptir:

- **Test**: Her push/PR'da testler çalışır
- **Build**: Docker image otomatik build edilir
- **Deploy**: Main branch'e push'ta otomatik deploy

## 📁 Proje Yapısı

```
├── src/
│   ├── components/     # React bileşenleri
│   ├── pages/         # Sayfa bileşenleri
│   ├── context/       # Context API
│   └── assets/        # Statik dosyalar
├── public/            # Public dosyalar
├── .github/workflows/ # CI/CD workflows
├── Dockerfile         # Production Docker image
├── Dockerfile.dev     # Development Docker image
├── docker-compose.yml # Docker Compose konfigürasyonu
└── nginx.conf         # Nginx konfigürasyonu
```

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.