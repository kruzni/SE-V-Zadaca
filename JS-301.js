function min(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    if(num1 > num2){
        console.log(num2);
    }
    else console.log(num1);
}

var zad = new min(7,2)
zad