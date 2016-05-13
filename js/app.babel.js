import Polyfill       from 'classlist-polyfill';
import MojsPlayer     from 'mojs-player'
import Module         from './components/module';
import Ball           from './components/ball';
import Ball1          from './components/ball1';
import Ball2          from './components/ball2';
import Ball3          from './components/ball3';
import Ball4          from './components/ball4';
import COLORS         from './components/colors';
import C              from './components/constants';

require('../css/main.postcss.css');
const CLASSES = require('../css/main.postcss.css.json');

require('../css/blocks/line.postcss.css');
const LINE_CLASSES = require('../css/blocks/line.postcss.css.json');

require('../css/blocks/scene.postcss.css');
const SCENE_CLASSES = require('../css/blocks/scene.postcss.css.json');

const LINE2_SHIFT = 4;
const LINE3_SHIFT = 6;
const LINE1_SHIFT = 45;

const LINE2_BOUNCE_DURATION = C.LINE1_DURATION/2;
const LINE3_BOUNCE_DURATION = C.LINE1_DURATION;


const COLLIDE_DURATION = .25 * C.LINE1_DURATION;
const BOUNCE_DURATION  = C.LINE1_DURATION - COLLIDE_DURATION;

const CIRCLE_RADIUS = 48;
const LINE_HEIGHT   = 176/2;

const opts = {
  shape:        'line',
  stroke:       COLORS.YELLOW,
  strokeWidth:  3,
  radius:       LINE_HEIGHT,
  left:         '50%', top: '50%',
  origin:       '0 50%',
  angle:        { [ 90 - LINE1_SHIFT ] : 90 },
  easing:       'cubic.in',
  isShowStart:  true,
  y:           -2*LINE_HEIGHT
};

class Demo extends Module {
  /*
    Method for initial module's render.
    @private
  */
  _render () {
    super._render();

    this.el.classList.add( 'scene' );
    opts.parent = this.el;

    const BASE_SHIFT = 2.6*LINE_HEIGHT;

    const line = new mojs.Shape({
        ...opts,
        x:          BASE_SHIFT,
        duration:   C.LINE1_DURATION
      })
      .then({
        angle: 90 - LINE1_SHIFT,
        delay: 2*C.LINE1_DURATION,
        easing: 'cubic.out'
      });

    const ball1 = new Ball1({ parent: line.el });

    // line.el.parentNode.style[ 'backface-visibility' ] = 'hidden';
    // line.el.parentNode.style[ '-webkit-backface-visibility' ] = 'hidden';

    const bounceReturn = {
      angle:      90,
      duration:   BOUNCE_DURATION,
      easing:     'bounce.out'
    }

    const line2 = new mojs.Shape({
      ...opts,
      easing:       'cubic.out',
      x:            BASE_SHIFT - 2*CIRCLE_RADIUS,
      angle:        { 90 : 90 + LINE2_SHIFT },
      delay:        C.LINE1_DURATION,
      duration:     COLLIDE_DURATION,
    })
    .then(bounceReturn)
    .then({
      angle:      90 - LINE3_SHIFT,
      duration:   COLLIDE_DURATION,
      delay:      C.LINE1_DURATION,
      easing:     'cubic.out'
    })
    .then(bounceReturn);

    const ball2 = new Ball2({ parent: line2.el });

    const line3 = new mojs.Shape({
      ...opts,
      easing:       'cubic.out',
      x:            BASE_SHIFT - 4*CIRCLE_RADIUS,
      angle:        { 90 : 90 + LINE3_SHIFT },
      delay:        C.LINE1_DURATION,
      duration:     COLLIDE_DURATION,
    })
    .then(bounceReturn)
    .then({
      angle:      90 - LINE2_SHIFT,
      duration:   COLLIDE_DURATION,
      delay:      C.LINE1_DURATION,
      easing:     'cubic.out'
    })
    .then(bounceReturn);
    const ball3 = new Ball3({ parent: line3.el });

    const line4 = new mojs.Shape({
      ...opts,
      x:            BASE_SHIFT - 6*CIRCLE_RADIUS,
      angle:        { 90 : 90 + LINE1_SHIFT },
      easing:       'cubic.out',
      duration:     C.LINE1_DURATION,
      delay:        C.LINE1_DURATION,
    })
    .then({  angle: 90, easing: 'cubic.in', duration: C.LINE1_DURATION });
    // line4.el.classList.add( LINE_CLASSES.line );
    const ball4 = new Ball4({ parent: line4.el });

    const shadowOpts = {
      fill:         COLORS.BLACK,
      opacity:      .15,
      radiusX:      47,
      radiusY:      7,
      parent:       this.el,
      left:         '61%',
      top:          '90%',
      isShowStart:  true,
      easing:       'cubic.out',
      x:            { 0: -4*LINE3_SHIFT },
      delay:        C.LINE1_DURATION,
      duration:     COLLIDE_DURATION,
    }

    const shadowBounce = {
      ...bounceReturn,
      angle:      0,
      x:          0
    }
    
    const shadow2 = new mojs.Shape(shadowOpts)
      .then(shadowBounce)
      .then({
        ...shadowOpts,
        x:  { 0: 4*LINE3_SHIFT },
      })
      .then(shadowBounce);

    const shadow3Opts = {
      ...shadowOpts,
      left:         '37%',
    }
    const shadow3 = new mojs.Shape(shadow3Opts)
      .then(shadowBounce)
      .then({
        ...shadow3Opts,
        x:  { 0: 4*LINE3_SHIFT },
      })
      .then(shadowBounce);

    const shadow1Opts = {
      ...shadowOpts,
      left:       '85%',
      x:          { [3.75*LINE1_SHIFT] : 0 },
      duration:   C.LINE1_DURATION,
      easing:     'cubic.in',
      opacity:    {.03 : .15},
      delay:      0
    }

    const shadow1 = new mojs.Shape(shadow1Opts)
      .then({
        delay: 2 * C.LINE1_DURATION,
        x: 3.75*LINE1_SHIFT,
        opacity: .03,
        easing: 'cubic.out'
      });

    const shadow4 = new mojs.Shape({
      ...shadow1Opts,
      delay: C.LINE1_DURATION,
      left: '13%',
      x:   { 0 : -3.75*LINE1_SHIFT },
      easing: 'cubic.out',
      opacity:  {.15 : .03},
    })
      .then({
        delay: 0,
        x: 0,
        opacity: .15,
        easing: 'cubic.in'
      });

    const mainTimeline = new mojs.Timeline();

    mainTimeline.add(
      line, line2, line3, line4,
      ball1, ball2, ball3, ball4,
      shadow1, shadow2, shadow3, shadow4,
    )
      // .play();

    ;( new MojsPlayer({ add: mainTimeline }) )
      .el.style[ 'z-index' ] = 10;

  }
}

new Demo;

// if ( (typeof define === "function") && define.amd ) {
//   define(function () { return MojsPlayer; });
// }
// if ( (typeof module === "object") && (typeof module.exports === "object") ) {
//   module.exports = MojsPlayer;
// }

// let _global = ( typeof global !== 'undefined' ) ? global : window;
// _global.MojsPlayer = MojsPlayer;

export default Demo;