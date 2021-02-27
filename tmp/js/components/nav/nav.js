import { ActiveOnCondition } from '../../node_modules/toolbox-v2/src/toolbox/components/active-on-condition/base';
import { Scroll } from '../../node_modules/toolbox-v2/src/toolbox/utils/cached-vectors/scroll';
import { RemoveTransformOnScrollDown } from '../../node_modules/toolbox-v2/src/toolbox/components/scroll-effect/effects/remove-transform-on-scroll-down';
import { ScrollEffect } from '../../node_modules/toolbox-v2/src/toolbox/components/scroll-effect/base';
import { DistanceFunction } from '../../node_modules/toolbox-v2/src/toolbox/components/scroll-effect/distance-function';
var Nav = (function () {
    function Nav() {
        this.scrollWatcher_ = null;
        this.removeTransformOnScrollDown_ = null;
        this.scrollEffect_ = null;
        this.mobileNavLinks_ = Array.from(document.querySelectorAll('.nav__item--mobile'));
        this.navMenu_ = document.querySelector('.nav__menu');
        this.mobileNav_ = document.querySelector('.nav--mobile');
    }
    Nav.prototype.init = function () {
        this.startScrollWatcher();
        this.expandNav();
        this.scrollResponsiveNav();
        this.closeNavOnLinkClick();
    };
    Nav.prototype.startScrollWatcher = function () {
        this.scrollWatcher_ = new ActiveOnCondition('nav', function () {
            return Scroll.getSingleton().getPosition().y > 30;
        }, 'minimal');
    };
    Nav.prototype.expandNav = function () {
        var navMenu = document.querySelector('.nav__menu');
        var mobileNav = document.querySelector('.nav--mobile');
        navMenu.addEventListener('click', function () {
            mobileNav.classList.toggle('display-nav');
            navMenu.classList.toggle('x');
        });
    };
    Nav.prototype.closeNavOnLinkClick = function () {
        var _this = this;
        this.mobileNavLinks_.forEach(function (link) {
            link.addEventListener('click', function () {
                _this.mobileNav_.classList.toggle('display-nav');
                _this.navMenu_.classList.toggle('x');
            });
        });
    };
    Nav.prototype.scrollResponsiveNav = function () {
        this.scrollEffect_ = new ScrollEffect(document.querySelector('.nav'), {
            getDistanceFunction: DistanceFunction.DOCUMENT_SCROLL,
            effects: [new RemoveTransformOnScrollDown()],
            condition: function () {
                return window.innerWidth < 1200;
            }
        });
    };
    Nav.prototype.destroy = function () {
        this.scrollWatcher_.destroy();
        this.scrollWatcher_ = null;
    };
    return Nav;
}());
export { Nav };
