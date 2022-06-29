System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, tween, Vec3, TweenUtil, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c56feN05ThJQKJVb9TcoCoG", "TweenUtil", undefined);

      _export("default", TweenUtil = class TweenUtil {
        /**
        * 水平翻转（卡片翻转）
        * @param node 节点
        * @param duration 总时长
        * @param onMiddle 中间状态回调
        * @param onComplete 完成回调
        */
        static flip(node, duration, round, onMiddle, onComplete) {
          if (round === void 0) {
            round = 1;
          }

          return new Promise(res => {
            var time = 1 * round,
                t = tween,
                {
              x,
              z
            } = node.eulerAngles,
                eulerAngles = new Vec3(x, 360 * round, z);
            t(node).by(time, {
              eulerAngles
            }, {
              easing: 'quadOut'
            }).call(res).start();
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=126231d8d29348d8e61d04c8365f019f19a9dd61.js.map