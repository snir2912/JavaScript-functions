function theLittle() {
    let a1 = parseFloat(document.getElementById('a').value);
    let b1 = parseFloat(document.getElementById('b').value);
    let c1 = parseFloat(document.getElementById('c').value);
    let small = document.getElementById('small')
    if (a1 < b1 && a1 < c1) {
        small.innerHTML = "A is the little one!";
    } else if (b1 < a1 && b1 < c1) {
        small.innerHTML = "B is the little one!";
    } else {
        small.innerHTML = "C is the little one!";
    }
}