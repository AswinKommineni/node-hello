pipeline {
    agent any
    
    triggers {
        // Poll SCM every 5 minutes (hashed to avoid server load spikes)
        pollSCM('H/5 * * * *')
    }
    
    tools {
        nodejs 'NODEJS_HOME' // This should match the name you configured in Global Tool Configuration
        docker 'Docker' // This should match the Docker tool name you configured
    }

    stages {
        stage('checkout') {
            steps {
                checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/AswinKommineni/node-hello.git']])
                echo 'this is checkout'
            }
        }
        stage('build') {
            steps {
                echo 'Installing Node.js and npm dependencies'
                sh 'node --version'
                sh 'npm --version'
                sh 'npm install'
                echo 'Running npm build...'
                sh 'npm run build'
                echo 'Build stage complete'
            }
        }
        stage('unit test stage') {
            steps {
                echo 'Running unit tests'
                sh 'npm test'
                echo 'Test stage complete'
            }
        }
        stage('docker') {
            steps {
                script {
                    // Check Docker daemon connection
                    echo 'Checking Docker daemon connection...'
                    sh 'docker info || echo "Docker daemon not accessible"'
                    
                    // Build Docker image
                    echo 'Building Docker image...'
                    
                    sh 'docker build -t aswin3661/myapplication:${BUILD_NUMBER} .'
                    
                    echo 'Docker image built successfully'
                }
            }
        }
        stage('push to docker hub') {
            steps {
                script {
                    // Login to Docker Hub using credentials
                    echo 'Logging into Docker Hub...'
                    withCredentials([usernamePassword(credentialsId: 'docker_cred', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
                        
                        // Push images to Docker Hub
                        echo 'Pushing Docker images to Docker Hub...'
                        
                        sh 'docker push aswin3661/myapplication:${BUILD_NUMBER}'
                        
                        echo 'Docker images pushed successfully'
                    }
                }
            }
        }
        stage('deploy') {
            steps {
                echo 'this is deploy'
            }
        }
    }
    post {
        always {
            echo 'pipeline is completed'
        }
        success {
            script {
                // Clean up local Docker images after successful push
                echo 'Cleaning up local Docker images...'
                sh 'docker rmi aswin3661/myapplication:${BUILD_NUMBER} || true'
                sh 'docker system prune -f'
                echo 'Cleanup completed'
            }
        }
    }
}


