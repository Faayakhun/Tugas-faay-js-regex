let result = []

function cariYangSama () {
    let isiKata = document.querySelector(".cari").value
    regexp = /Bagamaina cara memulai usaha bisnis/;
    regexp1 = /Bootcamp impact byte/;
    regexp2 = /Status covid hari ini/;
    if (regexp.test(isiKata)) {
            result.push(isiKata)
    } if (regexp1.test(isiKata)) {
            result.push(isiKata)
    } if (regexp2.test(isiKata)) {
            result.push(isiKata)
    } 
    let newResult = ""
    for(i=0; i < result.length; i++) {
        newResult = newResult + result[i] + "<br>"
    }
    document.querySelector(".result").innerHTML = newResult;
    document.querySelector(".cari").value = '';
}