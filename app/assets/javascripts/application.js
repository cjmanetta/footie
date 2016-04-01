//= require_self
//= require react-server
//= require react_ujs
//= require components

window.$ = window.jQuery = global.$ = require('jquery');
require( 'jquery-ujs' );
var React = window.React = global.React = require('react');


const blah = message => console.log(message);

blah("your mama was a snowblower")