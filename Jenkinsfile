pipeline {
    agent any

    stages {
        stage('Build 2') {
            steps {
                sh 'npm build'
            }
        }
        stage('Test 2') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy 2') {
            steps {
                echo 'Deploying...'
            }
        }
    }
}