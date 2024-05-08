function laSoNguyenTo(number) {
    if (number < 2) {
      return false;
    }
    
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  // Gọi hàm để kiểm tra số
  var so = 17;
  var ketQua = laSoNguyenTo(so);
  
  console.log("Số", so, "là số nguyên tố:", ketQua);