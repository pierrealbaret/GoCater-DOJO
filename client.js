var emitStream = require('emit-stream');
var JSONStream = require('JSONStream');
var net = require('net');

var stream = net.connect(8000)
  .pipe(JSONStream.parse([true]));

var emitter = emitStream(stream);

emitter.on('data', (chunk) => {
  console.log(`i received ${chunk}`);
});

emitter.on('readable', () => {
  let data;
  while(data = this.read()){
    console.log('data', data);
  }
});

emitter.on('end', () => {
  console.log('fin de lecture du fichier');
})
