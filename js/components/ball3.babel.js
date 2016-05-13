import Ball   from './ball';
import COLORS from './colors';
import C      from './constants';

require('../../css/blocks/ball.postcss.css');
// let CLASSES = require('../../css/blocks/ball.postcss.css.json');

class Ball3 extends Ball {
  /*
    Method for initial module's render.
    @private
  */
  _render () {
    super._render();
    this.el.classList.add( 'ball--3' );

    this.eye1 = this._createChild( 'div', 'ball__eye ball__eye--1' );
    this.eye2 = this._createChild( 'div', 'ball__eye ball__eye--2' );

    this.timeline = new mojs.Timeline;

    const mouth = new mojs.Shape({
      stroke:       COLORS.BLACK,
      strokeWidth:  3,
      strokeLinecap: 'round',
      fill:         'none',
      radius:       6,
      radiusX:      11,
      isShowStart:  true,
      isShowEnd:    true,
      parent:       this.el,
      left:         '52%',
      top:          '80%',
      strokeDasharray: '35% 100%',
      // strokeDashoffset: {'85%' : '75%' },
      strokeDashoffset: '85%',
      angle:        { 0: 20 },
      x:            { 0: 5 },
      scaleX:       { 1: .85 },
      duration:     C.LINE1_DURATION/4,
      delay:        C.LINE1_DURATION,
    }).then({
      angle:        0,
      x:            0,
      scaleX:       1,
      delay:        1.75*C.LINE1_DURATION,
    });

    this.timeline.add(
      this._addEyes(), this._addEyeBrows(), this._addEyeLids(),
      mouth
    );
  }
  /*
    Method to describe eyes motion.
    @private
  */
  _addEyes () {

    const EYE_DURATION = 50;
    const radiusX = 5;
    const opts = {
      parent:       this.eye1,
      radius:       radiusX,
      radiusY:      radiusX + 1,
      fill:         COLORS.BLACK,
      x:            { [-radiusX]: radiusX },
      y:            1,
      delay:        C.LINE1_DURATION,
      duration:     EYE_DURATION,
      easing:       'expo.out',
      isShowStart:  true,
      top:          '53%',
      left:         '50%',
    }

    const returnOpts = {
      delay:    (2*C.LINE1_DURATION) - EYE_DURATION,
      x:        -radiusX
    }

    const eye1 = new mojs.Shape({
      ...opts,
      // left:     '23.5%'
    }).then(returnOpts);

    const eye2 = new mojs.Shape({
      ...opts,
      parent:   this.eye2,
      // left:     '69.5%'
    }).then(returnOpts);

    return [ eye1, eye2 ];
  }
  /*
    Method to describe eyebrows motion.
    @private
  */
  _addEyeBrows () {
    const xShift = 8;
    const duration = 50;

    const browOpts = {
      shape:        'arc',
      stroke:       COLORS.BLACK,
      strokeWidth:  3,
      strokeLinecap: 'round',
      fill:         'none',
      radiusY:      2,
      radiusX:      6,
      angle:        135,
      isShowStart:  true,
      isShowEnd:    true,
      parent:       this.el,
      left:         '25%',
      top:          '28%',
      x:            { 0:  xShift },
      y:            { 0:  xShift/2 },
      duration:     duration,
      delay:        C.LINE1_DURATION,
    }
    const brow1 = new mojs.Shape(browOpts)
      .then({
        x:            -xShift/4,
        y:            0,
        delay:        2*C.LINE1_DURATION - duration,
      });

    const brow2 = new mojs.Shape({
      ...browOpts,
      angle:        -browOpts.angle,
      left:         '79%',
      top:          '28%',
      x:            { 0:  xShift/4 },
      y:            0,
    }).then({
      x:            -xShift,
      delay:        2*C.LINE1_DURATION - duration,
    });

    return [ brow1, brow2 ];
  }
  /*
    Method to describe eyelids motion.
    @private
  */
  _addEyeLids () {
    const yShift = 5;
    const duration = 50;

    const lidOpts = {
      shape:        'rect',
      // stroke:       COLORS.BLACK,
      // strokeWidth:  3,
      // strokeLinecap: 'round',
      fill:         COLORS.BLACK,
      radius:       10,
      // angle:        135,
      isShowStart:  true,
      isShowEnd:    true,
      parent:       this.eye1,
      left:         '50%',
      top:          '-17%',
      y:            { [yShift]: 0 },
      duration:     duration,
      delay:        C.LINE1_DURATION,
    }
    const lid1 = new mojs.Shape(lidOpts)
      .then({
        y:            yShift,
        delay:        2*C.LINE1_DURATION - duration,
      });

    const lid2 = new mojs.Shape({
      ...lidOpts,
      parent:       this.eye2,
    }).then({
      y:            yShift,
      delay:        2*C.LINE1_DURATION - duration,
    });

    return [ lid1, lid2 ];
  }
}

export default Ball3;