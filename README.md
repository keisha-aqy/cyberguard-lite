# CyberGuard Lite

**Lightweight Server & Security Monitoring System**

CyberGuard Lite is a lightweight infrastructure monitoring platform built using React, Docker, Prometheus, Windows Exporter, and Grafana.

The project demonstrates how modern web development and monitoring technologies can be integrated into a centralized monitoring environment.

## Features

- Infrastructure monitoring overview
- CPU utilization monitoring
- Physical memory monitoring
- Disk utilization monitoring
- Network traffic monitoring
- Security events demonstration
- Grafana dashboard integration
- Docker-based deployment

## Technology Stack

| Technology | Purpose |
|---|---|
| React + Vite | Frontend |
| Tailwind CSS | UI styling |
| Nginx | Web server |
| Docker Compose | Container orchestration |
| Prometheus | Metrics collection |
| Windows Exporter | Windows system metrics |
| Grafana | Metrics visualization |

## Architecture

```text
Windows 11 Host
      |
Windows Exporter
      |
Docker Desktop
      |
Prometheus
      |
Grafana

React + Nginx
      |
CyberGuard Web Interface
```

## Requirements

- Windows 11
- Docker Desktop
- Node.js and npm
- Windows Exporter
- Git

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/USERNAME/cyberguard-lite.git
cd cyberguard-lite
```

### 2. Configure Environment

Copy `.env.example` to `.env` and configure the Grafana administrator password.

### 3. Start Services

```bash
docker compose up -d --build
```

### 4. Access Applications

| Service | URL |
|---|---|
| CyberGuard | http://localhost:8080 |
| Prometheus | http://localhost:9090 |
| Grafana | http://localhost:3000 |
| Windows Exporter | http://localhost:9182/metrics |

Ensure Windows Exporter is installed and running on the host.

## Monitoring Metrics

- CPU Usage
- Memory Usage
- Disk Usage
- Network Traffic

## Project Scope

This is an educational MVP project. Security event records in the initial version are simulated and do not represent real-time threat detection.

## Future Improvements

- Wazuh integration
- Multi-server monitoring
- Docker container monitoring
- Security event visualization
- Monitoring alerts

## Author

Developed as a learning project integrating React development, Docker containerization, infrastructure monitoring, and cybersecurity concepts.
