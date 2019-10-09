// basic functionalities
  // console.log("Connecting..");
  // displayMessage("Connecting..");  
  client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
  document.getElementById("Off").disabled = true;



function TurnedOn(){
  var d = new Date();
  // console.log("publish");
  client.publish("adrian/device/status", "Turned On :"+ d);
  var status = "The Device Is Currently Turned On"
  document.getElementById('Message').innerHTML = status.toString();
  document.getElementById("Off").disabled = false;
  // client.publish(document.getElementById('pub-topic').value, document.getElementById('pub-payload').value)
  // console.log("Published { topic: " + document.getElementById('pub-topic').value + "; payload: " + document.getElementById('pub-payload').value + " }");
  // displayMessage("Turned On :"+ d);
  // console.log(document.getElementById('pub-topic').value);
  // console.log(document.getElementById('pub-payload').value);
}

function TurnedOff(){
  var d = new Date();
  // console.log("publish");
  client.publish("adrian/device/status", "Turned Off :"+ d);
  var status = "The Device Is Currently Turned Off"
  document.getElementById('Message').innerHTML = status.toString();
  document.getElementById("Off").disabled = true;
  // client.publish(document.getElementById('pub-topic').value, document.getElementById('pub-payload').value)
  // console.log("Published { topic: " + document.getElementById('pub-topic').value + "; payload: " + document.getElementById('pub-payload').value + " }");
  // displayMessage("Turned On :"+ d);
  // console.log(document.getElementById('pub-topic').value);
  // console.log(document.getElementById('pub-payload').value);
}


