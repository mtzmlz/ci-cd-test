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
            // steps {
                def scannerHome = tool 'SonarQube Scanner 2.8';
                withSonarQubeEnv('sonar-local') {
                    sh "${scannerHome}/bin/sonar-scanner"
                }
            // }
        }
    }
}