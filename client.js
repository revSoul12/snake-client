const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '172.46.0.110',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");

    conn.write('Name: DML');
    // conn.write("Move: up");
    // setTimeout(() => {conn.write("Move: left")}, 50);
    // setTimeout(() => {conn.write("Move: left")}, 100);
    // setTimeout(() => {conn.write("Move: down")}, 150);
   

  });

  return conn;
}

module.exports = {connect};