const grpc = require("grpc")
const greets = require("../server/protos/greet_pb")
const service = require("../server/protos/greet_grpc_pb")

/*
 *Implements the greets rpc method
 */
function greet(call, callback){

    let greeting = new greets.GreetResponse()
    greeting.setResult("Hello"+ 
        call.request.getGreeting().getFirstName()+ ' ' )
        //+ call.request.getGreeting.getLastName())
    callback(null, greeting)
}

const main = () => {
    let server = new grpc.Server()
    server.addService(service.GreetServiceService,{greet:greet})
    server.bind("127.0.0.1:50051", grpc.ServerCredentials.createInsecure())
    server.start()
    console.log('server running on 127.0.0.1:50051' )
}

main()
