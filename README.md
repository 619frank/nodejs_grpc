npm i -g grpc-tools  
npm install grpc  
npm i google-protobuf  
//code generation
 sudo apt install protobuf-compiler  
protoc -I=. ./protos/greet.proto   --js_out=import_style=commonjs,binary:./server   --grpc_out=./server   --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin`
