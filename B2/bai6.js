function laSoNguyenDuong(so) {
    return Number.isInteger(so) && so > 0;
}


var so = +prompt("Mời nhập số:");
var ketQua = laSoNguyenDuong(so);

console.log("Số " + so + " là số nguyên dương: " + ketQua);