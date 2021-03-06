import Ball        from './ball';
// import Trail       from './trail';
// import RightTrail  from './right-trail';
// import Collision   from './collision';
import COLORS      from './colors';
import C           from './constants';

require('../../css/blocks/ball.postcss.css');

class Ball4 extends Ball {
  /*
    Method for initial module's render.
    @private
  */
  _render () {
    super._render();
    this.el.classList.add( 'ball--4' );

    const timeline = new mojs.Timeline,
      startAngle = 0,
      endAngle = 25,
      dashStart = '30% 100%',
      easing = mojs.easing.path('M0,100 L15,100 C47.3046875,-362.261716 100,5.68434189e-14 100,5.68434189e-14'),
      scaleSize = .35;

    this.face.style[ 'backface-visibility' ] = 'hidden';
    this.face.style[ `${mojs.h.prefix.css}backface-visibility` ] = 'hidden';
    
    const mouth = new mojs.Shape({
      fill:             'none',
      stroke:           COLORS.BLACK,
      strokeWidth:      3,
      isShowStart:      true,
      parent:           this.el,
      radius:           13,
      radiusX:          14,
      left:             '50%',
      top:              75,
      duration:         C.LINE1_DURATION/2,
      delay:            C.LINE1_DURATION,
      strokeDasharray:  { [ dashStart ]: '10% 100%' },
      strokeDashoffset: '-60%',
      angle:            { [startAngle] : endAngle },
      strokeLinecap:    'round',
      onUpdate: (pe, p) => {
        this.face.style[ 'transform' ] = `
          translateX(${ -10*pe }px)
          scaleY( ${ 1 - ( scaleSize*pe ) }  )
          `
      }
    }).then({
      angle:            startAngle,
      delay:            C.LINE1_DURATION,
      strokeDasharray:  dashStart,
      onUpdate: (pe, p) => {
        let proc = easing(p);
        this.face.style[ 'transform' ] = `
          translateX(${ -10*(1-p) }px)
          scaleY( ${ (1-scaleSize) + ( scaleSize*proc ) }  )
          `
      }
    });

    return timeline.add(
      mouth,
      // (new Trail({ parent: this.el, delay: 2.7*C.LINE1_DURATION })),
      // (new RightTrail({ parent: this.el, delay: 1.1*C.LINE1_DURATION })),
      // new Collision({ parent: this.el, delay: 3*C.LINE1_DURATION })
    );
  }
}

export default Ball4;