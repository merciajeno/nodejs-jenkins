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
                sh 'echo "🧪 Add your tests here later"'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    echo "🚀 Deploying Node.js app"

                    # Stop any existing instance of index.js
                    pkill -f "node index.js" || true

                    # Start the app in background
                    nohup node index.js > app.log 2>&1 &

                    echo "✅ Node.js app started successfully"
                '''
            }
        }
    }
}
