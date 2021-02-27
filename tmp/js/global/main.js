import { Nav } from '../components/nav/nav';
import { Hero } from '../components/hero/hero';
import { Projects } from '../components/projects/projects';
import { onDomContentLoad } from '../node_modules/toolbox-v2/src/toolbox/utils/dom/on-dom-content-load';
var projects = new Projects();
var nav = new Nav();
var _unused = onDomContentLoad(function () {
    projects.init();
    nav.init();
    if (document.querySelector('.hero')) {
        new Hero(1.1).startScrollEffect();
    }
});
