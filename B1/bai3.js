function resutl(a, b) {
    a = +prompt("Mời nhập giá trị thứ nhất:");
    b = +prompt("Mời nhập giá trị thứ hai:")
    if (a > b) {
        alert("Done")
    } else if (a <= b) {
        return a + b;
    }
}
console.log(resutl());