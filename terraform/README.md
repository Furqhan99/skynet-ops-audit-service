# Skynet Ops Audit Service

## Overview
Simple audit event logging service built for CloudOps technical assessment.

## Tech Stack
- Node.js
- SQLite
- Docker
- AWS EC2
- Terraform

## API Endpoints

GET /health
Returns service health.

POST /events
Creates audit event.

GET /events 
Returns stored events.

## Deployment

Service runs inside Docker container on AWS EC2.

## Infrastructure as Code

Terraform used to define EC2 infrastructure.

## Monitoring

Logs can be monitored using AWS CloudWatch.

## Cost Estimate

EC2 t2.micro: ~$8/month 
Storage: ~$2/month
CloudWatch logs: ~$3/month 

Total: ~$13/month
