(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var marriageTime = new Date('Sat Jan 02 2016 10:30:00 GMT-0600 (CST)')
var el = document.getElementById('time-left')

function setDisplay() {
	if (hasHappened(marriageTime)) {
		el.textContent = 'Marriage is awesome!'
	} else {
		var difference = getDifference(marriageTime)

		el.innerHTML = (difference.days ? (difference.days + '&nbsp;days, ') : '')
			+ difference.hours + '&nbsp;hours'
	}
}

var cancelInterval = interval(function() {
	setDisplay()
	if (hasHappened(marriageTime)) {
		cancelInterval()
	}
}, 1000)

function interval(fn, ms) {
	var intervalId = setInterval(fn, ms)

	return function() {
		clearInterval(intervalId)
	}
}

function hasHappened(then) {
	return Date.now() - then.getTime() > 0
}

function getDifference(then) {
	var totalHours = getTotalHours(then)
	var days = Math.floor(totalHours / 24)
	var hours = totalHours % 24
	return {
		days: days,
		hours: hours
	}
}

function getTotalHours(then) {
	var now = new Date()
	return Math.round((then.getTime() - now.getTime()) / 1000 / 60 / 60)
}

setDisplay()

},{}]},{},[1]);
