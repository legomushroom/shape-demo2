import Module from './module';
import COLORS from './colors';

class GreenScene extends Module {
  /*
    Method for initial module's render.
    @private
  */
  _render () {
    super._render();
    let greenBg = document.querySelector('#js-green-bg'),
        timeline = new mojs.Timeline({
          delay: this._props.delay,
          onStart:(isFwd) => { this._toggleOpacity( greenBg, isFwd ); },
          onComplete: (isFwd) => { this._toggleOpacity( greenBg, !isFwd ); }
        });

    greenBg.style[ 'background' ] = COLORS.GREEN;

    let pinkSquare = new mojs.Transit({
      left: '50%', top: '50%',
      shape:        'rect',
      stroke:       COLORS.HOTPINK,
      strokeWidth:  40,
      angle:        { '-240': 0 },
      radius:       20,
      scale:        { 0 : 2 },
      duration:     1500,
      fill:         'none',
      easing:       'expo.out',
      parent:       greenBg,
    });

    this.trailOpts = {
      left: '48%', top: '-14%',
      shape:          'circle',
      stroke:         'white',
      strokeWidth:    { 5 : 0 },
      fill:           'none',
      radius:         25,
      radiusX:        20,
      angle:          -110,
      duration:       1250,
      delay:          200,
      parent:         pinkSquare.el,
      strokeLinecap:  'round',
      strokeDasharray: '20% 300%',
      strokeDashoffset: {'-75%': '-100%'},
    }
    
    return timeline.add(
      pinkSquare,
      this._addTrail1( pinkSquare ),
      this._addTrail2( pinkSquare ),
      this._addTrail3( pinkSquare ),
      this._addTrail4( pinkSquare )
    );
  }
  /*
    Method to add trail.
    @private
    @returns {Array(Object)} Array of `Transits`.
  */
  _addTrail1 ( pinkSquare ) {
    let trail1 = new mojs.Transit(this.trailOpts);

    this.trailOpts.angle = -140;
    this.trailOpts.top = '-22%';
    this.trailOpts.left = '25%';
    this.trailOpts.radius = 15;
    this.trailOpts.radiusX = 10;
    let trail2 = new mojs.Transit(this.trailOpts);

    // this.trailOpts.stroke = 'red';
    this.trailOpts.angle = -100;
    this.trailOpts.top = '-16%';
    this.trailOpts.left = '39%';
    this.trailOpts.radius = 10;
    this.trailOpts.radiusX = 7;
    let trail3 = new mojs.Transit(this.trailOpts);

    return [ trail1, trail2, trail3 ];
  }
  /*
    Method to add trail.
    @private
    @returns {Array(Object)} Array of `Transits`.
  */
  _addTrail2 ( pinkSquare ) {
    this.trailOpts.angle   = -30;
    this.trailOpts.left    = '122%';
    this.trailOpts.top     = '35%';
    this.trailOpts.radius  = 20;
    this.trailOpts.radiusX = 15;
    let trail1 = new mojs.Transit(this.trailOpts);

    this.trailOpts.angle   = -55;
    this.trailOpts.left    = '122%';
    this.trailOpts.top     = '19%';
    this.trailOpts.radius  = 12;
    this.trailOpts.radiusX = 10;
    let trail2 = new mojs.Transit(this.trailOpts);

    this.trailOpts.angle   = -10;
    this.trailOpts.left    = '113%';
    this.trailOpts.top     = '30%';
    this.trailOpts.radius  = 12;
    this.trailOpts.radiusX = 11;
    let trail3 = new mojs.Transit(this.trailOpts);

    return [ trail1, trail2, trail3 ];
  }
  /*
    Method to add trail.
    @private
    @returns {Array(Object)} Array of `Transits`.
  */
  _addTrail3 ( pinkSquare ) {
    this.trailOpts.angle   = 60;
    this.trailOpts.left    = '63%';
    this.trailOpts.top     = '121%';
    this.trailOpts.radius  = 17;
    this.trailOpts.radiusX = 14;
    // this.trailOpts.strokeDasharray = '';
    let trail1 = new mojs.Transit(this.trailOpts);

    this.trailOpts.angle   = 38;
    this.trailOpts.left    = '78%';
    this.trailOpts.top     = '122%';
    this.trailOpts.radius  = 12;
    this.trailOpts.radiusX = 10;
    let trail2 = new mojs.Transit(this.trailOpts);

    this.trailOpts.angle   = 70;
    this.trailOpts.left    = '63%';
    this.trailOpts.top     = '114%';
    this.trailOpts.radius  = 10;
    this.trailOpts.radiusX = 8;
    let trail3 = new mojs.Transit(this.trailOpts);

    return [ trail1, trail2, trail3 ];
  }
  /*
    Method to add trail.
    @private
    @returns {Array(Object)} Array of `Transits`.
  */
  _addTrail4 ( pinkSquare ) {
    this.trailOpts.angle   = 155;
    this.trailOpts.left    = '-16%';
    this.trailOpts.top     = '62%';
    this.trailOpts.radius  = 20;
    this.trailOpts.radiusX = 18;
    // this.trailOpts.strokeDasharray = '';
    let trail1 = new mojs.Transit(this.trailOpts);

    this.trailOpts.angle   = 160;
    this.trailOpts.left    = '-10%';
    this.trailOpts.top     = '70%';
    this.trailOpts.radius  = 10;
    this.trailOpts.radiusX = 12;
    let trail2 = new mojs.Transit(this.trailOpts);

    this.trailOpts.angle   = 125;
    this.trailOpts.left    = '-14%';
    this.trailOpts.top     = '85%';
    this.trailOpts.radius  = 8;
    this.trailOpts.radiusX = 10;
    // this.trailOpts.stroke = 'deeppink';
    let trail3 = new mojs.Transit(this.trailOpts);

    return [ trail1, trail2, trail3 ];
    // return [ trail1, trail2, trail3 ];
  }
}

export default GreenScene;