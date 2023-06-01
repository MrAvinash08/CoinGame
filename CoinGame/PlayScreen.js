function playGame() {
  let root = document.getElementById("root");
  root.innerHTML = "";
  let container = document.createElement("div");
  container.style.width = "100vw";
  container.style.height = "100vh";
  container.style.position = "relative";
  let audio = new Audio("./coin.wavv.mp3");
  let count = 0;
  let score = document.createElement("h1");

  score.innerHTML = "Score:0";
  score.style.height = "10px";
  score.style.top + "10px";
  score.style.position = "absolute";

  container.appendChild(score);

  setInterval(function () {
    let coin = document.createElement("img");
    coin.src = "./coin.jpg";
    alive = true;
    coin.style.width = "50px";
    coin.style.height = "50px";
    coin.style.position = "absolute";
    coin.style.left = Math.random() * 200 + "vh";
    coin.style.top = Math.random() * 40 + "vw";

    container.appendChild(coin);

    coin.addEventListener("mouseover", function () {
      count += 10;
      score.innerHTML = "Score:" + count;
      container.removeChild(coin);
      alive = false;
      let audio = new Audio("./coin.wavv.mp3");
      audio.play();
    });

    let randomTime = Math.random() * 3000;
    setTimeout(function () {
      if (alive) {
        container.removeChild(coin);
      }
    }, randomTime);
  }, 100);

  setInterval(function () {
    let bomb = document.createElement("img");
    bomb.src = "./bomb.webp";
    alive = true;
    bomb.style.width = "50px";
    bomb.style.height = "50px";
    bomb.style.position = "absolute";
    bomb.style.left = Math.random() * 200 + "vh";
    bomb.style.top = Math.random() * 40 + "vw";

    container.appendChild(bomb);

    bomb.addEventListener("mouseover", function () {
      //   count -= 10;
      //   score.innerHTML = "Score:" - count;
      //   container.removeChild(bomb);
      //   alive = false;
      let audio = new Audio("./bomb.mp3");
      audio.play();
      gameOver(count);
    });

    let randomTime = Math.random() * 3000;
    setTimeout(function () {
      if (alive) {
        container.removeChild(bomb);
      }
    }, randomTime);
  }, 100);
  root.appendChild(container);
}
