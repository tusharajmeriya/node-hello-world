import groovy.json.JsonSlurperClassic 

@NonCPS
def jsonParse(def json) {
    new groovy.json.JsonSlurperClassic().parseText(json)
}

node('docker_vgrant_slave')
{
    stage('checkout')
    {
        git 'https://github.com/tusharajmeriya/node-hello-world.git'
    }
    stage('Build Application')
    {
        def config =  jsonParse(readFile("package.json"))
       env.APP_VERSION = config['version']
       docker.image('node').inside {
        sh '''
        npm install
        #ver=node -e "console.log(require('./package.json').version);"
        tar -czvf "node_demo_${APP_VERSION}.tar" *
        '''
        }
    }
    stage('upload artifacts')
    {
        //nexusArtifactUploader artifacts: [[artifactId: 'node_app_1', classifier: '', file: 'node_demo.tar', type: 'zip']], credentialsId: 'nexus_admin', groupId: 'nodedemoapp', nexusUrl: '192.168.99.100:8081', nexusVersion: 'nexus3', protocol: 'http', repository: 'node_demo_app', version: '1'

    }
}