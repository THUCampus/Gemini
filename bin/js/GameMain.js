var Game;
(function (Game) {
    Game.MainHeight = 600;
    Game.MainWidth = 800;
    Game.serverResURL = "http://jjg15.iterator-traits.com/res"; //服务器资源路径
    Game.startBackGroundImage = "ui/background/StartBackGround.png"; //开始背景图
    Game.backgroundImage = "ui/background/BackGround .jpg"; //游戏背景图
    Game.endBackGroundImage = "ui/background/EndBackGround.jpg"; //结束背景图
    Game.zodiacLightImage = "ui/else/light.png";
    Game.zodiacYellowImage = "ui/else/yellow.png";
    Game.stoneImage = "ui/else/stone.png";
    Game.fallingStoneImage = "ui/else/fallingStone.png";
})(Game || (Game = {}));
// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        Laya.MiniAdpter.init();
        Laya.init(Game.MainWidth, Game.MainHeight);
        //设置屏幕自动平铺和旋转
        Laya.stage.scaleMode = Laya.Stage.SCALE_EXACTFIT;
        Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
        //初始化界面管理器(开始界面为0，游戏界面为1，结束界面为2)
        GameMain.viewStack = new Laya.ViewStack();
        GameMain.viewStack.initItems();
        Laya.stage.addChild(GameMain.viewStack);
        //加载资源
        var resArray = [
            { url: Game.backgroundImage, type: Laya.Loader.IMAGE },
            { url: Game.startBackGroundImage, type: Laya.Loader.IMAGE },
            { url: Game.endBackGroundImage, type: Laya.Loader.IMAGE },
            { url: "res/atlas/ui/button.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/ui/button.png", type: Laya.Loader.IMAGE },
            { url: "res/atlas/ui/blackhole.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/ui/blackhole.png", type: Laya.Loader.IMAGE },
            { url: "res/atlas/ui/star.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/ui/star.png", type: Laya.Loader.IMAGE },
            { url: "res/atlas/ui/else.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/ui/else.png", type: Laya.Loader.IMAGE },
            { url: Game.StoneCollisionSound, type: Laya.Loader.SOUND },
            { url: Game.NewLevelSound, type: Laya.Loader.SOUND },
            { url: Game.RewardSound, type: Laya.Loader.SOUND },
            { url: Game.BlackHoleCollisionSound, type: Laya.Loader.SOUND }
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onLoaded)); //当资源加载完毕时，调用onLoaded
    }
    //加载资源完毕后，创建界面
    GameMain.prototype.onLoaded = function () {
        GameMain.gameView = new GameView();
        GameMain.startView = new StartView();
        GameMain.endView = new EndView();
        GameMain.viewStack.addItem(GameMain.startView);
        GameMain.viewStack.addItem(GameMain.gameView);
        GameMain.viewStack.addItem(GameMain.endView);
        this.createEvents();
    };
    //创建各种响应事件
    GameMain.prototype.createEvents = function () {
        //开始界面单人的开始按钮
        GameMain.startView.onePlayerButton.on(Laya.Event.MOUSE_MOVE, this, function () {
            GameMain.startView.onePlayerButton.scale(1.1, 1.1);
        });
        GameMain.startView.onePlayerButton.on(Laya.Event.MOUSE_OUT, this, function () {
            GameMain.startView.onePlayerButton.scale(1, 1);
        });
        GameMain.startView.onePlayerButton.on(Laya.Event.CLICK, this, this.toOnePlayerGameView);
        //开始界面双人的开始按钮
        GameMain.startView.twoPlayersButton.on(Laya.Event.MOUSE_MOVE, this, function () {
            GameMain.startView.twoPlayersButton.scale(1.1, 1.1);
        });
        GameMain.startView.twoPlayersButton.on(Laya.Event.MOUSE_OUT, this, function () {
            GameMain.startView.twoPlayersButton.scale(1, 1);
        });
        GameMain.startView.twoPlayersButton.on(Laya.Event.CLICK, this, this.toTwoPlayersGameView);
        //开始界面排行榜查看按钮
        GameMain.startView.rankButton.on(Laya.Event.MOUSE_MOVE, this, function () {
            GameMain.startView.rankButton.scale(1.1, 1.1);
        });
        GameMain.startView.rankButton.on(Laya.Event.MOUSE_OUT, this, function () {
            GameMain.startView.rankButton.scale(1, 1);
        });
        //游戏界面结束按钮
        GameMain.gameView.endButton.on(Laya.Event.CLICK, this, this.toEndView);
        //结束界面回到开始界面的按钮
        GameMain.endView.startButton.on(Laya.Event.MOUSE_MOVE, this, function () {
            GameMain.endView.startButton.scale(1.1, 1.1);
        });
        GameMain.endView.startButton.on(Laya.Event.MOUSE_OUT, this, function () {
            GameMain.endView.startButton.scale(1, 1);
        });
        GameMain.endView.startButton.on(Laya.Event.CLICK, this, this.toStartView);
        //结束界面排行榜查看按钮
        GameMain.endView.rankButton.on(Laya.Event.MOUSE_MOVE, this, function () {
            GameMain.endView.rankButton.scale(1.1, 1.1);
        });
        GameMain.endView.rankButton.on(Laya.Event.MOUSE_OUT, this, function () {
            GameMain.endView.rankButton.scale(1, 1);
        });
    };
    //到单人游戏界面
    GameMain.prototype.toOnePlayerGameView = function () {
        GameMain.viewStack.selectedIndex = 1;
        Game.playerNum = 1;
        GameMain.gameView.init();
        GameMain.gameView.gameStart(); //开始游戏
    };
    //到双人游戏界面
    GameMain.prototype.toTwoPlayersGameView = function () {
        GameMain.viewStack.selectedIndex = 1;
        Game.playerNum = 2;
        GameMain.gameView.init();
        GameMain.gameView.gameStart(); //开始游戏
    };
    //到结束界面
    GameMain.prototype.toEndView = function () {
        Laya.timer.clear(GameMain.gameView, GameMain.gameView.onLoop);
        GameMain.viewStack.selectedIndex = 2;
        GameMain.endView.init();
        GameMain.endView.showEnd();
    };
    //到开始界面
    GameMain.prototype.toStartView = function () {
        GameMain.viewStack.selectedIndex = 0;
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=GameMain.js.map