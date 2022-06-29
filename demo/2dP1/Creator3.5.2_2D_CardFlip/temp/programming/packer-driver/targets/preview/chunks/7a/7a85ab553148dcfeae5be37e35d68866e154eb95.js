System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, EventManager, _dec, _dec2, _dec3, _dec4, _class, _crd, ccclass, executionOrder, help, menu, ScreenAdapter;

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../core/EventManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "32ac7U3+OdFpJMImIy13br0", "ScreenAdapter", undefined);

      ({
        ccclass,
        executionOrder,
        help,
        menu
      } = _decorator);

      _export("default", ScreenAdapter = ( // /**
      // * 屏幕适配组件
      // * @author 陈皮皮 (ifaswind)
      // * @version 20210504
      // * @see ScreenAdapter.ts https://gitee.com/ifaswind/eazax-ccc/blob/master/components/ScreenAdapter.ts
      // */
      _dec = ccclass('ScreenAdapter'), _dec2 = executionOrder(-1), _dec3 = help('https://gitee.com/ifaswind/eazax-ccc/blob/master/components/ScreenAdapter.ts'), _dec4 = menu('eazax/其他组件/ScreenAdapter'), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ScreenAdapter extends Component {
        // /**
        // * 生命周期：加载
        // */
        onLoad() {
          this.init();
        } // /**
        // * 生命周期：组件启用
        // */


        onEnable() {
          this.adapt();
        } // /**
        // * 初始化
        // */


        init() {
          // // 设置游戏窗口变化的回调（仅 Web 平台有效）
          cc.view.setResizeCallback(() => this.onResize());
        } // /**
        // * 窗口变化回调
        // */


        onResize() {
          // // 由于 setResizeCallback 只能设置一个回调
          // // 使用事件系统发送一个特定事件，让其他组件也可以监听到窗口变化
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).emit('view-resize'); // // 适配

          this.adapt();
        } // /**
        // * 适配
        // */


        adapt() {
          // // 实际屏幕比例
          var winSize = cc.winSize,
              screenRatio = winSize.width / winSize.height; // // 设计比例

          var designResolution = cc.Canvas.instance.designResolution,
              designRatio = designResolution.width / designResolution.height; // // 判断实际屏幕宽高比

          if (screenRatio <= 1) {
            // // 此时屏幕高度大于宽度
            if (screenRatio <= designRatio) {
              this.setFitWidth();
            } else {
              // // 此时实际屏幕比例大于设计比例
              // // 为了保证纵向的游戏内容不受影响，应使用 fitHeight 模式
              this.setFitHeight();
            }
          } else {
            // // 此时屏幕高度小于宽度
            this.setFitHeight();
          }
        } // /**
        // * 适配高度模式
        // */


        setFitHeight() {
          var canvas = cc.Canvas.instance;
          canvas.fitHeight = true;
          canvas.fitWidth = false;
        } // /**
        // * 适配宽度模式
        // */


        setFitWidth() {
          var canvas = cc.Canvas.instance;
          canvas.fitHeight = false;
          canvas.fitWidth = true;
        }

      }) || _class) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7a85ab553148dcfeae5be37e35d68866e154eb95.js.map