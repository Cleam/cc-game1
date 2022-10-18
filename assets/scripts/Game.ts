// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Player from "./Player";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Game extends cc.Component {
  // 这个属性引用了星星预制资源
  @property({
    type: cc.Prefab,
  })
  starPrefab: cc.Prefab = null;

  //   星星产生后消失时间的随机范围
  @property()
  maxStarDuration = 0;
  @property
  minStarDuration = 0;

  //   地面节点，用于确定星星生成的高度
  @property({
    type: cc.Node,
    displayName: "地面节点",
  })
  ground: cc.Node = null;

  //   Player节点，用于获取主角弹跳的高度，和控制主角行动的开关
  @property({
    type: Player,
    displayName: "Player节点",
  })
  player: Player = null;

  @property({
    type: cc.Label,
    displayName: "计分节点",
  })
  scoreDisplay: cc.Label = null;

  @property({
    type: cc.AudioClip,
    displayName: "得分音效",
  })
  scoreAudio = null;

  currentStar = null;
  isPlaying = false;
  starPool = null;
  groundY = 0;
  score = 0;
  timer = 0;
  starDuration = 0;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    // 初始化计时器
    this.timer = 0;
    this.starDuration = 0;

    // 获取地平面的y轴坐标
    this.groundY = this.ground.y + this.ground.height / 2;
    // 生成一个新的星星
    this.spawnNewStar();

    // 初始化计分
    this.score = 0;
  }

  // start() {}

  update(dt) {
    // 每帧更新计时器，超过限速还没有生成新的星星
    // 就会调用游戏失败逻辑
    if (this.timer > this.starDuration) {
      this.gameOver();
      return;
    }

    this.timer += dt;
  }

  spawnNewStar() {
    // 使用给定的模板在场景中生成一个新节点
    const newStar = cc.instantiate(this.starPrefab);
    // 将新增的节点添加到Canvas节点下面
    this.node.addChild(newStar);
    // 为星星设置一个随机位置
    newStar.setPosition(this.getNewStarPosition());

    // 在星星脚本组件上保存Game对象的引用
    // console.log(
    //   'newStar.getComponent("Star") :>> ',
    //   newStar.getComponent("Star")
    // );
    newStar.getComponent("Star").game = this;

    // 计时
    this.startTimer();

    this.currentStar = newStar;
  }

  startTimer() {
    // 重置计时器，根据消失时间范围随机取一个值
    this.starDuration =
      this.minStarDuration +
      Math.random() * (this.maxStarDuration - this.minStarDuration);
    this.timer = 0;
  }

  getNewStarPosition() {
    let randX = 0;
    // 根据地平面位置和主角跳跃高度随机得到一个星星的y坐标
    const randY =
      this.groundY +
      Math.random() * this.player.getComponent("Player").jumpHeight +
      50;
    // 根据屏幕宽度，随机得到一个星星的x坐标
    const maxX = this.node.width / 2 - 50;
    randX = (Math.random() - 0.5) * 2 * maxX;

    // 返回星星坐标
    return cc.v2(randX, randY);
  }

  // 得分
  gainScore() {
    this.score += 1;
    // 更新scoreDisplay Label文字
    this.scoreDisplay.string = "Score: " + this.score;

    // 播放得分音效
    cc.audioEngine.playEffect(this.scoreAudio, false);
  }

  // 游戏结束
  gameOver() {
    // 停止Player节点的跳跃动作
    this.player.stopMove();

    // 重新加载场景 game
    cc.director.loadScene("game");
  }
}
