pipeline {
    agent any

    tools {
        nodejs 'Mynode'
    }

    stages {

        stage('Clone Repo') {
            steps {
                git url: 'https://github.com/KaranManhas22/Vaibhav.git', branch: 'main'
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

        stage('Run Backend with PM2') {
    steps {
        sh '''
        sudo -u ubuntu pm2 delete backend || true
        sudo -u ubuntu pm2 start /var/lib/jenkins/workspace/kiza/backend/index.js --name backend
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
