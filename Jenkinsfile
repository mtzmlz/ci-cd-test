pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
            }
        }
    }
}