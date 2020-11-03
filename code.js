var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["af55c0cd-7781-47df-b00d-0fa9cd2e908c","a10827ae-bf7e-459b-be24-2063517ad9d5","89076ad2-17ed-4cc2-a6b0-a2f2c7647f8b","948032ca-676c-4ae7-b0c8-fb7ac37bec7c","d44d015c-0f5a-42d6-a705-13c534991470","62b639e0-262b-4def-aeae-9b21305fdd2e","27a6a3ea-51bb-455d-9790-dd4500e68cef","53186617-b397-4792-b0ee-a61374274332","82cd349d-0a71-49f3-9b66-f2ee881ae8d3","3c99ad97-d7bb-4f1e-b8a0-7c6154dd7bb7","a9fbe12f-d104-4696-86e6-48f6cc4a55dd","dc7efe7d-89e9-4c27-aa1e-07265e0d4b29","a7dac581-97e5-4de9-b678-6e530e67abba"],"propsByKey":{"af55c0cd-7781-47df-b00d-0fa9cd2e908c":{"name":"trex","sourceUrl":null,"frameSize":{"x":524,"y":94},"frameCount":3,"looping":true,"frameDelay":4,"version":"MVFHYMOy4JzExRz4zKO0VOF9grVQjbFZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":524,"y":282},"rootRelativePath":"assets/af55c0cd-7781-47df-b00d-0fa9cd2e908c.png"},"a10827ae-bf7e-459b-be24-2063517ad9d5":{"name":"ground1","sourceUrl":"assets/v3/animations/_zVr-Ht4cJETV573GIhR_widaY8yD24II_c3xbDv5s4/a10827ae-bf7e-459b-be24-2063517ad9d5.png","frameSize":{"x":1596,"y":26},"frameCount":1,"looping":true,"frameDelay":4,"version":"OaUdhmLuMHV3VlxBbi_ZsEbzZ9D1IQLO","loadedFromSource":true,"saved":true,"sourceSize":{"x":1596,"y":26},"rootRelativePath":"assets/v3/animations/_zVr-Ht4cJETV573GIhR_widaY8yD24II_c3xbDv5s4/a10827ae-bf7e-459b-be24-2063517ad9d5.png"},"89076ad2-17ed-4cc2-a6b0-a2f2c7647f8b":{"name":"ground2","sourceUrl":"assets/v3/animations/_zVr-Ht4cJETV573GIhR_widaY8yD24II_c3xbDv5s4/89076ad2-17ed-4cc2-a6b0-a2f2c7647f8b.png","frameSize":{"x":2377,"y":12},"frameCount":1,"looping":true,"frameDelay":4,"version":"v3yzskRSxesNmgD1SEuGGXyjJYa8UOim","loadedFromSource":true,"saved":true,"sourceSize":{"x":2377,"y":12},"rootRelativePath":"assets/v3/animations/_zVr-Ht4cJETV573GIhR_widaY8yD24II_c3xbDv5s4/89076ad2-17ed-4cc2-a6b0-a2f2c7647f8b.png"},"948032ca-676c-4ae7-b0c8-fb7ac37bec7c":{"name":"cloud","sourceUrl":"assets/v3/animations/RMvIP5z9gbC5QVTMhtnVaJrbAK7UBB5ceCkXG470Jjc/948032ca-676c-4ae7-b0c8-fb7ac37bec7c.png","frameSize":{"x":92,"y":27},"frameCount":1,"looping":true,"frameDelay":4,"version":"_Ef3yu0QEOWvYVBocbi5l8iGkyNO4pP2","loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":27},"rootRelativePath":"assets/v3/animations/RMvIP5z9gbC5QVTMhtnVaJrbAK7UBB5ceCkXG470Jjc/948032ca-676c-4ae7-b0c8-fb7ac37bec7c.png"},"d44d015c-0f5a-42d6-a705-13c534991470":{"name":"obstacle1","sourceUrl":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/d44d015c-0f5a-42d6-a705-13c534991470.png","frameSize":{"x":34,"y":70},"frameCount":1,"looping":true,"frameDelay":4,"version":"iiFIWAs7RSo7CzR6QMjWV0zU5ERSOaDi","loadedFromSource":true,"saved":true,"sourceSize":{"x":34,"y":70},"rootRelativePath":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/d44d015c-0f5a-42d6-a705-13c534991470.png"},"62b639e0-262b-4def-aeae-9b21305fdd2e":{"name":"obstacle2","sourceUrl":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/62b639e0-262b-4def-aeae-9b21305fdd2e.png","frameSize":{"x":69,"y":70},"frameCount":1,"looping":true,"frameDelay":4,"version":"vpOpafEougMMg3T2k3fYgfK9pKo6JTqz","loadedFromSource":true,"saved":true,"sourceSize":{"x":69,"y":70},"rootRelativePath":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/62b639e0-262b-4def-aeae-9b21305fdd2e.png"},"27a6a3ea-51bb-455d-9790-dd4500e68cef":{"name":"obstacle3","sourceUrl":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/27a6a3ea-51bb-455d-9790-dd4500e68cef.png","frameSize":{"x":102,"y":70},"frameCount":1,"looping":true,"frameDelay":4,"version":"nHVzfC47rsnGM5lKO4zWJwMgusRZU.Fe","loadedFromSource":true,"saved":true,"sourceSize":{"x":102,"y":70},"rootRelativePath":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/27a6a3ea-51bb-455d-9790-dd4500e68cef.png"},"53186617-b397-4792-b0ee-a61374274332":{"name":"obstacle4","sourceUrl":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/53186617-b397-4792-b0ee-a61374274332.png","frameSize":{"x":50,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"JLa2cC8ebzksYPvuuZXDU0FHNZdeApgS","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":100},"rootRelativePath":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/53186617-b397-4792-b0ee-a61374274332.png"},"82cd349d-0a71-49f3-9b66-f2ee881ae8d3":{"name":"obstacle5","sourceUrl":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/82cd349d-0a71-49f3-9b66-f2ee881ae8d3.png","frameSize":{"x":103,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"1RVj2CABQ3hwBLYDxUnKEDq84kHuetRQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":103,"y":100},"rootRelativePath":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/82cd349d-0a71-49f3-9b66-f2ee881ae8d3.png"},"3c99ad97-d7bb-4f1e-b8a0-7c6154dd7bb7":{"name":"obstacle6","sourceUrl":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/3c99ad97-d7bb-4f1e-b8a0-7c6154dd7bb7.png","frameSize":{"x":150,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"Loed_Ez0v7HKJFdUPsrE66t3m1CIhAN7","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":100},"rootRelativePath":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/3c99ad97-d7bb-4f1e-b8a0-7c6154dd7bb7.png"},"a9fbe12f-d104-4696-86e6-48f6cc4a55dd":{"name":"trex_collided","sourceUrl":"assets/v3/animations/JI0MyHYDGYHup_lac_GM8hY6BwPSKo7AE9BueVVsV48/a9fbe12f-d104-4696-86e6-48f6cc4a55dd.png","frameSize":{"x":88,"y":94},"frameCount":1,"looping":true,"frameDelay":4,"version":"fliYtr2o28q88gc4sxNPnbRkeLX_m.Hg","loadedFromSource":true,"saved":true,"sourceSize":{"x":88,"y":94},"rootRelativePath":"assets/v3/animations/JI0MyHYDGYHup_lac_GM8hY6BwPSKo7AE9BueVVsV48/a9fbe12f-d104-4696-86e6-48f6cc4a55dd.png"},"dc7efe7d-89e9-4c27-aa1e-07265e0d4b29":{"name":"gameOver","sourceUrl":"assets/v3/animations/JI0MyHYDGYHup_lac_GM8hY6BwPSKo7AE9BueVVsV48/dc7efe7d-89e9-4c27-aa1e-07265e0d4b29.png","frameSize":{"x":381,"y":21},"frameCount":1,"looping":true,"frameDelay":4,"version":"NDbVzPU9WHhAaqu_Gbuk0D.PICwjsh77","loadedFromSource":true,"saved":true,"sourceSize":{"x":381,"y":21},"rootRelativePath":"assets/v3/animations/JI0MyHYDGYHup_lac_GM8hY6BwPSKo7AE9BueVVsV48/dc7efe7d-89e9-4c27-aa1e-07265e0d4b29.png"},"a7dac581-97e5-4de9-b678-6e530e67abba":{"name":"restart","sourceUrl":"assets/v3/animations/JI0MyHYDGYHup_lac_GM8hY6BwPSKo7AE9BueVVsV48/a7dac581-97e5-4de9-b678-6e530e67abba.png","frameSize":{"x":75,"y":64},"frameCount":1,"looping":true,"frameDelay":4,"version":"l55QmdPXX8_C12WuS6QPR3W6qzGxE1pd","loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":64},"rootRelativePath":"assets/v3/animations/JI0MyHYDGYHup_lac_GM8hY6BwPSKo7AE9BueVVsV48/a7dac581-97e5-4de9-b678-6e530e67abba.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//gamestate 
var gamestate = "play";

//create a trex sprite
var trex = createSprite(200,380,20,50);
trex.setAnimation("trex");
trex.setCollider("circle", 0,0, 40);

//scale and position the trex
trex.scale = 0.5;
trex.x = 50;

//create a ground sprite
var ground = createSprite(200,380,400,20);
ground.setAnimation("ground2");
ground.x = 400;

//create ground1 sprite
var g1 = createSprite(400,400);
g1.setAnimation("ground1");
g1.visible = false;

//create Clouds
var r = randomNumber(50,350);
var c1 = createSprite(r,randomNumber(20,350), 100, 50);
r += 100;
if(r > 400){
  r -= 400;
}
var c2 = createSprite(r,randomNumber(20,350), 100, 50);
r += 100;
if(r > 400){
  r -= 400;
}
var c3 = createSprite(r,randomNumber(20,350), 100, 50);

//gameover button
var gameover = createSprite(200,250);
gameover.setAnimation("restart");

//gameover text
var overt = createSprite(200,230);
overt.setAnimation("gameOver");


c1.setAnimation("cloud");
c2.setAnimation("cloud");
c3.setAnimation("cloud");
c1.depth = trex.depth - 1;
c2.depth = c1.depth;
c3.depth = c1.depth;

c1.scale = 0.3;
c2.scale = 0.3;
c3.scale = 0.3;

var oG = createGroup();

//score
var score = 0;
var scoret = text("score: " + score, 234, 59);
textFont("Times New Roman");
textSize(30);



function draw() {
  
  
if(gamestate == "play"){
  
  gameover.visible = false;
  overt.visible = false;
  
  
//set background to white
background("white");

console.log(trex.y);
ground.velocityX = -7 ;

c1.velocityX = -7;
c2.velocityX = -7;
c3.velocityX = -7;


if (ground.x < 0){
  ground.x = 400;
}

if (c1.x < -20){
  c1.x = 400;
  c1.y = randomNumber(350,20);
}

if (c2.x < -20){
  c2.x = 400;
  c2.y = randomNumber(350,20);
}

if (c3.x < -20){
  c3.x = 400;
  c3.y = randomNumber(350,20);
}

//ob

if(World.frameCount % 60 === 0){
  var o = createSprite(500,364);
  
  o.setAnimation("obstacle" +randomNumber(1,6));
  o.scale = 0.5;
  o.velocityX = -7;
  oG.add(o);
  o.lifetime = 200;
}

if(oG.isTouching(trex)){
  gamestate = "over";
}

score++;
scoret = text("score: " + score, 234,60);

//jump when the space key is pressed
if(keyDown("space")&& (trex.y > 350)){
  trex.velocityY = -13;
}

//add gravity
trex.velocityY = trex.velocityY + 0.8;

//stop trex from falling down
trex.collide(g1);

}



//Game over state
else if(gamestate == "over"){
  
  background("white");
  gameover.visible= true;
  overt.visible = false;
  trex.velocityX = 0;
  oG.setVelocityXEach(0);
  ground.velocityX = 0;
  oG.setLifetimeEach(-1);
  c1.velocityX = 0;
  c2.velocityX = 0;
  c3.velocityX = 0;
  score= 0;
  
  trex.collide(oG);
  trex.collide(g1);
  trex.velocityY = trex.velocityY + 0.8;

  if(mousePressedOver(gameover)){
    oG.destroyEach();
    oG = createGroup();
    gamestate = "play";
  }
  

}


drawSprites();

  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
