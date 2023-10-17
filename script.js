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
        document.getElementById("startSound").play();
        document.getElementById("start").style.display = 'none'
        document.getElementById("road").style.animation = 'roadanimation 40s linear infinite'


        setInterval(() => {
            num = Math.floor(Math.random() * (320 - 220 + 1) + 220)
            document.getElementById("enemyCar1").style.left = `${num}px`

        }, 4000)
        setInterval(() => {
            num = Math.floor(Math.random() * (170 - 55 + 1) + 55)
            document.getElementById("enemyCar2").style.left = `${num}px`

        }, 2000)
        setInterval(() => {
            num = Math.floor(Math.random() * (-50 +150 + 1) - 150)
            document.getElementById("enemyCar3").style.left = `${num}px`

        }, 3000)
        setInterval(() => {
            num = Math.floor(Math.random() * (-210 + 295 + 1) - 295)
            document.getElementById("enemyCar4").style.left = `${num}px`

        }, 5000)


        document.getElementById("enemyCar1").style.animation = 'ecar1 4s linear infinite'
        document.getElementById("enemyCar2").style.animation = 'ecar2 2s linear infinite'
        document.getElementById("enemyCar3").style.animation = 'ecar3 3s linear infinite'
        document.getElementById("enemyCar4").style.animation = 'ecar4 5s linear infinite'



        n = 0
        setInterval(() => {

            document.getElementById("score").innerText = `Score : ${n}`
            n = n + 1



            var ecar1_left = Math.abs(document.getElementById("enemyCarImg1").getBoundingClientRect().left);
            var ecar1_right = Math.abs(document.getElementById("enemyCarImg1").getBoundingClientRect().right);
            var ecar1_top = Math.abs(document.getElementById("enemyCarImg1").getBoundingClientRect().top);
            var ecar1_bottom = Math.abs(document.getElementById("enemyCarImg1").getBoundingClientRect().bottom);

            var ecar2_left = Math.abs(document.getElementById("enemyCarImg2").getBoundingClientRect().left);
            var ecar2_right = Math.abs(document.getElementById("enemyCarImg2").getBoundingClientRect().right);
            var ecar2_top = Math.abs(document.getElementById("enemyCarImg2").getBoundingClientRect().top);
            var ecar2_bottom = Math.abs(document.getElementById("enemyCarImg2").getBoundingClientRect().bottom);

            var ecar3_left = Math.abs(document.getElementById("enemyCarImg3").getBoundingClientRect().left);
            var ecar3_right = Math.abs(document.getElementById("enemyCarImg3").getBoundingClientRect().right);
            var ecar3_top = Math.abs(document.getElementById("enemyCarImg3").getBoundingClientRect().top);
            var ecar3_bottom = Math.abs(document.getElementById("enemyCarImg3").getBoundingClientRect().bottom);

            var ecar4_left = Math.abs(document.getElementById("enemyCarImg4").getBoundingClientRect().left);
            var ecar4_right = Math.abs(document.getElementById("enemyCarImg4").getBoundingClientRect().right);
            var ecar4_top = Math.abs(document.getElementById("enemyCarImg4").getBoundingClientRect().top);
            var ecar4_bottom = Math.abs(document.getElementById("enemyCarImg4").getBoundingClientRect().bottom);

            var mycar_left = Math.abs(document.getElementById("myCarImg1").getBoundingClientRect().left);
            var mycar_right = Math.abs(document.getElementById("myCarImg1").getBoundingClientRect().right);
            var mycar_top = Math.abs(document.getElementById("myCarImg1").getBoundingClientRect().top);
            var mycar_bottom = Math.abs(document.getElementById("myCarImg1").getBoundingClientRect().bottom);

            if (mycar_left < 275 || mycar_right > 950 || mycar_top < 20 || mycar_bottom > 690) {
                document.getElementById("sideCollisionSound").play();
                setTimeout(() => {
                    alert(`GAME OVER!`)
                })
                location.reload()

            }
            
            if (((ecar1_left < mycar_left && mycar_left < ecar1_right) || (ecar1_left < mycar_right && mycar_right < ecar1_right)) && ((ecar1_top < mycar_top && mycar_top < ecar1_bottom) || (ecar1_top < mycar_bottom && mycar_bottom < ecar1_bottom))) {
                document.getElementById("outOfRoadSound").play();
                setTimeout(() => {
                    alert(`GAME OVER!`)
                })
                location.reload()

            }
            if (((ecar2_left < mycar_left && mycar_left < ecar2_right) || (ecar2_left < mycar_right && mycar_right < ecar2_right)) && ((ecar2_top < mycar_top && mycar_top < ecar2_bottom) || (ecar2_top < mycar_bottom && mycar_bottom < ecar2_bottom))) {
                document.getElementById("outOfRoadSound").play();
                setTimeout(() => {
                    alert(`GAME OVER!`)
                })
                location.reload()

            }
            if (((ecar3_left < mycar_left && mycar_left < ecar3_right) || (ecar3_left < mycar_right && mycar_right < ecar3_right)) && ((ecar3_top < mycar_top && mycar_top < ecar3_bottom) || (ecar3_top < mycar_bottom && mycar_bottom < ecar3_bottom))) {
                document.getElementById("outOfRoadSound").play();
                setTimeout(() => {
                    alert(`GAME OVER!`)
                })
                location.reload()

            }
            if (((ecar4_left < mycar_left && mycar_left < ecar4_right) || (ecar4_left < mycar_right && mycar_right < ecar4_right)) && ((ecar4_top < mycar_top && mycar_top < ecar4_bottom) || (ecar4_top < mycar_bottom && mycar_bottom < ecar4_bottom))) {
                document.getElementById("outOfRoadSound").play();
                setTimeout(() => {
                    alert(`GAME OVER!`)
                })
                location.reload()

            }


        }, 100)
});