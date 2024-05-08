
function addNumbers() {
    let firstNum = 4;
    let secondNum = 8;
    result = firstNum + secondNum;
    return result;
}
result = 0;
console.log("Giá trị của result trước khi gọi hàm: " + result);
result = addNumbers();
console.log("Giá trị của result sau khi gọi hàm: " + result);
