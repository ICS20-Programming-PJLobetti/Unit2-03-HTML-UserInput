// Copyright (c) 2022 PJ Lobetti All rights reserved
//
// Created by: PJ Lobetti
// Created on: Mar 2022
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets user's first name and age and displays it back to user

  // get street name from text field
  let Street Name = document.getElementById("street-name").value
	// get door number from text field and cast it to integer
  let Number = parseInt(document.getElementById("number-entered").value)

  // display street and door number back to user
  document.getElementById('user-info').innerHTML = "Your street name is " + Street Name + " and your door number is " + Number "."
}