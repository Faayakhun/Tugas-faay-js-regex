let result = []

function checkNomorHp() {
    let isiNomor = document.querySelector(".nohp").value;
    regexp = /^\d{10,12}$/;
    if (regexp.test(isiNomor)) {
            result.push(isiNomor)
    } else {
            result.push("Banyaknya digit harus 10 sampai 12 karakter")
    }
    let newResult = ""
    for(i=0; i < result.length; i++) {
        newResult = newResult + result[i] + "<br>"
    }
    document.querySelector(".result").innerHTML = newResult;
    document.querySelector(".nohp").value = '';
}
