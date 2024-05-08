function timCapSoTong10(arr) {
    var capSoTong10 = [];
  
    for (var i = 0; i < arr.length; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === 10) {
          capSoTong10.push([arr[i], arr[j]]);
        }
      }
    }
  
    return capSoTong10;
  }
  

  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  

  var ketQua = timCapSoTong10(arr);
  

  console.log("Các cặp số có tổng bằng 10 là:");
  for (var i = 0; i < ketQua.length; i++) {
    console.log(ketQua[i][0] + " + " + ketQua[i][1] + " = 10");
  }