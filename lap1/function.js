//1. hàm không có tham số (parameter) và không có return (giá trị trả về)
function hello() {
    console.log("Hello Greenwich !")
}
hello()
//2. hàm có tham số và không có return
function sum(a,b) {
    console.log(a + b)
}
sum (20,30)
//3. hàm không có tham số nhưng có return
function year() {
    return
}
console.log("Current year is" + year()) // hoặc console.log(`Current year is`, year())
//4. hàm có cả tham số và return
function sayHello (name, age) {
    var output = ("Hello" + name + ". You are" + age + "year old")
    return output
}
function sayHi (name, age) {
    let output = ("Hi" + name + ". You are" + age + "year old")
    return output
}
console.log(sayHello("Minh",40))
console.log(sayHi("Hoang",20))
// var: phạm vi tác dụng là trong toàn bộ file code => global variable
// let: phạm vi tác dụng chỉ trong 1 đoạn code (function) => local variable