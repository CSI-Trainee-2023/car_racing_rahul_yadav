t=0;
l=0;

window.addEventListener("keydown", function (x) {
    if (x.keyCode == 87) {
        // alert("w")
        t=t-3
    }
    if (x.keyCode == 65) {
        // alert("a")
        l=l-1
    }
    if (x.keyCode == 83) {
        // alert("s")
        t=t+3
    }
    if (x.keyCode == 68) {
        // alert("d")
        l=l+1
    }
    this.document.getElementById("myCar").style.top=`${t}vh`
    this.document.getElementById("myCar").style.left=`${l}vw`
});
