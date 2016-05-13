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

    this.timeline = new mojs.Timeline;

    this.timeline.add( this._addEyes(), this._addEyeBrows() );
  }
  /*
    Method to describe eyes motion.
    @private
  */
  _addEyes () {

    const EYE_DURATION = 50;
    const opts = {
      parent:       this.face,
      radius:       5,
      fill:         COLORS.BLACK,
      x:            { 0: 9 },
      delay:        C.LINE1_DURATION,
      duration:     EYE_DURATION,
      easing:       'expo.out',
      isShowStart:  true,
      top:          '53%',
    }

    const returnOpts = {
      delay:    (2*C.LINE1_DURATION) - EYE_DURATION,
      x:        0
    }

    const eye1 = new mojs.Shape({
      ...opts,
      left:     '23.5%'
    }).then(returnOpts);

    const eye2 = new mojs.Shape({
      ...opts,
      left:     '69.5%'
    }).then(returnOpts);

    return [ eye1, eye2 ];
  }
  /*
    Method to describe eyebrows motion.
    @private
  */
  _addEyeBrows () {



    const dScale = .1;
    const dY     = 4;
    const opts  = {
      duration:   100,
      easing:     'cubic.out'
    }
    const tw1 = new mojs.Tween({
      delay: C.LINE1_DURATION,
      ...opts,
      onUpdate: (ep, p) => {
        this.face2.style[ 'transform' ] = `
          scaleX(${ 1 - (dScale*ep) })
          translateY(${ dY*ep }px)
          `;
      }
    });

    const tw2 = new mojs.Tween({
      delay: 3*C.LINE1_DURATION,
      ...opts,
      onUpdate: (ep, p) => {
        this.face2.style[ 'transform' ] = `
          scaleX(${ (1-dScale) + (dScale*ep) })
          translateY(${ dY*(1-ep) }px)
          `;
      }
    });


    return [ tw1, tw2 ];
  }
}

export default Ball3;