function kiemTraTanSuatXuatHien(chuoi) {
    var tanSuat = {};
  
    
    for (var i = 0; i < chuoi.length; i++) {
      var kyTu = chuoi[i];
      if (tanSuat[kyTu] === undefined) {
        tanSuat[kyTu] = 1;
      } else {
        tanSuat[kyTu]++;
      }
    }
  
    
    for (var kyTu in tanSuat) {
      console.log("Ký tự", kyTu, "xuất hiện", tanSuat[kyTu], "lần");
    }
  }
  
  
  var chuoi = prompt("Nhập chuỗi kí tự:");
  kiemTraTanSuatXuatHien(chuoi);