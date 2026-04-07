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
                    sh 'npm i'
                    sh 'npm start'
                    // sh 'npm i pm2 -g'
                    // sh 'pm2 delete bihari || true'
                    // sh 'pm2 delete backend || true'
                    // sh 'pm2 start index.js --name bihari'
                }
                
            }
        }
        
        //  stage('third') {
        //     steps {
        //         dir('frontend-kiza'){
        //             sh 'npm i'
        //             sh 'npm run build'
        //         }
        //     }
        // }
        
    }
}
