pipeline {
    agent any
    tools {nodejs "node9"}
     
    stages {
        stage('Build 1') {
            steps {
                tool name: 'node9'
                sh 'npm install'
            }
        }
        stage('Test 1') {
            steps {
                tool name: 'node9'
                sh 'npm test'
            }
        }
        stage('Scan with Sonar 1') {
            steps {
                script {
                    // requires SonarQube Scanner 2.8+
                    scannerHome = tool 'sonar'
                }
                withSonarQubeEnv('sonar-local') {
                    sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=ci-cd-demo  -Dsonar.sources=."
                }
            }
        }
        stage('Provision 1') {
            steps {
                // tool name: 'node9'
                sh 'sh upload-docker-image.sh'
            }
        }
    }
}