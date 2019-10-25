<<<<<<< HEAD
function goldbach() {
    var value = document.getElementById('odd').value
    if(value%2!==0){
        alert("请输入偶数")
    }
    let goldbach = document.getElementById('goldbach')
    var arr =[]
    var a = 0;
    for(var i=2;i<=value;i++){
        a = 0
        for(var j=2;j<i;j++){
            if(i%j==0){
                a++
            }
        }
        if(a==0){
            arr.push(i)
        }
    }
    var str = ''
    for(let i=0;i<(arr.length)/2;i++){
       for(let j=0;j<arr.length;j++){
           if((arr[i]+arr[j])===Number(value)){
               str += '<div>'+value+"可以拆分为两个质数"+arr[i]+"与"+arr[j]+"的和"+ '</div>'
           }
       }
    }
    goldbach.innerHTML = str
=======
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
>>>>>>> f52c55bf35acc590bad97638253571a64886912c
}