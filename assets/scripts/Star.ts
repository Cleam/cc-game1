// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Game from "./Game";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Star extends cc.Component {
  @property
  pickRadius = 0;

  // 暂存Game对象引用
  game: Game = null;

  count = 0;

  // LIFE-CYCLE CALLBACKS:

  // onLoad() {
  // }

  // start() {}

  update(dt) {
    // 每帧判断星星和主角之间的距离是否小于收集距离
    try {
      if (this.getPlayerDistance() < this.pickRadius) {
        // 调用收集行为
        this.onPicked();
        return;
      }
    } catch (error) {
      if (this.count++ < 3) {
        console.error("出错了 :>> ", error);
      }
    }
  }

  getPlayerDistance() {
    if (this.game) {
      // 根据Player节点位置判断距离
      const playerPos = this.game.player.getCenterPos();

      // 根据两点位置计算两点之间距离
      // @ts-ignore
      const dist = this.node.position.sub(playerPos).mag();
      return dist;
    }
  }

  onPicked() {
    // 当星星被收集时，调用Game脚本中的接口，生成一个新的星星
    this.game.spawnNewStar();

    // 调用Game脚本的得分方法
    this.game.gainScore();

    // 然后销毁当前星星节点
    this.node.destroy();
  }
}
