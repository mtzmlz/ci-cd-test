pipeline {
    agent any
    // this tool will be used for all stages/steps except over-written
    tools {nodejs "node9"}
     
    stages {
        stage('Example') {
            steps {
                // can override tool here
                tool name: 'node9'
                sh 'npm config ls'
            }
        }
    }
}