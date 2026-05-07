pipeline {
    agent any

    tools {
        nodejs 'Mynode'
    }

    stages {

        stage('Clone Repo') {
            steps {
                git url: 'https://github.com/duggalvaibhav8-beep/kiza.git', branch: 'main'
            }
        }

        stage('Install Backend') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend-kiza') {   // ✅ FIXED NAME
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
        stage('Deploy Backend') {
         steps {
           sh '''
            pm2 delete backend || true
            pm2 start backend/index.js --name backend
            pm2 save
        '''
       }
    }
        

     stage('Deploy Frontend') {
    steps {
        sh '''
        sudo rm -rf /var/www/html/*
        sudo cp -r frontend-kiza/dist/front-end/* /var/www/html/
        '''
    }
}
    }
}
