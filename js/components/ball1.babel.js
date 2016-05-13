import Ball        from './ball';
import Trail       from './trail';
import RightTrail  from './right-trail';
import COLORS      from './colors';
import C            from './constants';

require('../../css/blocks/ball.postcss.css');
// let CLASSES = require('../../css/blocks/ball.postcss.css.json');

class Ball2 extends Ball {
  /*
    Method for initial module's render.
    @private
  */
  _render () {
    super._render();
    this.el.classList.add( 'ball--1' );

    this.eye1 = this._createChild( 'div', 'ball__eye ball__eye--1' );
    this.eye2 = this._createChild( 'div', 'ball__eye ball__eye--2' );

    this.timeline = new mojs.Timeline();

    this.timeline.add(
      this._addEyes(),
      this._addMouth()
    );

  }
  _addEyes () {
    const eyeX = -5;
    const opts = {
      parent:       this.eye1,
      fill:         COLORS.BLACK,
      radius:       3,
      scale:        { 1: 2.1 },
      isShowStart:  true,
      top:          '50%',
      left:         '50%',
      x:            { [eyeX] : 0 },
      y:            1,
      easing:       'expo.in',
      duration:     C.LINE1_DURATION
    }

    const eyeReturn = {
      delay: 2*C.LINE1_DURATION,
      x: eyeX,
      scale: 1
    }

    const eye1 = new mojs.Shape({
      ...opts,
    }).then(eyeReturn);

    const eye2 = new mojs.Shape({
      ...opts,
      parent:       this.eye2,
    }).then(eyeReturn);


    const lidTimeline = new mojs.Timeline({ delay: C.LINE1_DURATION });

    const lidUp = { y: -2 }

    const lidOpts = {
      parent:       this.eye1,
      shape:        'rect',
      fill:         COLORS.BLACK,
      top:          '130%',
      left:         '50%',
      radius:       10,
      // delay:        C.LINE1_DURATION,
      y:            { 0: lidUp.y },
      duration:     40,
      timeline:     {  repeat: 5 }
    }

    const lidReturn = { y: lidUp.y - 5 }

    const lid1 = new mojs.Shape(lidOpts)
      .then(lidReturn)
      .then(lidUp);

    const lid2 = new mojs.Shape({
      ...lidOpts,
      parent:       this.eye2,
    }).then(lidReturn)
      .then(lidUp);

    lidTimeline.add(  lid1, lid2 );

    const yShift = 5;
    const xShift = -3;
    const angle = 35;
    const browOpts = {
      parent:         this.face,
      shape:          'line',
      stroke:         COLORS.BLACK,
      radius:         6,
      angle:          {0: angle},
      left:           '28%',
      top:            '25%',
      y:              { [yShift] : 0},
      x:              { [xShift] : 0},
      strokeWidth:    3,
      strokeLinecap:  'round',
      isShowStart:    true,
      duration:       50,
      delay:          C.LINE1_DURATION
    }

    const brow1 = new mojs.Shape({
      ...browOpts,
      angle:          {0: -angle},
      left:           '74%',
      x:              { [-xShift] : 0},
    })
      .then({
        angle:        0,
        y:            yShift,
        x:            -xShift,
        delay:        2*C.LINE1_DURATION
      });

    const brow2 = new mojs.Shape(browOpts)
      .then({
        angle:        0,
        y:            yShift,
        x:            xShift,
        delay:        2*C.LINE1_DURATION
      });

    return [
      eye1, eye2,
      lidTimeline,
      brow1, brow2
    ];
  }

  _addMouth () {
    const mouthDuration = 50;

    const speechOpts = {
      fill:         COLORS.BLACK,
      radiusX:      2,
      radiusY:      1.5,
      scaleX:       { 1: 2.5 },
      scaleY:       { 1: 3.5 },
      // isShowStart:  true,
      parent:       this.el,
      left:         '53%',
      top:          '77%',
      duration:     mouthDuration,
      delay:        3*C.LINE1_DURATION,
      x:            { 0: -10 }
    }

    const speechReturn = {
      scaleX:       1,
      scaleY:       1,
    }

    const speechMouth1 = new mojs.Shape(speechOpts)
      .then({
        ...speechReturn,
        x:           -8
      })
      .then({
        scaleX:       4,
        scaleY:       2,
        x:           -6
      })
      .then(speechReturn)
      .then({
        scaleX:       3,
        scaleY:       4.5,
      })
      .then({
        ...speechReturn,
        isShowEnd:    false
      });

    const speechMouth2 = new mojs.Shape({
      ...speechOpts,
      x:            { 0: -12 }
    })
    .then({
      ...speechReturn,
      x:           -10
    })
    .then({
      scaleY:       6,
      scaleX:       3,
      x:           -8
    })
    .then(speechReturn)
    .then({
      scaleY:       4,
      scaleX:       6,
    }).then({
      ...speechReturn,
      isShowEnd:    false
    });

    const noise = mojs.easing.path('M0,100 L24.2114672,99.7029845 L27.0786839,106.645089 L29.2555809,93.3549108 L32.0340385,103.816964 L35.3459816,94.6015626 L38.3783493,103.092634 L41.0513382,95.9547991 L43.7739944,106.645089 L45.6729927,96.8973214 L50,105.083147 L53.3504448,93.3549108 L57.7360497,103.816964 L60.8616066,95.9547991 L65.0345993,103.092634 L68.6997757,97.5106029 L71.6646194,102.03125 L75.5066986,96.5672433 L78.2949219,102.652344 L81.0313873,96.8973214 L84.0174408,102.328264 L86.0842667,97.7332592 L88.7289352,101.606306 L91.1429977,98.3533763 L94.3822556,101.287388 L97.0809174,98.7254467 L100,100');

    const mouthNoize = new mojs.Tween({
      duration: 3*C.LINE1_DURATION,
      onUpdate: ( ep, p ) => {
        let proc = noise(p);
        this.face2.style[ 'transform' ] = `
          translateX(${ 25*proc }px)
          translateY(${ -25*proc }px)
        `;
        this.face.style[ 'transform' ] = `
          translateX(${ -15*proc }px)
          translateY(${ 15*proc }px)
        `;
      }
    });

    const angerMouthBackground = new mojs.Shape({
      fill:       'white',
      shape:      'rect',
      top:        '74%',
      left:       '50%',
      parent:     this.face2,
      radiusY:    { 4: 9.5 },
      easing:     'expo.out',
      radiusX:    18,
      rx:         12,
      duration:   2*C.LINE1_DURATION,
      delay:      C.LINE1_DURATION,
      isShowEnd: false,
    });
    
    const angerMouth = new mojs.Shape({
      fill:         'none',
      shape:        'zigzag',
      angle:       -45,
      top:          '76%',
      left:         '50%',
      stroke:       COLORS.BLACK,
      strokeWidth:  3,
      parent:       this.face2,
      radius:       8,
      points:       4,
      duration:     2*C.LINE1_DURATION,
      delay:        C.LINE1_DURATION,
      isShowEnd:    false
    });

    const disappointMouth = new mojs.Shape({
      stroke:       COLORS.BLACK,
      strokeWidth:  3,
      strokeLinecap: 'round',
      fill:         'none',
      radius:       8,
      radiusX:      10,
      isShowStart:  true,
      isShowEnd:    false,
      parent:       this.el,
      left:         '50%',
      top:          '82%',
      strokeDasharray: '35% 100%',
      strokeDashoffset: '77%',
      duration:     C.LINE1_DURATION,
    });

    return [
      disappointMouth,
      angerMouth, angerMouthBackground, mouthNoize,
      speechMouth1, speechMouth2,
      new Trail({ parent: this.el, delay: 2.95*C.LINE1_DURATION }),
      new RightTrail({ parent: this.el, delay: .5*C.LINE1_DURATION })
    ]
  }
}

export default Ball2;