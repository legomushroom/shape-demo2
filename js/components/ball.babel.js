import Module from './module';
import COLORS from './colors';

require('../../css/blocks/ball.postcss.css');
// let CLASSES = require('../../css/blocks/ball.postcss.css.json');

class Ball extends Module {
  /*
    Method for initial module's render.
    @private
  */
  _render () {
    super._render();
    this.el.classList.add( 'ball' );
    this.face  = this._createChild( 'div', 'ball__inner' );
    this.face2 = this._createChild( 'div', 'ball__inner2' );
    this.face3 = this._createChild( 'div', 'ball__inner3' );
  }
}

export default Ball;