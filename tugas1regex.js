let result = []

function checkUppercase() {
    let isiHuruf = document.querySelector(".huruf").value;
    regexp = /^[A-Z]/;
    if (regexp.test(isiHuruf)) {
            result.push("Huruf pertama adalah huruf besar")
    } else {
            result.push("Huruf pertama adalah huruf kecil")
    }
    let newResult = ""
    for(i=0; i < result.length; i++) {
        newResult = newResult + result[i] + "<br>"
    }
    document.querySelector(".result").innerHTML = newResult;
    document.querySelector(".huruf").value = '';
}
