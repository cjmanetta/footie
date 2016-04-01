//= require_self
//= require react-server
//= require react_ujs
//= require semantic



window.$ = window.jQuery = global.$ = require('jquery');
require( 'jquery-ujs' );

// if were are on the landing page, load the jquery from semantic to hide and show the legacy login/signup pages else load react and friends

if (window.location.pathname == "/") {
	$(window).load(function(){
		$('.menu .item').tab();
		$('.ui.dropdown').dropdown();
	})
} else {
	var React = window.React = global.React = require('react');
	require('./components');
}




