// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Player extends cc.Component {
  //   @property(cc.Label)
  //   label: cc.Label = null;

  //   @property
  //   text: string = "hello";

  // 主角跳跃高度
  @property
  jumpHeight = 0;

  //   主角跳跃持续时间
  @property
  jumpDuration = 0;

  // 最大移动速度
  @property
  maxMoveSpeed = 0;

  // 加速度
  @property
  accel = 0;

  // 加速度方向开关
  accLeft = false;
  accRight = false;

  // 主角当前水平方向速度
  xSpeed = 0;
  // screen boundaries
  minPosX = 0;
  maxPosX = 0;

  // 初始化跳跃动作
  jumpAction = null;

  runJumpAction() {
    // ! 这里涉及到了 缓动（cc.tween）系统，在 Cocos Creator 中，
    // ! cc.tween 可以对任何对象进行操作，并且可以对对象的 任意属性 进行缓动。

    // 上升
    const jumpUp = cc
      .tween()
      .by(this.jumpDuration, { y: this.jumpHeight }, { easing: "sineOut" });
    //  下落
    const jumpDown = cc
      .tween()
      .by(this.jumpDuration, { y: -this.jumpHeight }, { easing: "sineIn" });

    //   创建一个缓动，按jumpUp jumpDown的顺序执行动作
    const tween = cc.tween().sequence(jumpUp, jumpDown);

    // 不断重复
    return cc.tween().repeatForever(tween);
  }

  onKeyDown(e) {
    switch (e.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = true;
        break;
      case cc.macro.KEY.d:
        this.accRight = true;
        break;
    }
  }

  onKeyUp(e) {
    switch (e.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = false;
        break;
      case cc.macro.KEY.d:
        this.accRight = false;
        break;
    }
  }

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.jumpAction = this.runJumpAction();
    cc.tween(this.node).then(this.jumpAction).start();

    // 加速方向开关
    this.accLeft = false;
    this.accRight = false;

    // 主角当前水平方向速度
    this.xSpeed = 0;

    // 初始化键盘输入监听
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  }

  // start() {}

  update(dt) {
    // console.log("dt :>> ", dt);
    // 根据当前加速度方向每帧更新速度
    if (this.accLeft) {
      this.xSpeed -= this.accel * dt;
    } else if (this.accRight) {
      this.xSpeed += this.accel * dt;
    }

    // 限制主角的速度不能超过最大值
    if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
      this.xSpeed = (this.maxMoveSpeed * this.xSpeed) / Math.abs(this.xSpeed);
    }

    // 根据当前速度更新主角的位置
    this.node.x += this.xSpeed * dt;
  }
}