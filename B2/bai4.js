function laKyTuSo(kyTu) {
    return !isNaN(parseFloat(kyTu)) && isFinite(kyTu);
  }
  

  var kyTu = '7';
  var ketQua = laKyTuSo(kyTu);
  
  console.log("Ký tự " + kyTu + " là số: " + ketQua);