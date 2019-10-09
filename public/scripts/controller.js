client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
document.getElementById("Off").disabled = true;



function TurnedOn(){
  var d = new Date();
  client.publish("adrian/device/status", "Turned On :"+ d);
  var status = "The Device Is Currently Turned On"
  document.getElementById('Message').innerHTML = status.toString();
  document.getElementById("Off").disabled = false;
}

function TurnedOff(){
  var d = new Date();
  client.publish("adrian/device/status", "Turned Off:"+ d);
  var status = "The Device Is Currently Turned Off"
  document.getElementById('Message').innerHTML = status.toString();
  document.getElementById("Off").disabled = true;

}


