function timSoBeNhat(a, b, c) {
    var soBeNhat = a;
  
    if (b < soBeNhat) {
      soBeNhat = b;
    }
  
    if (c < soBeNhat) {
      soBeNhat = c;
    }
  
    return soBeNhat;
  }
  

  var so1 = parseInt(prompt("Nhập số thứ nhất:"));
  var so2 = parseInt(prompt("Nhập số thứ hai:"));
  var so3 = parseInt(prompt("Nhập số thứ ba:"));
  
  var ketQua = timSoBeNhat(so1, so2, so3);
  
  console.log("Số bé nhất là:", ketQua);