import Module from './module';
import C      from './constants';

class Dust extends Module {

  _declareDefaults () {
    super._declareDefaults();
    this._defaults.right = 0;
    this._defaults.direction = 1;
  }

  _render () {
    super._render();
    const p = this._props;

    this._setStyles();

    const scene = document.querySelector('#js-scene');
    scene.appendChild( this.el );


    const dustOpts = {
      parent:  this.el,
      // isShowStart: true,
      radius: 20,
      top: '100%',
      left: '50%',
      fill: 'white',
      radius: 'rand(3, 15)',
      scale: { 1: 0 },
      isForce3d: true,
      isTimelineLess: true,
      x: { 0: 70*p.direction },
      y: { 0: -20 },
      direction: this._props.direction,
      swirlFrequency: 1,
      swirlSize: 50,
    }

    const dust = new mojs.Timeline;

    for (var i = 0; i < 7; i++) {
      dust.add( new mojs.ShapeSwirl({
          ...dustOpts,
          delay:  p.delay + i*45
        })
      )
    }

    const dustTrail = new mojs.Timeline;

    for (var i = 0; i < 2; i++) {

      let dirCoef   = ( i % 2 === 0 ) ? 1 : -1;
      let direction = dirCoef * this._props.direction;
      let pathScale = ( i % 2 === 0 ) ? 1 : .75;

      dustTrail.add( new mojs.ShapeSwirl({
          ...dustOpts,
          delay:  p.delay + 200 + i*45,
          direction,
          pathScale,
          swirlSize: 10,
          swirlFrequency: 3,
        })
      )
    }

    const dustTween = new mojs.Tween({
      onUpdate: (p) =>  {
        this.el.style[ 'transform' ] =
          `translateX(${-120*p * this._props.direction }px)`;
      },
      delay:    p.delay,
      duration: C.LINE1_DURATION/2
    })

    this.timeline = new mojs.Timeline();
    this.timeline.add( dust, dustTrail, dustTween );
  }
  /*
    Method to set `el` styles.
    @private
  */
  _setStyles () {
    this.el.style[ 'overflow' ] = 'hidden';
    this.el.style[ 'position' ] = 'absolute';
    // this.el.style[ 'border' ] = '1px solid white';
    this.el.style[ 'width' ] = '140px';
    this.el.style[ 'height' ] = '40px';
    this.el.style[ 'backface-visibility' ] = 'hidden';
    this.el.style[ `${mojs.h.prefix.css}backface-visibility` ] = 'hidden';
    this.el.style[ 'bottom' ] = '38px';
    this.el.style[ 'right' ] = this._props.right;
  }
}

export default Dust;