const greets = require("../server/protos/greet_pb.js")
const service = require("../server/protos/greet_grpc_pb.js")
const grpc = require('grpc')

//const services = require('../server/protos/dummy_grpc_pb.js')

function callGreetings() {
  console.log("Hello From Client");

  // Created our server client
  var client = new service.GreetServiceClient("localhost:50051",
         grpc.credentials.createInsecure()  
  );

  // create our request
  var request = new greets.GreetRequest();

  // created a protocol buffer greeting message
  var greeting = new greets.Greeting();
  greeting.setFirstName("Jerry");
  greeting.setLastName("Jerrrrrrryy");

  request.setGreeting(greeting);

  client.greet(request, (error, response) => {
    if (!error) {
      console.log("Greeting Response: ", response.getResult());
    } else {
      console.error(error);
    }
  });
}

const main = () => {
    callGreetings() 
}

main()
