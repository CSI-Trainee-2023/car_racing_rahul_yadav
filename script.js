let t=0;
let l=0;

window.addEventListener("keydown", function (x) {
    if (x.keyCode == 87) {
        // alert("w")
        t=t-3;
    };
    if (x.keyCode == 65) {
        // alert("a")
        l=l-1;
    };
    if (x.keyCode == 83) {
        // alert("s")
        t=t+3;
    };
    if (x.keyCode == 68) {
        // alert("d")
        l=l+1;
    };
    document.getElementById("myCar").style.top=`${t}vh`;
    document.getElementById("myCar").style.left=`${l}vw`;
});
    document.getElementById("start").addEventListener("click", function () {

        document.getElementById("start").style.display = 'none'
        document.getElementById("road").style.animation = 'roadanimation 40s linear infinite'


        setInterval(() => {
            num = Math.floor(Math.random() * (350 - 230 + 1) + 230)
            document.getElementById("enemyCar1").style.left = `${num}px`

        }, 3000)
        setInterval(() => {
            num = Math.floor(Math.random() * (150 - 50 + 1) + 50)
            document.getElementById("enemyCar2").style.left = `${num}px`

        }, 6000)
        setInterval(() => {
            num = Math.floor(Math.random() * (-50 + 140 + 1) - 140)
            document.getElementById("enemyCar3").style.left = `${num}px`

        }, 5000)
        setInterval(() => {
            num = Math.floor(Math.random() * (-220 + 330 + 1) - 330)
            document.getElementById("enemyCar4").style.left = `${num}px`

        }, 4000)


        document.getElementById("enemyCar1").style.animation = 'ecar1 2s linear infinite'
        document.getElementById("enemyCar2").style.animation = 'ecar2 4s linear infinite'
        document.getElementById("enemyCar3").style.animation = 'ecar3 3s linear infinite'
        document.getElementById("enemyCar4").style.animation = 'ecar4 5s linear infinite'
        n=0;
        setInterval(() => {
            document.getElementById("score").innerText=`score : ${n}`
            n=n+1
        },  100);
});