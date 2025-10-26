pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/merciajeno/nodejs-jenkins.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'echo "Add your tests here"'
            }
        }
    }
}
