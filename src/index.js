import './style.scss';

// change require to es6 import style
import $ from 'jquery';

let counter = 0;
setInterval(() => {
  counter += 1;
  $('#main').html(`You've been on this page for ${counter} seconds.`);
}, 1000);
