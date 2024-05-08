function timSoNhoNhat(a, b, c) {
    var soNhoNhat = a;
    
    if (b < soNhoNhat) {
      soNhoNhat = b;
    }
    
    if (c < soNhoNhat) {
      soNhoNhat = c;
    }
    
    return soNhoNhat;
  }
  

  var soNhoNhat = timSoNhoNhat(5, 2, 7);
  
  console.log("Số nguyên nhỏ nhất là: " + soNhoNhat);