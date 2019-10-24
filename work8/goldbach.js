var num = parseInt(promp("请输入一个偶数"))
isTuue(num)
function factorial(a){
    var sum = 0
    for(var i=1;i<=a;i++){
        if(a%i ==0){
            sum++
        }
    }
    if(num==2){
        return true
    }else{
        return false
    }
}
function isTuue(a){
    for(var i=2; i<a-2; i++){
        var j = a-i
        if(factorial(i)&&factorial(j)){
            console.log(a+"可以拆分为两个质数" + i+"与" +j +"的和")
        }
    }
}