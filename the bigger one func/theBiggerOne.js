        function theBigger() {
            let a1 = parseFloat(document.getElementById('a').value);
            let b1 = parseFloat(document.getElementById('b').value);
            let c1 = parseFloat(document.getElementById('c').value);
            let big1 = document.getElementById('big');
            if (a1 > b1 && a1 > c1) {
                big1.innerHTML = "A is the bigger one!";
            } else if (b1 > a1 && b1 > c1) {
                big1.innerHTML = "B is the bigger one!";
            } else {
                big1.innerHTML = "C is the bigger one!";
            }
        };