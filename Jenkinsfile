pipeline {
    // this tool will be used for all stages/steps except over-written
    tools {nodejs "version-name-set-in-configure-system"}
     
    stages {
        stage('Example') {
            steps {
                // can override tool here
                tool name: 'node-version-name-set-in-configure-system'
                sh 'npm config ls'
            }
        }
    }
}