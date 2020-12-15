pipeline {
  agent any
  stages {
    
    stage("Build") {
        steps {
            sh "sudo npm install"
            sh "sudo npm run build"
        }
    }
    
    stage('deploy') {
      when {
        branch 'main'
      }

      steps {
        sh 'rm -rf /usr/share/tomcat/webapps/ui || true'
        sh 'cp -r build /usr/share/tomcat/webapps/ui'
      }
    }
  }
}