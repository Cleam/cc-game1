
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aaec8ZmRqlJ+q9t8jWqqpbJ', 'Game');
// scripts/Game.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 这个属性引用了星星预制资源
        _this.starPrefab = null;
        //   星星产生后消失时间的随机范围
        _this.maxStarDuration = 0;
        _this.minStarDuration = 0;
        //   地面节点，用于确定星星生成的高度
        _this.ground = null;
        //   Player节点，用于获取主角弹跳的高度，和控制主角行动的开关
        _this.player = null;
        _this.groundY = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Game.prototype.onLoad = function () {
        console.log("this.ground :>> ", this.ground);
        // 获取地平面的y轴坐标
        this.groundY = this.ground.y + this.ground.height / 2;
        // 生成一个新的星星
        this.spawnNewStar();
    };
    // start() {}
    // update (dt) {}
    Game.prototype.spawnNewStar = function () {
        // 使用给定的模板在场景中生成一个新节点
        var newStar = cc.instantiate(this.starPrefab);
        // 将新增的节点添加到Canvas节点下面
        this.node.addChild(newStar);
        // 为星星设置一个随机位置
        newStar.setPosition(this.getNewStarPosition());
    };
    Game.prototype.getNewStarPosition = function () {
        var randX = 0;
        // 根据地平面位置和主角跳跃高度随机得到一个星星的y坐标
        var randY = this.groundY +
            Math.random() * this.player.getComponent("Player").jumpHeight +
            50;
        // 根据屏幕宽度，随机得到一个星星的x坐标
        var maxX = this.node.width / 2;
        randX = (Math.random() - 0.5) * 2 * maxX;
        // 返回星星坐标
        return cc.v2(randX, randY);
    };
    __decorate([
        property({
            type: cc.Prefab,
        })
    ], Game.prototype, "starPrefab", void 0);
    __decorate([
        property()
    ], Game.prototype, "maxStarDuration", void 0);
    __decorate([
        property
    ], Game.prototype, "minStarDuration", void 0);
    __decorate([
        property({
            type: cc.Node,
            displayName: "地面节点",
        })
    ], Game.prototype, "ground", void 0);
    __decorate([
        property({
            type: cc.Node,
            displayName: "Player节点",
        })
    ], Game.prototype, "player", void 0);
    Game = __decorate([
        ccclass
    ], Game);
    return Game;
}(cc.Component));
exports.default = Game;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFrRUM7UUFqRUMsZ0JBQWdCO1FBSWhCLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBRWxCLG1CQUFtQjtRQUVuQixxQkFBZSxHQUFHLENBQUMsQ0FBQztRQUVwQixxQkFBZSxHQUFHLENBQUMsQ0FBQztRQUVwQixxQkFBcUI7UUFLckIsWUFBTSxHQUFHLElBQUksQ0FBQztRQUVkLG9DQUFvQztRQUtwQyxZQUFNLEdBQUcsSUFBSSxDQUFDO1FBRWQsYUFBTyxHQUFHLENBQUMsQ0FBQzs7SUF1Q2QsQ0FBQztJQXJDQyx3QkFBd0I7SUFFeEIscUJBQU0sR0FBTjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLGFBQWE7UUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUN0RCxXQUFXO1FBQ1gsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxhQUFhO0lBRWIsaUJBQWlCO0lBRWpCLDJCQUFZLEdBQVo7UUFDRSxxQkFBcUI7UUFDckIsSUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEQsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLGNBQWM7UUFDZCxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELGlDQUFrQixHQUFsQjtRQUNFLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLDZCQUE2QjtRQUM3QixJQUFNLEtBQUssR0FDVCxJQUFJLENBQUMsT0FBTztZQUNaLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVO1lBQzdELEVBQUUsQ0FBQztRQUNMLHNCQUFzQjtRQUN0QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDakMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7UUFFekMsU0FBUztRQUNULE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQTVERDtRQUhDLFFBQVEsQ0FBQztZQUNSLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTTtTQUNoQixDQUFDOzRDQUNnQjtJQUlsQjtRQURDLFFBQVEsRUFBRTtpREFDUztJQUVwQjtRQURDLFFBQVE7aURBQ1c7SUFPcEI7UUFKQyxRQUFRLENBQUM7WUFDUixJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUk7WUFDYixXQUFXLEVBQUUsTUFBTTtTQUNwQixDQUFDO3dDQUNZO0lBT2Q7UUFKQyxRQUFRLENBQUM7WUFDUixJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUk7WUFDYixXQUFXLEVBQUUsVUFBVTtTQUN4QixDQUFDO3dDQUNZO0lBekJLLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FrRXhCO0lBQUQsV0FBQztDQWxFRCxBQWtFQyxDQWxFaUMsRUFBRSxDQUFDLFNBQVMsR0FrRTdDO2tCQWxFb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIC8vIOi/meS4quWxnuaAp+W8leeUqOS6huaYn+aYn+mihOWItui1hOa6kFxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IGNjLlByZWZhYixcbiAgfSlcbiAgc3RhclByZWZhYiA9IG51bGw7XG5cbiAgLy8gICDmmJ/mmJ/kuqfnlJ/lkI7mtojlpLHml7bpl7TnmoTpmo/mnLrojIPlm7RcbiAgQHByb3BlcnR5KClcbiAgbWF4U3RhckR1cmF0aW9uID0gMDtcbiAgQHByb3BlcnR5XG4gIG1pblN0YXJEdXJhdGlvbiA9IDA7XG5cbiAgLy8gICDlnLDpnaLoioLngrnvvIznlKjkuo7noa7lrprmmJ/mmJ/nlJ/miJDnmoTpq5jluqZcbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5Ob2RlLFxuICAgIGRpc3BsYXlOYW1lOiBcIuWcsOmdouiKgueCuVwiLFxuICB9KVxuICBncm91bmQgPSBudWxsO1xuXG4gIC8vICAgUGxheWVy6IqC54K577yM55So5LqO6I635Y+W5Li76KeS5by56Lez55qE6auY5bqm77yM5ZKM5o6n5Yi25Li76KeS6KGM5Yqo55qE5byA5YWzXG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuTm9kZSxcbiAgICBkaXNwbGF5TmFtZTogXCJQbGF5ZXLoioLngrlcIixcbiAgfSlcbiAgcGxheWVyID0gbnVsbDtcblxuICBncm91bmRZID0gMDtcblxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICBvbkxvYWQoKSB7XG4gICAgY29uc29sZS5sb2coXCJ0aGlzLmdyb3VuZCA6Pj4gXCIsIHRoaXMuZ3JvdW5kKTtcbiAgICAvLyDojrflj5blnLDlubPpnaLnmoR56L205Z2Q5qCHXG4gICAgdGhpcy5ncm91bmRZID0gdGhpcy5ncm91bmQueSArIHRoaXMuZ3JvdW5kLmhlaWdodCAvIDI7XG4gICAgLy8g55Sf5oiQ5LiA5Liq5paw55qE5pif5pifXG4gICAgdGhpcy5zcGF3bk5ld1N0YXIoKTtcbiAgfVxuXG4gIC8vIHN0YXJ0KCkge31cblxuICAvLyB1cGRhdGUgKGR0KSB7fVxuXG4gIHNwYXduTmV3U3RhcigpIHtcbiAgICAvLyDkvb/nlKjnu5nlrprnmoTmqKHmnb/lnKjlnLrmma/kuK3nlJ/miJDkuIDkuKrmlrDoioLngrlcbiAgICBjb25zdCBuZXdTdGFyID0gY2MuaW5zdGFudGlhdGUodGhpcy5zdGFyUHJlZmFiKTtcbiAgICAvLyDlsIbmlrDlop7nmoToioLngrnmt7vliqDliLBDYW52YXPoioLngrnkuIvpnaJcbiAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3U3Rhcik7XG4gICAgLy8g5Li65pif5pif6K6+572u5LiA5Liq6ZqP5py65L2N572uXG4gICAgbmV3U3Rhci5zZXRQb3NpdGlvbih0aGlzLmdldE5ld1N0YXJQb3NpdGlvbigpKTtcbiAgfVxuXG4gIGdldE5ld1N0YXJQb3NpdGlvbigpIHtcbiAgICBsZXQgcmFuZFggPSAwO1xuICAgIC8vIOagueaNruWcsOW5s+mdouS9jee9ruWSjOS4u+inkui3s+i3g+mrmOW6pumaj+acuuW+l+WIsOS4gOS4quaYn+aYn+eahHnlnZDmoIdcbiAgICBjb25zdCByYW5kWSA9XG4gICAgICB0aGlzLmdyb3VuZFkgK1xuICAgICAgTWF0aC5yYW5kb20oKSAqIHRoaXMucGxheWVyLmdldENvbXBvbmVudChcIlBsYXllclwiKS5qdW1wSGVpZ2h0ICtcbiAgICAgIDUwO1xuICAgIC8vIOagueaNruWxj+W5leWuveW6pu+8jOmaj+acuuW+l+WIsOS4gOS4quaYn+aYn+eahHjlnZDmoIdcbiAgICBjb25zdCBtYXhYID0gdGhpcy5ub2RlLndpZHRoIC8gMjtcbiAgICByYW5kWCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIgKiBtYXhYO1xuXG4gICAgLy8g6L+U5Zue5pif5pif5Z2Q5qCHXG4gICAgcmV0dXJuIGNjLnYyKHJhbmRYLCByYW5kWSk7XG4gIH1cbn1cbiJdfQ==