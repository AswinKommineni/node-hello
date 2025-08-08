pipeline {
    agent any
    
    triggers {
        // Poll SCM every 5 minutes (hashed to avoid server load spikes)
        pollSCM('H/5 * * * *')
    }
    
    tools {
        nodejs 'NODEJS_HOME' // This should match the name you configured in Global Tool Configuration
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
                echo 'this is docker'
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
    }
}


