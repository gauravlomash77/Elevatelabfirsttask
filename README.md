# Node.js Portfolio CI/CD with Docker and GitHub Actions

This repository demonstrates a **complete CI/CD pipeline** for My Node.js portfolio application using **GitHub Actions** and **Docker**.

---

## Overview

- A simple **Node.js portfolio app** built with **Express.js**  
- **Dockerfile** to containerize the application  
- **GitHub Actions workflow** for automating CI/CD (build → test → DockerHub push → EC2 deployment)  
- Deployment target: **AWS EC2 instance** running Docker  

---

## Workflow Summary

1. **Code Checkout**: Pulls the latest code from main branch  
2. **Setup Node.js**: Installs Node.js version 18  
3. **Install Dependencies**: Runs npm install  
4. **Run Tests**: Executes npm test  
5. **Docker Build & Push**: Builds Docker image and pushes it to DockerHub  
6. **EC2 Deployment**: SSH into EC2, pull the latest image, and run the container  

---

## Secrets Required

- DOCKERHUB_USERNAME → DockerHub username  
- DOCKERHUB_TOKEN → DockerHub access token  
- EC2_HOST → Public IP of EC2 instance  
- EC2_USER → EC2 username   
- EC2_KEY → Private SSH key content for EC2  

---

## Outcome

- **Automated CI/CD pipeline** triggered on every push to main  
- Docker image is built and pushed to DockerHub automatically  
- Latest version of the portfolio app is deployed to **EC2**  

---

## Access


- Once deployed, the portfolio can be accessed at:
- http://43.205.118.64/
