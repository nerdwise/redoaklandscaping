import { ScrollEffect } from "../../node_modules/toolbox-v2/src/toolbox/components/scroll-effect/base";
import { Tween } from "../../node_modules/toolbox-v2/src/toolbox/components/scroll-effect/effects/tween/tween";
import { DistanceFunction } from "../../node_modules/toolbox-v2/src/toolbox/components/scroll-effect/distance-function";
var Hero = (function () {
    function Hero(scale) {
        this.scrollEffect_ = null;
        this.scale_ = scale;
    }
    Hero.prototype.startScrollEffect = function () {
        var translateY = ((this.scale_ - 1) / 2) * -100;
        this.scrollEffect_ = new ScrollEffect(document.querySelector(".hero"), {
            effects: [
                new Tween([
                    [0, "transform: translateY(0) scale(1)"],
                    [1, "transform: translateY(" + translateY + "%) scale(" + this.scale_ + ")"]
                ])
            ],
            getDistanceFunction: DistanceFunction.DOCUMENT_SCROLL,
            startDistance: 0,
            endDistance: function endDistance() {
                return window.innerHeight / 2;
            }
        });
    };
    return Hero;
}());
export { Hero };
