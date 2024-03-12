const canvas = document.getElementById('game');
canvas.width = innerWidth;
canvas.height = innerHeight;
const ctx = canvas.getContext('2d');

const car = new Image();
car.src = 'img/skull_copy.gif';

let xCar = 600;
let yCar = 500;

let xObstacle = 300;
let yObstacle = 300;
let obstacleWidth = 100;
let obstacleHeight = 100;

const speed = 5;

const keys = {
  up: false,
  down: false,
  right: false,
  left: false,
};

window.addEventListener('keydown', function (event) {
  switch (event.key) {
    case 'ArrowLeft':
      keys.left = true;
      break;
    case 'ArrowRight':
      keys.right = true;
      break;
    case 'ArrowUp':
      keys.up = true;
      break;
    case 'ArrowDown':
      keys.down = true;
  }
});

window.addEventListener('keyup', function (event) {
  switch (event.key) {
    case 'ArrowLeft':
      keys.left = false;
      break;
    case 'ArrowRight':
      keys.right = false;
      break;
    case 'ArrowUp':
      keys.up = false;
      break;
    case 'ArrowDown':
      keys.down = false;
  }
});

function update() {
  if (keys.left) {
    xCar -= speed;
  }
  if (keys.right) {
    xCar += speed;
  }
  if (keys.up) {
    yCar -= speed;
  }
  if (keys.down) {
    yCar += speed;
  }

  if (xCar < 0) {
    xCar = 0;
  }
  if (yCar < 0) {
    yCar = 0;
  }

  if (xCar + car.width > canvas.width) {
    xCar = canvas.width - car.width;
  }
  if (yCar + car.height > canvas.height) {
    yCar = canvas.height - car.height;
  }

  if (xCar < xObstacle + obstacleWidth && yCar > yObstacle) {
    xCar = xObstacle + obstacleWidth;
  }

  // if (xCar > xObstacle) {
  //   xCar = xObstacle;
  // }

  // if (xCar > xObstacle) {
  //   xCar = xObstacle;
  //   console.log('bug');
  // }
  console.log('je reset');
  // if (
  //   yCar <= yObstacle + obstacleHeight &&
  //   xCar <= xObstacle + obstacleWidth &&
  //   xCar > xObstacle &&
  //   yCar > yObstacle
  // ) {
  //   yCar = yObstacle + obstacleHeight;
  //   console.log('je  cogne 2');
  // }
  // console.log('xCar :', xCar);
  // console.log('xObstable :', xObstacle);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(car, xCar, yCar);
  ctx.fillRect(xObstacle, yObstacle, 100, 100);
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

car.onload = () => {
  gameLoop();
};
