
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c0f11PaQU5DP7H1Qd+WOfLj', 'Player');
// scripts/Player.ts

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
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        //   @property(cc.Label)
        //   label: cc.Label = null;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //   @property
        //   text: string = "hello";
        // 主角跳跃高度
        _this.jumpHeight = 0;
        //   主角跳跃持续时间
        _this.jumpDuration = 0;
        // 最大移动速度
        _this.maxMoveSpeed = 0;
        // 加速度
        _this.accel = 0;
        // 加速度方向开关
        _this.accLeft = false;
        _this.accRight = false;
        // 主角当前水平方向速度
        _this.xSpeed = 0;
        // screen boundaries
        _this.minPosX = 0;
        _this.maxPosX = 0;
        // 初始化跳跃动作
        _this.jumpAction = null;
        return _this;
    }
    Player.prototype.runJumpAction = function () {
        // ! 这里涉及到了 缓动（cc.tween）系统，在 Cocos Creator 中，
        // ! cc.tween 可以对任何对象进行操作，并且可以对对象的 任意属性 进行缓动。
        // 上升
        var jumpUp = cc
            .tween()
            .by(this.jumpDuration, { y: this.jumpHeight }, { easing: "sineOut" });
        //  下落
        var jumpDown = cc
            .tween()
            .by(this.jumpDuration, { y: -this.jumpHeight }, { easing: "sineIn" });
        //   创建一个缓动，按jumpUp jumpDown的顺序执行动作
        var tween = cc.tween().sequence(jumpUp, jumpDown);
        // 不断重复
        return cc.tween().repeatForever(tween);
    };
    Player.prototype.onKeyDown = function (e) {
        switch (e.keyCode) {
            case cc.macro.KEY.a:
                this.accLeft = true;
                break;
            case cc.macro.KEY.d:
                this.accRight = true;
                break;
        }
    };
    Player.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
            case cc.macro.KEY.a:
                this.accLeft = false;
                break;
            case cc.macro.KEY.d:
                this.accRight = false;
                break;
        }
    };
    // LIFE-CYCLE CALLBACKS:
    Player.prototype.onLoad = function () {
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
    };
    // start() {}
    Player.prototype.update = function (dt) {
        // console.log("dt :>> ", dt);
        // 根据当前加速度方向每帧更新速度
        if (this.accLeft) {
            this.xSpeed -= this.accel * dt;
        }
        else if (this.accRight) {
            this.xSpeed += this.accel * dt;
        }
        // 限制主角的速度不能超过最大值
        if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
            this.xSpeed = (this.maxMoveSpeed * this.xSpeed) / Math.abs(this.xSpeed);
        }
        // 根据当前速度更新主角的位置
        this.node.x += this.xSpeed * dt;
    };
    __decorate([
        property
    ], Player.prototype, "jumpHeight", void 0);
    __decorate([
        property
    ], Player.prototype, "jumpDuration", void 0);
    __decorate([
        property
    ], Player.prototype, "maxMoveSpeed", void 0);
    __decorate([
        property
    ], Player.prototype, "accel", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.default = Player;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQywwQkFBWTtJQUFoRDtRQUNFLHdCQUF3QjtRQUN4Qiw0QkFBNEI7UUFGOUIscUVBbUhDO1FBL0dDLGNBQWM7UUFDZCw0QkFBNEI7UUFFNUIsU0FBUztRQUVULGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRWYsYUFBYTtRQUViLGtCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBRWpCLFNBQVM7UUFFVCxrQkFBWSxHQUFHLENBQUMsQ0FBQztRQUVqQixNQUFNO1FBRU4sV0FBSyxHQUFHLENBQUMsQ0FBQztRQUVWLFVBQVU7UUFDVixhQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGNBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsYUFBYTtRQUNiLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxvQkFBb0I7UUFDcEIsYUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFFWixVQUFVO1FBQ1YsZ0JBQVUsR0FBRyxJQUFJLENBQUM7O0lBaUZwQixDQUFDO0lBL0VDLDhCQUFhLEdBQWI7UUFDRSw2Q0FBNkM7UUFDN0MsNkNBQTZDO1FBRTdDLEtBQUs7UUFDTCxJQUFNLE1BQU0sR0FBRyxFQUFFO2FBQ2QsS0FBSyxFQUFFO2FBQ1AsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7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QUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekU7UUFFRCxnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQXpHRDtRQURDLFFBQVE7OENBQ007SUFJZjtRQURDLFFBQVE7Z0RBQ1E7SUFJakI7UUFEQyxRQUFRO2dEQUNRO0lBSWpCO1FBREMsUUFBUTt5Q0FDQztJQXJCUyxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBbUgxQjtJQUFELGFBQUM7Q0FuSEQsQUFtSEMsQ0FuSG1DLEVBQUUsQ0FBQyxTQUFTLEdBbUgvQztrQkFuSG9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIC8vICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAvLyAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgLy8gICBAcHJvcGVydHlcbiAgLy8gICB0ZXh0OiBzdHJpbmcgPSBcImhlbGxvXCI7XG5cbiAgLy8g5Li76KeS6Lez6LeD6auY5bqmXG4gIEBwcm9wZXJ0eVxuICBqdW1wSGVpZ2h0ID0gMDtcblxuICAvLyAgIOS4u+inkui3s+i3g+aMgee7reaXtumXtFxuICBAcHJvcGVydHlcbiAganVtcER1cmF0aW9uID0gMDtcblxuICAvLyDmnIDlpKfnp7vliqjpgJ/luqZcbiAgQHByb3BlcnR5XG4gIG1heE1vdmVTcGVlZCA9IDA7XG5cbiAgLy8g5Yqg6YCf5bqmXG4gIEBwcm9wZXJ0eVxuICBhY2NlbCA9IDA7XG5cbiAgLy8g5Yqg6YCf5bqm5pa55ZCR5byA5YWzXG4gIGFjY0xlZnQgPSBmYWxzZTtcbiAgYWNjUmlnaHQgPSBmYWxzZTtcblxuICAvLyDkuLvop5LlvZPliY3msLTlubPmlrnlkJHpgJ/luqZcbiAgeFNwZWVkID0gMDtcbiAgLy8gc2NyZWVuIGJvdW5kYXJpZXNcbiAgbWluUG9zWCA9IDA7XG4gIG1heFBvc1ggPSAwO1xuXG4gIC8vIOWIneWni+WMlui3s+i3g+WKqOS9nFxuICBqdW1wQWN0aW9uID0gbnVsbDtcblxuICBydW5KdW1wQWN0aW9uKCkge1xuICAgIC8vICEg6L+Z6YeM5raJ5Y+K5Yiw5LqGIOe8k+WKqO+8iGNjLnR3ZWVu77yJ57O757uf77yM5ZyoIENvY29zIENyZWF0b3Ig5Lit77yMXG4gICAgLy8gISBjYy50d2VlbiDlj6/ku6Xlr7nku7vkvZXlr7nosaHov5vooYzmk43kvZzvvIzlubbkuJTlj6/ku6Xlr7nlr7nosaHnmoQg5Lu75oSP5bGe5oCnIOi/m+ihjOe8k+WKqOOAglxuXG4gICAgLy8g5LiK5Y2HXG4gICAgY29uc3QganVtcFVwID0gY2NcbiAgICAgIC50d2VlbigpXG4gICAgICAuYnkodGhpcy5qdW1wRHVyYXRpb24sIHsgeTogdGhpcy5qdW1wSGVpZ2h0IH0sIHsgZWFzaW5nOiBcInNpbmVPdXRcIiB9KTtcbiAgICAvLyAg5LiL6JC9XG4gICAgY29uc3QganVtcERvd24gPSBjY1xuICAgICAgLnR3ZWVuKClcbiAgICAgIC5ieSh0aGlzLmp1bXBEdXJhdGlvbiwgeyB5OiAtdGhpcy5qdW1wSGVpZ2h0IH0sIHsgZWFzaW5nOiBcInNpbmVJblwiIH0pO1xuXG4gICAgLy8gICDliJvlu7rkuIDkuKrnvJPliqjvvIzmjIlqdW1wVXAganVtcERvd27nmoTpobrluo/miafooYzliqjkvZxcbiAgICBjb25zdCB0d2VlbiA9IGNjLnR3ZWVuKCkuc2VxdWVuY2UoanVtcFVwLCBqdW1wRG93bik7XG5cbiAgICAvLyDkuI3mlq3ph43lpI1cbiAgICByZXR1cm4gY2MudHdlZW4oKS5yZXBlYXRGb3JldmVyKHR3ZWVuKTtcbiAgfVxuXG4gIG9uS2V5RG93bihlKSB7XG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XG4gICAgICAgIHRoaXMuYWNjTGVmdCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcbiAgICAgICAgdGhpcy5hY2NSaWdodCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5VXAoZSkge1xuICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxuICAgICAgICB0aGlzLmFjY0xlZnQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxuICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLmp1bXBBY3Rpb24gPSB0aGlzLnJ1bkp1bXBBY3Rpb24oKTtcbiAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRoZW4odGhpcy5qdW1wQWN0aW9uKS5zdGFydCgpO1xuXG4gICAgLy8g5Yqg6YCf5pa55ZCR5byA5YWzXG4gICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5hY2NSaWdodCA9IGZhbHNlO1xuXG4gICAgLy8g5Li76KeS5b2T5YmN5rC05bmz5pa55ZCR6YCf5bqmXG4gICAgdGhpcy54U3BlZWQgPSAwO1xuXG4gICAgLy8g5Yid5aeL5YyW6ZSu55uY6L6T5YWl55uR5ZCsXG4gICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcbiAgfVxuXG4gIC8vIHN0YXJ0KCkge31cblxuICB1cGRhdGUoZHQpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImR0IDo+PiBcIiwgZHQpO1xuICAgIC8vIOagueaNruW9k+WJjeWKoOmAn+W6puaWueWQkeavj+W4p+abtOaWsOmAn+W6plxuICAgIGlmICh0aGlzLmFjY0xlZnQpIHtcbiAgICAgIHRoaXMueFNwZWVkIC09IHRoaXMuYWNjZWwgKiBkdDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYWNjUmlnaHQpIHtcbiAgICAgIHRoaXMueFNwZWVkICs9IHRoaXMuYWNjZWwgKiBkdDtcbiAgICB9XG5cbiAgICAvLyDpmZDliLbkuLvop5LnmoTpgJ/luqbkuI3og73otoXov4fmnIDlpKflgLxcbiAgICBpZiAoTWF0aC5hYnModGhpcy54U3BlZWQpID4gdGhpcy5tYXhNb3ZlU3BlZWQpIHtcbiAgICAgIHRoaXMueFNwZWVkID0gKHRoaXMubWF4TW92ZVNwZWVkICogdGhpcy54U3BlZWQpIC8gTWF0aC5hYnModGhpcy54U3BlZWQpO1xuICAgIH1cblxuICAgIC8vIOagueaNruW9k+WJjemAn+W6puabtOaWsOS4u+inkueahOS9jee9rlxuICAgIHRoaXMubm9kZS54ICs9IHRoaXMueFNwZWVkICogZHQ7XG4gIH1cbn1cbiJdfQ==