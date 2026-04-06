pipeline {
    agent any
    tools {nodejs 'Mynode'}

    stages {
        stage('first') {
            steps {
                git url: 'https://github.com/duggalvaibhav8-beep/kiza.git' , branch: 'main'
            }
        }
        
         stage('second') {
            steps {
                dir('backend') {
                    bat 'npm i'
                    bat 'npm i pm2 -g'
                    bat 'pm2 start index.js --name bihari'
                }
                
            }
        }
        
         stage('third') {
            steps {
                dir('frontend-kiza'){
                    bat 'npm i'
                    bat 'npm run build'
                }
            }
        }
        
    }
}
