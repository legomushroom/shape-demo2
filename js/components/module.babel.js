/*
  Base class for all modules.
  Extends _defaults to _props
*/
class Module {
  /*
    constructor method calls scaffolding methods.
  */
  constructor ( o = {} ) {
    this._o     = o;
    this._index = this._o.index || 0;
    this._declareDefaults();
    this._extendDefaults();
    this._vars()
    return this._render();
  }
  /*
    Method to declare defaults.
    @private
  */
  _declareDefaults () {
    this._defaults = {
      className:  '',
      parent:     document.body,
      delay:      0,
    };
  }
  /*
    Method to add pointer down even listener to el.
    @param {Object}   HTMLElement to add event listener on.
    @param {Function} Event listener callback.
  */
  _addPointerDownEvent (el, fn) {
    if (window.navigator.msPointerEnabled) {
        el.addEventListener('MSPointerDown', fn);
      } else if ( window.ontouchstart !== undefined ) {
        el.addEventListener('touchstart', fn);
        el.addEventListener('mousedown', fn);
      } else {
        el.addEventListener('mousedown', fn);
      }
  }
  /*
    Method to add pointer up even listener to el.
    @param {Object}   HTMLElement to add event listener on.
    @param {Function} Event listener callback.
  */
  _addPointerUpEvent (el, fn) {
    if (window.navigator.msPointerEnabled) {
      el.addEventListener('MSPointerUp', fn);
    } else if ( window.ontouchstart !== undefined ) {
      el.addEventListener('touchend', fn);
      el.addEventListener('mouseup', fn);
    } else {
      el.addEventListener('mouseup', fn);
    }
  }
  /*
    Method to check if variable holds link to a function.
    @param {Function?} A variable to check.
    @returns {Boolean} If passed variable is a function.
  */
  _isFunction ( fn ) { return ( typeof fn === 'function' ); }
  /*
    Method to a function or silently fail.
    @param {Function?} A variable to check.
    @param {Array like} Arguments.
  */
  _callIfFunction ( fn ) {
    Array.prototype.shift.call( arguments );
    this._isFunction( fn ) && fn.apply( this, arguments );
  }
  /*
    Method to declare module's variables.
    @private
  */
  _vars () { }
  /*
    Method to render on initialization.
    @private
  */
  _render () { this._addMainElement(); }
  /*
    Method to add `this.el` on the module.
    @private
    @param {String} Tag name of the element.
  */
  _addMainElement ( tagName = 'div' ) {
    let p = this._props;

    this.el = this._createElement( tagName );
    this._addMainClasses();

    let method = ( p.isPrepend ) ? 'prepend' : 'append' ;
    this[ `_${ method }Child` ]( p.parent, this.el );
  }
  /*
    Method to classes on `this.el`.
    @private
  */
  _addMainClasses () {
    let p = this._props;
    if ( p.className instanceof Array ) {
      for (var i = 0; i < p.className.length; i++) {
        this._addClass( this.el, p.className[i] );
      }
    } else { this._addClass( this.el, p.className ); }
  }
  /*
    Method to add a class on el.
    @private
    @param {Object} HTML element to add the class on.
    @param {String} Class name to add.
  */
  _addClass ( el, className ) { className && el.classList.add( className ); }
  /*
    Method to set property on the module.
    @private
    @param {String, Object} Name of the property to set
                            or object with properties to set.
    @param {Any} Value for the property to set. Could be
                  undefined if the first param is object.
  */
  _setProp ( attr, value ) {
    if ( typeof attr === 'object' ) {
      for ( var key in attr ) { this._assignProp( key, attr[key] ); }
    } else { this._assignProp( attr, value ); }
  }
  /*
    Method to assign single property's value.
    @private
    @param {String} Property name.
    @param {Any}    Property value.
  */
  _assignProp ( key, value ) {
    this._props[key] = value;
  }
  /*
    Method to copy `_o` options to `_props` object
    with fallback to `_defaults`.
    @private
  */
  _extendDefaults ( ) {
    this._props  = {};
    // this._deltas = {};
    for (var key in this._defaults) {
      let value = this._o[key];
      // copy the properties to the _o object
      this._assignProp( key, ( value != null ) ? value : this._defaults[key] );
    }
  }
  /*
    Method to create HTMLElement from tag name.
    @private
    @param {String} Name of the tag to create `HTML` element.
    @returns {Object} HtmlElement.
  */
  _createElement ( tagName ) { return document.createElement( tagName ); }
  /*
    Method to create HTMLElement and append it to the `el` with a className.
    @private
    @param {String} The tagname for the HTMLElement.
    @param {String} Optional class name to add to the new child.
    @returns {Object} The newely created HTMLElement.
  */
  _createChild ( tagName, className ) {
    let child = this._createElement( 'div' );

    if ( className ) {
      let classes = className.split( ' ' );
      for (var i = 0; i < classes.length; i++) {
        child.classList.add( classes[i] )
      }
    }
    
    this.el.appendChild( child );
    return child;
  }
  /*
    Method to prepend child to the el.
    @private
    @param {Object} Parent HTMLElement.
    @param {Object} Child HTMLElement.
  */
  _appendChild ( el, childEl ) { el.appendChild( childEl ); }
  /*
    Method to prepend child to the el.
    @private
    @param {Object} Parent HTMLElement.
    @param {Object} Child HTMLElement.
  */
  _prependChild ( el, childEl ) { el.insertBefore(childEl, el.firstChild); }
  /*
    Method to toggle opacity based on passed boolean.
    @private
    @param {Object} HTML element.
    @param {Boolean} Show/hide element.
  */
  _toggleOpacity ( el, isShow ) {
    el.style.opacity = ( isShow ) ? 1 : 0;
  }
  /*
    Method to find an element on the page by selector.
    @private
    @param {String} Selector.
    @returns {Object, Null} `Html` element or `null`.
  */
  _findEl ( selector ) {
    return document.querySelector( selector );
  }
  /*
    Method to get window width.
    @private
    @returns Window width.
  */
  _getWindowWidth () {
    let w     = window,
        width = w.innerWidth || e.clientWidth || g.clientWidth;

    return width;
  }
  /*
    Method to get window width.
    @private
    @returns Window width.
  */
  _getWindowHeight () {
    let w      = window,
        height = w.innerHeight || e.clientHeight || g.clientHeight;

    return height;
  }
   /*
    Method to get max window size.
    @private
    @returns Max window size.
  */
  _getWindowSize () {
    return Math.max( this._getWindowWidth(), this._getWindowHeight() );
  }
}

export default Module;