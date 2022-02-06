import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import User from './js/galactic-ages';

$('form#user').submit(function(event) {
  event.preventDefault();
  let userAge = $('input#age').val();
  let userExpected = $('input#expectancy').val();
  let mercuryUser = new User(userAge, userExpected);
  let venusUser = new User(userAge, userExpected);
  let marsUser = new User(userAge, userExpected);
  let jupiterUser = new User(userAge, userExpected);
  mercuryUser.mercuryAge();
  venusUser.venusAge();
  marsUser.marsAge();
  jupiterUser.jupiterAge();
  $('#mercAge').text("Age: " + mercuryUser.age);
  $('#mercYears').text("Remaining Years: " + mercuryUser.lifeExpectancy);
  $('#mercPast').text("Years Past Expected: " + mercuryUser.yearsPast);
  $('#venAge').text("Age: " + venusUser.age);
  $('#venYears').text("Remaining Years: " + venusUser.lifeExpectancy);
  $('#venPast').text("Years Past Expected: " + venusUser.yearsPast);
  $('#marsAge').text("Age: " + marsUser.age);
  $('#marsYears').text("Remaining Years: " + marsUser.lifeExpectancy);
  $('#marsPast').text("Years Past Expected: " + marsUser.yearsPast);
  $('#jupAge').text("Age: " + jupiterUser.age);
  $('#jupYears').text("Remaining Years: " + jupiterUser.lifeExpectancy);
  $('#jupPast').text("Years Past Expected: " + jupiterUser.yearsPast);
});