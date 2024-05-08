function tinhDienTichHinhTron(banKinh) {
    var dienTich = Math.PI * banKinh ** 2;
    return dienTich;
  }
  
  function tinhChuViHinhTron(banKinh) {
    var chuVi = 2 * Math.PI * banKinh;
    return chuVi;
  }
  
  var banKinh = 5;
  var dienTich = tinhDienTichHinhTron(banKinh);
  var chuVi = tinhChuViHinhTron(banKinh);
  
  console.log("Diện tích hình tròn là: " + dienTich);
  console.log("Chu vi hình tròn là: " + chuVi);