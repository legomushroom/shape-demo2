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

    const SwirlStagger = mojs.stagger( mojs.ShapeSwirl );
    const dust = new SwirlStagger({
      parent:  this.el,
      quantifier:  7,
      isShowStart: true,
      radius: 20,
      top: '100%',
      left: '50%',
      fill: 'white',
      radius: 'rand(3, 15)',
      scale: { 1: 0 },
      isForce3d: true,
      isTimelineLess: true,
      delay: `stagger(${ p.delay }, 45)`,
      x: { 0: 70*p.direction },
      y: { 0: -20 },
      direction: this._props.direction,
      swirlFrequency: 1,
      swirlSize: 50,
    });

    const dustTrail = new SwirlStagger({
      parent:  this.el,
      quantifier:  2,
      isShowStart: true,
      radius: 20,
      top: '100%',
      left: '50%',
      fill: 'white',
      radius: 'rand(3, 15)',
      scale: { 1: 0 },
      delay: `stagger(${ p.delay + 200 }, 45)`,
      x: { 0: 70*p.direction },
      y: { 0: -20 },
      direction: [this._props.direction, -1*this._props.direction],
      pathScale: [ 1, .75 ],
      isTimelineLess: true,
      isForce3d: true,
    });

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