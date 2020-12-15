pipeline {
  agent any
  stages {
    stage('test') {
      steps {
        sh 'npm run test'
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