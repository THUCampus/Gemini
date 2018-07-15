var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Stone = /** @class */ (function (_super) {
    __extends(Stone, _super);
    function Stone(backgroundImage, width, height, name) {
        var _this = _super.call(this, backgroundImage, width, height, name) || this;
        _this.item = new Laya.Image();
        return _this;
    }
    //绘制item
    Stone.prototype.drawItem = function () {
        this.item.loadImage("res/atlas/ui/stone.png");
        this.item.scaleX = this._width / 108;
        this.item.scaleY = this._height / 191;
    };
    //判断球是否与陨石相撞，0为不相撞，1为上下碰撞，2为左右碰撞
    Stone.prototype.detectCollisions = function (ball) {
        var ballRec = new Laya.Rectangle(ball.x - ball.radius, ball.y - ball.radius, ball.radius * 2, ball.radius * 2);
        //判断是否与障碍物碰撞反弹(先判断上下方向再判断左右方向)
        var itemRec = this.item.getBounds();
        itemRec = itemRec.setTo(itemRec.x + itemRec.width / 10, itemRec.y + itemRec.height / 10, itemRec.width * 4 / 5, itemRec.height * 4 / 5);
        var inStone = 0; //无碰撞是0，上下方向是1，左右方向是2
        if ((ballRec.x >= itemRec.x - ballRec.width) && (ballRec.right <= itemRec.right + ballRec.width)) {
            if (((ballRec.bottom >= itemRec.y) && (ballRec.y < itemRec.y) && (ball.vy > 0)) || //向上反弹
                ((ballRec.y <= itemRec.bottom) && (ballRec.bottom > itemRec.bottom) && (ball.vy < 0))) //向下反弹
             {
                inStone = 1;
            }
        }
        if ((ballRec.y >= itemRec.y - ballRec.height) && (ballRec.bottom <= itemRec.bottom + ballRec.height)) //向左反弹
         {
            if (((ballRec.right >= itemRec.x) && (ballRec.x < itemRec.x) && (ball.vx > 0)) || //向左反弹
                ((ballRec.x <= itemRec.right) && (ballRec.right > itemRec.right) && (ball.vx < 0))) //向右反弹
             {
                inStone = 2;
            }
        }
        return inStone;
    };
    return Stone;
}(Barrier));
//# sourceMappingURL=Stone.js.map