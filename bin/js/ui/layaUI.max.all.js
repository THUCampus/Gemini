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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var EndViewUI = /** @class */ (function (_super) {
        __extends(EndViewUI, _super);
        function EndViewUI() {
            return _super.call(this) || this;
        }
        EndViewUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.EndViewUI.uiView);
        };
        EndViewUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 800, "height": 600 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 800, "var": "backgroundView", "skin": "ui/background/EndBackGround.jpg", "mouseThrough": true, "height": 600, "disabled": false }, "child": [{ "type": "Image", "props": { "y": 376, "x": 66, "width": 100, "visible": true, "var": "startButton", "skin": "ui/button/SelectButton.png", "mouseEnabled": true, "hitTestPrior": true, "height": 100, "disabled": false, "alpha": 1 }, "child": [{ "type": "Text", "props": { "y": 23, "x": 24, "width": 50, "text": "始", "strokeColor": "#000000", "overflow": "hidden", "height": 50, "fontSize": 40, "font": "Microsoft YaHei", "color": "#ffffff", "bold": true, "align": "center" } }] }, { "type": "Box", "props": { "y": 190, "x": 250, "width": 300, "visible": false, "var": "scoreView", "height": 60 }, "child": [{ "type": "Clip", "props": { "y": 16, "x": 246, "width": 30, "skin": "ui/else/clip_number.png", "name": "item3", "height": 40, "clipX": 10 } }, { "type": "Clip", "props": { "y": 16, "x": 202, "width": 30, "skin": "ui/else/clip_number.png", "name": "item2", "height": 40, "clipX": 10 } }, { "type": "Clip", "props": { "y": 16, "x": 157, "width": 30, "skin": "ui/else/clip_number.png", "name": "item1", "index": 0, "height": 40, "clipX": 10 } }, { "type": "Text", "props": { "y": 15, "x": 0, "width": 150, "valign": "middle", "text": "Score:", "height": 40, "fontSize": 40, "font": "SimSun", "color": "#ffff00", "bold": true, "alpha": 0.7, "align": "left" } }] }, { "type": "Box", "props": { "y": 130, "x": 250, "width": 300, "visible": false, "var": "levelView", "height": 60 }, "child": [{ "type": "Clip", "props": { "y": 16, "x": 246, "width": 30, "skin": "ui/else/clip_number.png", "name": "item3", "height": 40, "clipX": 10 } }, { "type": "Clip", "props": { "y": 16, "x": 202, "width": 30, "skin": "ui/else/clip_number.png", "name": "item2", "height": 40, "clipX": 10 } }, { "type": "Clip", "props": { "y": 16, "x": 157, "width": 30, "skin": "ui/else/clip_number.png", "name": "item1", "index": 0, "height": 40, "clipX": 10 } }, { "type": "Text", "props": { "y": 15, "x": 0, "width": 150, "valign": "middle", "text": "Level:", "height": 40, "fontSize": 40, "font": "SimSun", "color": "#ffff00", "bold": true, "alpha": 0.7, "align": "left" } }] }] }] };
        return EndViewUI;
    }(View));
    ui.EndViewUI = EndViewUI;
})(ui || (ui = {}));
(function (ui) {
    var GameViewUI = /** @class */ (function (_super) {
        __extends(GameViewUI, _super);
        function GameViewUI() {
            return _super.call(this) || this;
        }
        GameViewUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameViewUI.uiView);
        };
        GameViewUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 800, "height": 600 }, "child": [{ "type": "Box", "props": { "y": -2017, "x": 0, "width": 800, "visible": true, "var": "runningView", "height": 2617 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 800, "var": "backgroundView", "skin": "ui/background/BackGround .jpg", "height": 2617 } }, { "type": "Animation", "props": { "y": 2582, "x": 145, "width": 30, "var": "smallBallView", "height": 30 } }, { "type": "Animation", "props": { "y": 2568, "x": 369, "width": 50, "var": "bigBallView", "height": 50 } }] }, { "type": "Box", "props": { "width": 666, "visible": true, "var": "arrowView", "scaleX": 1, "pivotY": 53, "pivotX": 324, "height": 113, "centerY": 193, "centerX": 5 }, "child": [{ "type": "Image", "props": { "x": 574, "width": 100, "visible": true, "skin": "ui/else/right.png", "pivotY": 0, "pivotX": 0, "name": "rightShow", "height": 100, "alpha": 0.5 } }, { "type": "Image", "props": { "width": 100, "visible": true, "skin": "ui/else/left.png", "name": "leftShow", "height": 100, "alpha": 0.5 } }, { "type": "Image", "props": { "y": -180, "x": 480, "width": 240, "visible": true, "skin": "ui/else/right.png", "name": "right", "height": 330, "alpha": 0 } }, { "type": "Image", "props": { "y": -180, "x": -63, "width": 240, "visible": true, "skin": "ui/else/left.png", "name": "left", "height": 330, "alpha": 0 } }] }, { "type": "Box", "props": { "y": 50, "x": 600, "width": 200, "visible": true, "var": "scoreView", "height": 60 }, "child": [{ "type": "Clip", "props": { "y": 7, "x": 126, "width": 30, "skin": "ui/else/clip_number.png", "name": "item3", "height": 40, "clipX": 10 } }, { "type": "Clip", "props": { "y": 7, "x": 82, "width": 30, "skin": "ui/else/clip_number.png", "name": "item2", "height": 40, "clipX": 10 } }, { "type": "Clip", "props": { "y": 7, "x": 37, "width": 30, "skin": "ui/else/clip_number.png", "name": "item1", "index": 0, "height": 40, "clipX": 10 } }, { "type": "Text", "props": { "y": -23, "x": 60, "width": 92, "var": "levelView", "text": "Level 1", "strokeColor": "#16d225", "italic": true, "height": 25, "fontSize": 25, "font": "Impact", "color": "#ff2f08", "bold": false, "alpha": 0.5, "align": "center" } }, { "type": "Image", "props": { "y": 0, "x": -30, "width": 50, "var": "settingButton", "skin": "ui/button/SettingButton.png", "height": 50, "alpha": 0.5 }, "child": [{ "type": "Image", "props": { "y": 140, "x": 0, "width": 50, "visible": false, "var": "pauseButton", "skin": "ui/button/PauseButton.png", "height": 50, "disabled": true, "alpha": 0.7 } }, { "type": "Image", "props": { "y": 70, "x": 0, "width": 50, "visible": false, "var": "soundButton", "skin": "ui/button/NoSoundButton.png", "height": 50, "disabled": true, "alpha": 0.7 } }, { "type": "Image", "props": { "y": 210, "x": 0, "width": 50, "visible": false, "var": "endButton", "skin": "ui/button/EndButton.png", "height": 50, "disabled": true, "alpha": 0.7 } }] }, { "type": "Text", "props": { "y": 48, "x": 35, "strokeColor": "#f4720b", "stroke": 2, "name": "penalty", "fontSize": 50, "font": "ChalkBoard", "color": "#f82e08" } }, { "type": "Text", "props": { "y": 46, "x": 97, "strokeColor": "#08bc83", "stroke": 2, "name": "reward", "fontSize": 50, "font": "ChalkBoard", "color": "#08f824" } }] }, { "type": "Box", "props": { "y": 506, "x": 605, "width": 238, "visible": true, "var": "smallArrowView", "scaleX": 1, "pivotY": 53, "pivotX": 324, "height": 98, "centerY": 202, "centerX": 14 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 181, "width": 70, "visible": true, "skin": "ui/else/right.png", "pivotY": 0, "pivotX": 0, "name": "rightShow", "height": 70, "alpha": 0.5 } }, { "type": "Image", "props": { "y": 0, "x": -20, "width": 70, "visible": true, "skin": "ui/else/left.png", "name": "leftShow", "height": 70, "alpha": 0.5 } }, { "type": "Image", "props": { "y": -35, "x": 135, "width": 180, "visible": true, "skin": "ui/else/right.png", "name": "right", "height": 180, "alpha": 0 } }, { "type": "Image", "props": { "y": -35, "x": -65, "width": 180, "visible": true, "skin": "ui/else/left.png", "name": "left", "height": 180, "alpha": 0 } }] }, { "type": "Text", "props": { "y": 25, "x": 48, "var": "tipsView", "text": "目标：升到最高处~", "strokeColor": "#f86f04", "stroke": 2, "italic": false, "fontSize": 30, "font": "Microsoft YaHei", "color": "#ffffff", "alpha": 0.7 } }] };
        return GameViewUI;
    }(View));
    ui.GameViewUI = GameViewUI;
})(ui || (ui = {}));
(function (ui) {
    var HelpViewUI = /** @class */ (function (_super) {
        __extends(HelpViewUI, _super);
        function HelpViewUI() {
            return _super.call(this) || this;
        }
        HelpViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.HelpViewUI.uiView);
        };
        HelpViewUI.uiView = { "type": "Dialog", "props": { "width": 800, "height": 600 }, "child": [{ "type": "Image", "props": { "y": 125, "x": 742, "var": "returnButton", "skin": "ui/button/EndButton.png", "hitTestPrior": true, "alpha": 0.5 } }, { "type": "Image", "props": { "y": 100, "x": 50, "width": 700, "skin": "ui/background/HelpBackGround .jpg", "height": 450 }, "child": [{ "type": "Image", "props": { "y": 30, "x": 40, "var": "contentImage", "skin": "ui/background/ContentImage.png", "scaleY": 1, "scaleX": 1, "mouseThrough": true, "hitTestPrior": false }, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "width": 620, "var": "contentImageMask", "renderType": "mask", "mouseEnabled": false, "height": 376 }, "child": [{ "type": "Rect", "props": { "y": 0, "x": 0, "width": 620, "lineWidth": 1, "height": 379, "fillColor": "#ff0000" } }] }] }] }] };
        return HelpViewUI;
    }(Dialog));
    ui.HelpViewUI = HelpViewUI;
})(ui || (ui = {}));
(function (ui) {
    var StartViewUI = /** @class */ (function (_super) {
        __extends(StartViewUI, _super);
        function StartViewUI() {
            return _super.call(this) || this;
        }
        StartViewUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.StartViewUI.uiView);
        };
        StartViewUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 800, "height": 600 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 800, "var": "backgroundView", "skin": "ui/background/StartBackGround.png", "height": 600 }, "child": [{ "type": "ComboBox", "props": { "y": 170, "x": 250, "width": 300, "visibleNum": 6, "visible": false, "var": "levelSelectedBox", "stateNum": 3, "skin": "ui/else/combobox.png", "selectedIndex": 0, "mouseEnabled": false, "labels": "容易,普通,困难,令人发狂,地狱", "labelSize": 40, "labelFont": "SimSun", "labelBold": true, "itemSize": 40, "height": 60, "alpha": 0.7 } }, { "type": "Sprite", "props": { "y": 0, "x": 0, "visible": true, "var": "buttonsManagement", "mouseEnabled": true }, "child": [{ "type": "Image", "props": { "y": 150, "x": 150, "width": 100, "var": "onePlayerButton", "skin": "ui/button/SelectButton.png", "height": 100, "alpha": 1 }, "child": [{ "type": "Text", "props": { "y": 23, "x": 24, "width": 50, "text": "单", "strokeColor": "#000000", "overflow": "hidden", "height": 50, "fontSize": 40, "font": "Microsoft YaHei", "color": "#ffffff", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 200, "x": 500, "width": 100, "var": "twoPlayersButton", "skin": "ui/button/SelectButton.png", "height": 100 }, "child": [{ "type": "Text", "props": { "y": 26, "x": 24, "width": 50, "text": "双", "overflow": "hidden", "height": 50, "fontSize": 40, "font": "Microsoft YaHei", "color": "#ffffff", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 450, "x": 350, "width": 100, "var": "helpButton", "skin": "ui/button/SelectButton.png", "height": 100 }, "child": [{ "type": "Text", "props": { "y": 23, "x": 23, "width": 50, "text": "帮", "overflow": "hidden", "height": 50, "fontSize": 40, "font": "Microsoft YaHei", "color": "#ffffff", "bold": true, "align": "center" } }] }] }] }] };
        return StartViewUI;
    }(View));
    ui.StartViewUI = StartViewUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map