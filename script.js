function inputdata(){
    var validasiHuruf = /^[a-zA-Z ]+$/;
    var n=document.forms['datapribadi']['nama'].value;
    var a=document.forms['datapribadi']['alamat'].value;
    var sa=document.forms['datapribadi']['asal'].value;
    var st=document.forms['datapribadi']['tujuan'].value;
    var tb=document.forms['datapribadi']['tanggal'].value;       

    //validasi huruf
    if (nama.value.match(validasiHuruf)) {
        alert("Nama Anda adalah " + nama.value);
    } else {
        alert("Masukkan nama Anda!\nFormat wajib huruf!");
        nama.value="";
        nama.focus();
        return false;
    }

    //validasi tidak boleh
	if (n != "" && a !="" && sa !="" && st !="" && tb !="") {
		return true;
	}else{
		alert('Anda harus mengisi data dengan lengkap !');
	}

    var tabel = document.getElementById("databel");
    var baris = tabel.insertRow(1);
    var kol1 = baris.insertCell(0);
    var kol2 = baris.insertCell(1);
    var kol3 = baris.insertCell(2);
    var kol4 = baris.insertCell(3);
    var kol5 = baris.insertCell(4);

    kol1.innerHTML = n;
    kol2.innerHTML = a;
    kol3.innerHTML = sa;
    kol4.innerHTML = st;
    kol5.innerHTML = tb;
    }