var ParkingSystem = function(big, medium, small) {
    this.count = [big,medium,small]
};

ParkingSystem.prototype.addCar = function(carType) {
    return this.count[carType - 1]-- > 0
};
ParkingSystem(["ParkingSystem","addCar","addCar","addCar","addCar"]
[[1,1,0],[1],[2],[3],[1]])

// if(this.count[carType]){
//   this.count[carType]--
//   return true
// }
// return false