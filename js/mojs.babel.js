import h            from './h';
import shapesMap    from './shapes/shapesMap';
import Shape        from './shape';
import ShapeSwirl   from './shape-swirl';
import Burst        from './burst';
import Html         from './html';
import stagger      from './stagger';
import Spriter      from './spriter';
import MotionPath   from './motion-path';
import Tween        from './tween/tween';
import Timeline     from './tween/timeline';
import Tweener      from './tween/tweener';
import Tweenable    from './tween/tweenable';
import Thenable     from './thenable';
import Tunable      from './tunable';
import Delta        from './delta/delta';
import Deltas       from './delta/deltas';
import Module       from './module';
import tweener      from './tween/tweener';
import easing       from './easing/easing';

var mojs = {
  revision:   '0.270.0', isDebug: true, helpers: h,
  Shape, ShapeSwirl, Burst, Html, stagger, Spriter, MotionPath,
  Tween, Timeline, Tweenable, Thenable, Tunable, Module,
  tweener, easing, shapesMap, _pool: { Delta, Deltas }
}

// functions alias
mojs.h        = mojs.helpers;
mojs.delta    = mojs.h.delta;
// custom shape add function and class
mojs.addShape    = mojs.shapesMap.addShape;
mojs.CustomShape = mojs.shapesMap.custom;
// module alias
mojs.Transit = mojs.Shape;
mojs.Swirl   = mojs.ShapeSwirl;

window.mojs = mojs;

// TODO:
/*
  performance

  rand for direction
  burst children angle after tune
  burst pathScale after tune
  swirl then issue
  'rand' angle flick with `then`
  not able to `play()` in `onComplete` callback
  ---
  module names
  swirls in then chains for x/y
  parse rand(stagger(20, 10), 20) values
  percentage for radius
*/

// const html = new mojs.Html({
//   el: document.querySelector('#js-el'),
//   // x:  { 0: 200 },
//   // borderRadius: { 0: 10 },
//   // backgroundColor: { 'cyan' : 'yellow' },
//   borderRadius: 25,
//   rotate: { 90: 180 },
//   transformOrigin: '500% 100%',
//   // skewX: { 0: 10 },
//   // transformOrigin: { '500% 100%' : '50% 100%' },
//   // scaleX: { 1: 0 },
//   // opacity:  { 1 : 0 },
//   // timeline: { delay: 5000 },
//   delay: 5000,
//   duration: 4000
// });

// new MojsPlayer({ add: html });

// istanbul ignore next
if ( (typeof define === "function") && define.amd ) {
  define("mojs", [], function () { return mojs; });
}
// istanbul ignore next
if ( (typeof module === "object") && (typeof module.exports === "object") ) {
  module.exports = mojs;
}
