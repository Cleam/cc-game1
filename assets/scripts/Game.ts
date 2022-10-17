// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Game extends cc.Component {
  // 这个属性引用了星星预制资源
  @property({
    type: cc.Prefab,
  })
  starPrefab = null;

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
  ground = null;

  //   Player节点，用于获取主角弹跳的高度，和控制主角行动的开关
  @property({
    type: cc.Node,
    displayName: "Player节点",
  })
  player = null;

  groundY = 0;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    console.log("this.ground :>> ", this.ground);
    // 获取地平面的y轴坐标
    this.groundY = this.ground.y + this.ground.height / 2;
    // 生成一个新的星星
    this.spawnNewStar();
  }

  // start() {}

  // update (dt) {}

  spawnNewStar() {
    // 使用给定的模板在场景中生成一个新节点
    const newStar = cc.instantiate(this.starPrefab);
    // 将新增的节点添加到Canvas节点下面
    this.node.addChild(newStar);
    // 为星星设置一个随机位置
    newStar.setPosition(this.getNewStarPosition());
  }

  getNewStarPosition() {
    let randX = 0;
    // 根据地平面位置和主角跳跃高度随机得到一个星星的y坐标
    const randY =
      this.groundY +
      Math.random() * this.player.getComponent("Player").jumpHeight +
      50;
    // 根据屏幕宽度，随机得到一个星星的x坐标
    const maxX = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX;

    // 返回星星坐标
    return cc.v2(randX, randY);
  }
}
