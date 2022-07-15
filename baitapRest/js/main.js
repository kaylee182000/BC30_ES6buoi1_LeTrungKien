let tinhDiem = (...rest) => {
  let sum = 0;
  let count = 0;
  for(let diem of rest){
    sum += diem;
    count++
  }
  return (sum / count).toFixed(2)
}
document.getElementById("btnKhoi1").onclick = function() {
  diemToan = +document.getElementById("inpToan").value;
  diemLy = +document.getElementById("inpLy").value;
  diemHoa = +document.getElementById("inpHoa").value;

  sum = tinhDiem(diemHoa,diemToan,diemLy)
  document.getElementById("tbKhoi1").innerHTML = sum;
};
document.getElementById("btnKhoi2").onclick = function() {
  diemVan = +document.getElementById("inpVan").value;
  diemSu = +document.getElementById("inpSu").value;
  diemDia = +document.getElementById("inpDia").value;
  diemEnglish = +document.getElementById("inpEnglish").value;

  sum = tinhDiem(diemDia,diemEnglish,diemSu,diemVan)
  document.getElementById("tbKhoi2").innerHTML = sum;
};