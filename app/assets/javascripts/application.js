//= require_self
//= require react-server
//= require react_ujs

window.$ = window.jQuery = global.$ = require('jquery');
require( 'jquery-ujs' );
var React = window.React = global.React = require('react');

require('./components');

const blah = message => console.log(message);

blah("your mama was a snowblower")