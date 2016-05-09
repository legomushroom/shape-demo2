import Polyfill       from 'classlist-polyfill';
import MojsPlayer     from 'mojs-player'
import Module         from './components/module';
import TriangleLines  from './components/triangle-lines';
import Triangles      from './components/triangles';
import GreenScene     from './components/green-scene';
import Circle         from './components/circle';
import Logo           from './components/logo';

// require('css/blocks/mojs-player.postcss.css');
// let CLASSES = require('css/blocks/mojs-player.postcss.css.json');

const LINE2_SHIFT = 15;
const LINE3_SHIFT = 20;
const LINE1_SHIFT = 2*LINE3_SHIFT;

const LINE1_DURATION = 300
const LINE2_BOUNCE_DURATION = LINE1_DURATION/2;
const LINE3_BOUNCE_DURATION = LINE1_DURATION/3;


const COLLIDE_DURATION = .25 * LINE1_DURATION;
const BOUNCE_DURATION  = LINE1_DURATION - COLLIDE_DURATION;

const CIRCLE_RADIUS = 50;
const LINE_HEIGHT   = 1.5*CIRCLE_RADIUS;

const opts = {
  shape:        'line',
  stroke:       'white',
  radius:       LINE_HEIGHT,
  left:         '50%', top: '50%',
  origin:       '0 50%',
  angle:        { [ 90 - LINE1_SHIFT ] : 90 },
  easing:       'cubic.in',
  isShowStart:  true,
  y:           -2*LINE_HEIGHT
};

const circleOpts = {
  fill:         'none',
  stroke:       'white',
  radius:       CIRCLE_RADIUS,
  shape:        'circle',
  isShowStart:  1,
  top:          '50%',
  left:         '100%',
  x:            CIRCLE_RADIUS,
}

class Demo extends Module {
  /*
    Method for initial module's render.
    @private
  */
  _render () {
    const mainTimeline = ( new mojs.Timeline({
      onComplete () {
        // collision1.tune({
        //   childOptions: {
        //     pathScale: 'rand(.25, 1)'
        //   }
        // });
      }
    }) );

    const line = new mojs.Shape({
        ...opts,
        x:          2*LINE_HEIGHT,
        duration:   LINE1_DURATION
      })
      .then({
        angle: 90 - LINE1_SHIFT,
        delay: 2*LINE1_DURATION,
        easing: 'cubic.out'
      });

    const circle1 = this._addCircle( line );

    const bounceReturn = {
      angle:      90,
      duration:   BOUNCE_DURATION,
      easing:     'bounce.out'
    }

    const line2 = new mojs.Shape({
      ...opts,
      easing:       'cubic.out',
      x:            2*LINE_HEIGHT - 2*CIRCLE_RADIUS,
      angle:        { 90 : 90 + LINE2_SHIFT },
      delay:        LINE1_DURATION,
      duration:     COLLIDE_DURATION,
    })
    .then(bounceReturn)
    .then({
      angle:      90 - LINE3_SHIFT,
      duration:   COLLIDE_DURATION,
      delay:      LINE1_DURATION,
      easing:     'cubic.out'
    })
    .then(bounceReturn)
    this._addCircle( line2 );

    const line3 = new mojs.Shape({
      ...opts,
      easing:       'cubic.out',
      x:            2*LINE_HEIGHT - 4*CIRCLE_RADIUS,
      angle:        { 90 : 90 + LINE3_SHIFT },
      delay:        LINE1_DURATION,
      duration:     COLLIDE_DURATION,
    })
    .then(bounceReturn)
    .then({
      angle:      90 - LINE2_SHIFT,
      duration:   COLLIDE_DURATION,
      delay:      LINE1_DURATION,
      easing:     'cubic.out'
    })
    .then(bounceReturn);
    this._addCircle( line3 );

    const line4 = new mojs.Shape({
      ...opts,
      x:            2*LINE_HEIGHT - 6*CIRCLE_RADIUS,
      angle:        { 90 : 90 + LINE1_SHIFT },
      easing:       'cubic.out',
      duration:     LINE1_DURATION,
      delay:        LINE1_DURATION,
    })
    .then({  angle: 90, easing: 'cubic.in', duration: LINE1_DURATION });
    
    const circle4 = this._addCircle( line4 );

    mainTimeline.add( line, line2, line3, line4 );

    ;( new MojsPlayer({ add: mainTimeline }) )
      .el.style[ 'z-index' ] = 10;
  }

  /*
    Method to add a circle inside a module's el.
    @private
    @param {Object} Shape module instance.
  */
  _addCircle ( module ) {
    return new mojs.Shape({
      ...circleOpts,
      parent:  module.el,
    });
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