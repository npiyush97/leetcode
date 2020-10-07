// class Coffee{
//     _waterAmount = 0

//     set waterAmount(value){
//         if(value<0)throw new Error('No Coffee without water')
//         this._waterAmount = value
//     }
//     get waterAmount(){
//         return this._waterAmount
//     }
//     constructor(power){
//         this._power = power
//     }
// }

// let coffeeMachine = new Coffee('250w')
// console.log(coffeeMachine)
// console.log(coffeeMachine.waterAmount)

 function sum(a, b) {
    console.log( a+b)
}
async function add(){
    let wait = new Promise((res)=>{
    setTimeout(() =>res(sum(10, 10)),2000)
    console.log('Waiting...');
    })
}
add()
