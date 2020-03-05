var billAmount=89;
function gratutity (billAmt) {
    return billAmt *0.2
}
function totalwithGrat (billAmt){
    var total=billAmt + gratutity(billAmt);
    return total;
}


console.log(totalwithGrat(billAmount));
console.log(totalwithGrat(95));jS G