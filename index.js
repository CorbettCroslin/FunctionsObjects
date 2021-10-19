// 1,2,3
function mySum(a,b){
	return a+b;
}
console.log(mySum(2,4));


function myAdd(a,b,c){
	return a+b+c;

}
console.log(myAdd(2,4,6));


function mySumAdd(a,b,c,d){
	return a+b+c+d;
}
console.log(mySumAdd(2,4,6,8));

// 6
var lighting = {
    "location": "basement",
    "numberCircuits": 6,
    "numberWires": 3,
    "wireColor": ["red", "black", "white"]
  };

//   7
console.log(locationValue = lighting.location)
console.log(numberCircuits = lighting.numberCircuits)
console.log(numberWires = lighting.numberWires)
console.log(wireColor = lighting.wireColor[1])

// 8
console.log(lighting["location"])
console.log(lighting["numberCircuits"])
console.log(lighting["numberWires"])
console.log(lighting["wireColor"][0])

// 9
lighting.voltage = 120;

console.log(voltage = lighting.voltage)

// 10

lighting.location = "bathroom";
lighting.numberCircuits = 8;
lighting.wireColor = ["brown", "green", "yellow"];
lighting.voltage = 240;

console.log(locationValue = lighting.location)
console.log(numberCircuits = lighting.numberCircuits)
console.log(numberWires = lighting.numberWires)
console.log(wireColor = lighting.wireColor[1])