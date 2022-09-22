//for loop
//in ra từ 1 đến 10
for (var i = 1; i <= 10; i++) {
    console.log(i)
}
//in ra dãy số từ 1 đến 10 nhưng dừng ở số 5
for (var i = 1; i <= 10; i++) {
    console.log(i)
    if (i == 5){
        break //tương đương với "stop"
    }
}
//in ra dãy số từ 1 đến 10 nhưng bỏ qua 5
for (var i = 1; i <= 10; i++) {
    if (i == 5){
        continue //tương đương với "skip"
    }
    console.log(i)
}
//do-while: chạy code trong "do" ít nhất 1 lần mới check điều kiện trong while
let a = 1
do {
    console.log(a)
    a++
}while (a <= 10)
//while: chỉ chạy code trong "while" nếu thỏa mãn điều kiện 
let b = 1
while (b <= 10) {
    console.log(b)
    b++
}

var x = 10
//post-fix operator
var y = x++ // x = x + 1
// x++: gán giá trị của x cho y rồi mới tăng x lên 1 đơn vị
var z = ++x // x = x + 1
// ++x: tăng x lên 1 đơn vị rồi mới gán giá trị của x cho z
console.log ("x = " + x)
console.log ("y = " + y)
console.log ("z = " + z)