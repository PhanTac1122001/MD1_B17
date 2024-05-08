function tinhGiaiThua(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * tinhGiaiThua(n - 1);
    }
  }

  var soNguyen = 5;
  var giaiThua = tinhGiaiThua(soNguyen);
  
  console.log("Giai thừa của " + soNguyen + " là: " + giaiThua);