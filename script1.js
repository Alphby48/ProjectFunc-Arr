var penumpang = ["sidik", undefined, "jabrik"];
var tambah = function (nama, penumpang) {
  if (penumpang.length == 0) {
    penumpang.push(nama);
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined) {
        penumpang[i] = nama;
        return penumpang;
      } else if (penumpang[i] == nama) {
        console.log("Penumpang " + nama + " Sudah Didalam angkot");
        return penumpang;
      } else if (i == penumpang.length - 1) {
        penumpang.push(nama);
        return penumpang;
      }
    }
  }
};
