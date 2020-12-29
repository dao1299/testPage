var string = localStorage.getItem("NameUser") + 'listsp';
var listSP=[];
if (localStorage.getItem(string)!=null){
    listSP=JSON.parse(localStorage.getItem(string))
}
function addSP(tenSP,soLuong,giaSP){
    var sp={
        "TenSP":tenSP,
        "SoLuongSP":soLuong,
        "GiaSP":giaSP
    };
    listSP.push(sp);
    localStorage.setItem(string,JSON.stringify(listSP));
    alert("Thêm giỏ hàng thành công")
}
function changeTable(){
    var tongTien=0;
    var listtSP=JSON.parse(localStorage.getItem(string));
    var table = document.getElementById("table");
    for (i in listtSP){
        var row = table.insertRow(-1);
        var cell1=row.insertCell(0);
        var cell2=row.insertCell(1);
        var cell3=row.insertCell(2);
        var cell4=row.insertCell(3);
        cell1.innerText=listtSP[i].TenSP;
        cell2.innerText=listtSP[i].SoLuongSP;
        cell3.innerText=listtSP[i].GiaSP;
        cell4.innerHTML=' <img id="cancerSP" onclick="deleteSP()" src=img/cancel.png style="width:30px">';
        tongTien+=Number.parseInt(listtSP[i].SoLuongSP)*Number.parseInt(listtSP[i].GiaSP);
    }
    document.getElementById("tinhtien").innerHTML=tongTien;   
}
function confirm(){
    var hoTen = document.getElementById("hoTenKhachHang");
    var sdt = document.getElementById("sdt");
    var diaChi = document.getElementById("diaChiGiaoHang");
    if (hoTen.value==="" || sdt.value==="" || diaChi.value ===""){
        alert("Bạn phải nhập đủ thông tin! ");
    }
    else{
        alert("Đặt hàng thành công!")
    }
}
function deleteSP(){
    
}