

let l=0;
let highestScore = localStorage.getItem("highestScore") || 0;
let gameRunning = true;
function restartGame() {
    location.reload();
}

window.addEventListener("keydown", function (x) {
    if (x.keyCode == 65) {
        l=l-0.4;
    };
    if (x.keyCode == 68) {
        l=l+0.4;
    };
    document.getElementById("myCar").style.left=`${l}vw`;
});
    document.getElementById("start").addEventListener("click", function () {
        document.getElementById("startSound").play();
        document.getElementById("start").style.display = 'none'
        let countdown = 3;
        const countdownElement = document.createElement("div");
        countdownElement.style.position = "fixed";
        countdownElement.style.top = "50%";
        countdownElement.style.left = "50%";
        countdownElement.style.color="darkgreen";
        countdownElement.style.transform = "translate(-50%, -50%)";
        countdownElement.style.fontSize = "8em";
        document.body.appendChild(countdownElement);
        
        const countdownInterval = setInterval(() => {
            if (countdown > 0) {
                countdownElement.innerText = countdown;
                countdown--;
            } 
            else if(countdown==0){
                countdownElement.innerText = "GO!";
                countdown--;
            }
            else {
                document.body.removeChild(countdownElement);    
        setTimeout(() => {
        
        document.getElementById("road").style.animation = 'roadanimation 40s linear infinite'

        // setInterval(() => {
        //     num = Math.floor(Math.random() * (1060 +265 + 1) -265)
        //     document.getElementById("speedBooster").style.left = `${num}px`

        // }, 10000)
        setInterval(() => {
            num = Math.floor(Math.random() * (320 - 220 + 1) + 220)
            document.getElementById("enemyCar1").style.left = `${num}px`

        }, 4000)
        setInterval(() => {
            num = Math.floor(Math.random() * (170 - 55 + 1) + 55)
            document.getElementById("enemyCar2").style.left = `${num}px`

        }, 2500)
        setInterval(() => {
            num = Math.floor(Math.random() * (-50 +150 + 1) - 150)
            document.getElementById("enemyCar3").style.left = `${num}px`

        }, 3000)
        setInterval(() => {
            num = Math.floor(Math.random() * (-210 + 295 + 1) - 295)
            document.getElementById("enemyCar4").style.left = `${num}px`

        }, 5000)


        document.getElementById("enemyCar1").style.animation = 'ecar1 4s linear infinite'
        document.getElementById("enemyCar2").style.animation = 'ecar2 2.5s linear infinite'
        document.getElementById("enemyCar3").style.animation = 'ecar3 3s linear infinite'
        document.getElementById("enemyCar4").style.animation = 'ecar4 5s linear infinite'
        // document.getElementById("speedBooster").style.animation = 'sbooster 10s linear infinite'



        n = 0
        setInterval(() => {
            if (gameRunning) {
            document.getElementById("score").innerText = `Score : ${n}`
            n = n + 1
            document.getElementById("highScore").innerText = `Highest Score : ${highestScore}`
            if (n > highestScore) {
                highestScore = n;
                localStorage.setItem("highestScore", highestScore);
                document.getElementById("highScore").innerText = `Highest Score : ${n}`
            }
        }
            // var sbooster_left = Math.abs(document.getElementById("speedBooster1").getBoundingClientRect().left);
            // var sbooster_right = Math.abs(document.getElementById("speedBooster1").getBoundingClientRect().right);
            // var sbooster_top = Math.abs(document.getElementById("speedBooster1").getBoundingClientRect().top);
            // var sbooster_bottom = Math.abs(document.getElementById("speedBooster1").getBoundingClientRect().bottom);
        
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

            function stopGame() {
                gameRunning = false;
                document.getElementById("road").style.animationPlayState = 'paused';
                document.getElementById("sideCollisionSound").pause();
            }
            
            function startGame() {
                gameRunning = true;
                document.getElementById("road").style.animationPlayState = 'running';
            }

            // if(((sbooster_left < mycar_left && mycar_left < sbooster_right) || (sbooster_left < mycar_right && mycar_right < sbooster_right)) && ((sbooster_top < mycar_top && mycar_top < sbooster_bottom) || (sbooster_top < mycar_bottom && mycar_bottom <sbooster_bottom)))
            // {
            //     setInterval(() => {
            //         document.getElementById("road").style.animation = 'roadanimation 20s linear infinite'
        
            //     }, 4000)
            // }



            if (mycar_left < 265 || mycar_right > 1060 || mycar_top < 20 || mycar_bottom > 690 ||
                ((ecar1_left < mycar_left && mycar_left < ecar1_right) || (ecar1_left < mycar_right && mycar_right < ecar1_right)) && ((ecar1_top < mycar_top && mycar_top < ecar1_bottom) || (ecar1_top < mycar_bottom && mycar_bottom < ecar1_bottom)) ||
                ((ecar2_left < mycar_left && mycar_left < ecar2_right) || (ecar2_left < mycar_right && mycar_right < ecar2_right)) && ((ecar2_top < mycar_top && mycar_top < ecar2_bottom) || (ecar2_top < mycar_bottom && mycar_bottom < ecar2_bottom)) ||
                ((ecar3_left < mycar_left && mycar_left < ecar3_right) || (ecar3_left < mycar_right && mycar_right < ecar3_right)) && ((ecar3_top < mycar_top && mycar_top < ecar3_bottom) || (ecar3_top < mycar_bottom && mycar_bottom < ecar3_bottom)) ||
                ((ecar4_left < mycar_left && mycar_left < ecar4_right) || (ecar4_left < mycar_right && mycar_right < ecar4_right)) && ((ecar4_top < mycar_top && mycar_top < ecar4_bottom) || (ecar4_top < mycar_bottom && mycar_bottom < ecar4_bottom))
            ) {
                document.getElementById("startSound").pause();
                document.getElementById("sideCollisionSound").play();
                gameRunning = false;
                
                stopGame();
                document.getElementById("endPage").style.display = 'flex';
                document.getElementById("endScore").innerText = ` Your Score: ${n}`;
                document.getElementById("highestScore").innerText = `Highest Score: ${highestScore}`;
            
                
            }
            document.getElementById("restartButton").addEventListener("click", function() {
                startGame();
                document.getElementById("endPage").style.display = 'none';
                // restartGame();
            });


        }, 100)
    }, 30); 
    clearInterval(countdownInterval);
}
}, 1500);
});
