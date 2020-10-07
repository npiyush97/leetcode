// var maximum69Number =  (num) => Number(num.toString().replace('6','9'))
// console.log(maximum69Number(9669));
//runtime 84ms memory 34mb
// var maximum69Number =  (num) => {
//     if(num/1000 << 0 === 6) return num + 3000;
//     if((num/100 << 0 ) % 10 == 6) return num + 300;
//     if(num/100 / 10 << 0 === 6) return num + 30;
//     if(num/10 === 6) return num + 3;
//     return num
// }
// console.log(maximum69Number(9669));
//faster
if(num<10) return 9;
else if(num<100){
    if(num===66)return 96;
    return 99;

    //The above is enumerating possible outcomes.

}else {
    let temp=num;
    let multiplier=0;
    if(num<1000) multiplier=100;
    else multiplier=1000;


    while(multiplier>0){
        if(Math.floor(temp/multiplier)===6) {
            //Using 'temp/multiplier' is trying to extract the most significant digit.
            num+=3*multiplier; //e.g. 6669+3000=>9669
            break;
        }
        temp-=9*multiplier; //This is for extracting the second most significant digit.
        //e.g. 9669-9*1000=669, then we could continue the looping.
        multiplier/=10;


    }
}
return num;

