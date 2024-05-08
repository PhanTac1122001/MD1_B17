function daoNguocMang(arr) {
    var newArr = [];
    
    for (var i = arr.length - 1; i >= 0; i--) {
      newArr.push(arr[i]);
    }
    
    return newArr;
  }
  

  var mang = [1, 2, 3, 4, 5];
  
  console.log("Mảng gốc:", mang);
  
  var mangDaoNguoc = daoNguocMang(mang);
  
  console.log("Mảng đảo ngược:", mangDaoNguoc);