document.write("<P>金字塔</p>")
let level = prompt('请设置金字塔的层数')
level = parseFloat(level)&&Number(level)
if (isNaN(level)){
    alert('金字塔的层数是数字')
}
<<<<<<< HEAD
for(let i=1;i<=level;++i){
    let blank = level - i;
    for(let k=0;k<blank;++k){
        document.write('&nbsp;');
    }
    let star = i * 2 - 1
    for(let j=0;j<star;++j){
        document.write('*')
    }
    document.write("<br>")
}

let str = '<table border="1">'
for(let i=1;i<10;++i){
    str += '<tr>'
    for (var j=1;j<=i;++j){
=======
for(let i=1;i<=level;++1){
    let blank = level -i;
    for (let k=0;k<blank;++k){
        document.write('&nbsp');
}
let star = i * 2 - 1
for (let j=0;j<star;++j){
    document.write('*')
}
document.write("<br>")
}
let str = '<table border="1">'
for (let i=1;i<10;++j){
    str += '<tr>'
    for (var j=1;j<=1;++j){
>>>>>>> 78b83336264340bf1c8a3da440a6add2c8f251ba
        str +='<td>' + j + '*' + i + '=' + ( j * j ) + '</td>'
    }
    str += '</tr>'
}
str +='</table>'
<<<<<<< HEAD
document.getElementById('table').innerHTML = str
=======
document.getElementById('table').innerHTML = str

>>>>>>> 78b83336264340bf1c8a3da440a6add2c8f251ba
