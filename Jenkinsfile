pipeline {
    agent any
    // this tool will be used for all stages/steps except over-written
    tools {nodejs "node9"}
     
    stages {
        stage('Build') {
            steps {
                // can override tool here
                tool name: 'node9'
                sh 'npm build'
            }
        }
        stage('Test') {
            steps {
                // can override tool here
                tool name: 'node9'
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                // can override tool here
                echo 'Deployed...'
            }
        }
    }
}