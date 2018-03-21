pipeline {
    agent any
    // this tool will be used for all stages/steps except over-written
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