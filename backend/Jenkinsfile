pipeline{
  agent any
  environment{
    NODE_ENV ='development'
  }
  tools{
    nodejs 'nodeJS'
  }
  triggers{
    pollSCM('H/5 * * * * *')
  }
  stages{
stage('Repository checking'){
  steps{
    echo 'Cloning the git_repo'
    git branch:'main' , url:'https://github.com/KaranManhas22/backend.git'
  }

}
stage('Install Node-js'){
steps{
  echo 'inStalling node-js'
  sh 'npm install'
}
}
steps('Run')
{
steps{
echo 'Running'
sh 'npm start'
}
}
  }
  post{
    success{
      echo 'Compiled successfull'
    }
    failure{
      echo 'Not compiled'
    }
  }

}