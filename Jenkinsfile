pipeline {
    agent any
    tools {nodejs "node9"}
     
    stages {
        stage('Build') {
            steps {
                tool name: 'node9'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                tool name: 'node9'
                sh 'npm test'
            }
        }
        stage('Scan with Sonar') {
            steps {
                script {
                    // requires SonarQube Scanner 2.8+
                    scannerHome = tool 'sonar'
                }
                withSonarQubeEnv('sonar-local') {
                    sh "${scannerHome}/bin/sonar-scanner"
                }
            }
        }
    }
}