function doiChoHaiSo(a, b) {
    var temp = a;
    a = b;
    b = temp;
    
    return [a, b];
  }
  

  var so1 = 5;
  var so2 = 8;
  
  console.log("Trước khi đổi chỗ: so1 =", so1, "so2 =", so2);
  
  var ketQua = doiChoHaiSo(so1, so2);
  so1 = ketQua[0];
  so2 = ketQua[1];
  
  console.log("Sau khi đổi chỗ: so1 =", so1, "so2 =", so2);