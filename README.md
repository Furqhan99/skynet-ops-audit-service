# Skynet Ops Audit Service

A lightweight CloudOps audit logging service built using Node.js, Docker, and Terraform on AWS.

## Architecture

Client → EC2 → Node.js API → SQLite Database

## Features

- Health monitoring endpoint
- Audit event logging
- Containerized using Docker
- Infrastructure managed using Terraform
- Deployable on AWS EC2

## API Endpoints

Health Check
GET /health

Example response
{
 "status": "ok"
}

Create Event
POST /events

Fetch Events
GET /events

## Technologies Used

Node.js
Docker
Terraform
AWS EC2
SQLite

## Deployment

1. Launch EC2 instance on AWS
2. Install Docker and Node.js
3. Build Docker image
4. Run container on port 3000
5. Use Terraform for infrastructure provisioning

## Cost Optimization

The system is designed to run on a small EC2 instance keeping infrastructure cost under $25/month.

## Author

Mohd Taha Furqhan
junior DevOps Engineer
