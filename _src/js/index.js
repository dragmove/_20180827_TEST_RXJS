import $ from 'jquery';
import { fromEvent } from 'rxjs';

(function() {
  'use strict';

  let trans = {
    x: 0,
    y: 0,
    rotate: 45
  };

  const $map = $('#map'),
    $card = $('.card');

  // const log = val => console.log(val);

  const down$ = fromEvent(document, 'mousedown');
  const up$ = fromEvent(document, 'mouseup');
  // const move$ = fromEvent(document, 'mousemove');

  $(document).ready(init);

  function init() {
    down$.subscribe(evt => {
      console.log('x, y :', evt.pageX, evt.pageY);

      const pageX = evt.pageX,
        pageY = evt.pageY;

      const mapX = $map.attr('data-x') || 0,
        mapY = $map.attr('data-y') || 0;

      $map.addClass('down');
    });

    up$.subscribe(evt => {
      console.log('up evt :', evt);
    });
  }

  /*
  function update() {
    trans.x += 1;
    trans.y += 1;
    trans.rotate += 0.05;

    transform($card, trans);

    window.requestAnimationFrame(() => {
      update();
    });
  }

  function transform($obj, trans = { x: 0, y: 0, rotate: 0 }) {
    $obj.css({
      transform: `translateX(${trans.x}px) translateY(${trans.y}px) rotate(${
        trans.rotate
      }deg)`
    });
  }
  */
})();
