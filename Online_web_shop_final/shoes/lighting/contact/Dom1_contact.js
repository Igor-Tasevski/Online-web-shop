6.3


/*
var passfield = document.getElementById("AccountPass");

passfield.onfocus = function() {

  passfield.value = "";

}





passfield.onblur = function() {

  alert("Momentalnata vrednost e: " + passfield.value)
};

*/


8.

//First Name validation -Checks if the name field  contains any digits.
///\d/ is used to search digit characters

var firstname = document.getElementById("fname")

firstname.onblur = function() {

   validate()  


}


//Last Name validation-check if the lastname filed contains any digits

var lastname = document.getElementById("lname")


lastname.onblur = function() {
  validate()

  

}



//Email Validation: Verifies if the email  contains all the corect characters and @

var email = document.getElementById("email")


email.onblur = function() {

  if (!/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email.value)) {
    document.getElementById("errorMessage2").innerHTML = "E-mail adress not valid"
    return false
  } else {
    document.getElementById("errorMessage2").innerHTML = ""
    return true
  }

};





//Chekbox validation at least one checkbox should be checked
//This is already implemented in Submit button validation
/*
var male = document.getElementById("male")
var female = document.getElementById("female")

male.onblur = function(){

if(document.getElementById('male').checked==false){
  document.getElementById("errorMessage2").innerHTML="Checkbox not cheked"
  return false
}else{
  document.getElementById("errorMessage2").innerHTML =""
  return true;
}
  

}



female.onblur = function(){
  if(document.getElementById('female').checked==false){
    document.getElementById("errorMessage2").innerHTML="Checkbox not cheked"
    return false
  }else{
    document.getElementById("errorMessage2").innerHTML =""
    return true;
  }
    
  
  }

*/





//Selection Validation: Ensures that a option is selected from the dropdown.
//Implemented also in Sumbit button validation
/*
var listoption = document.getElementById("phonePrefix")

listoption.onblur = function() {
  if (document.getElementById("phonePrefix").value == "---Select Prefix---") {
    document.getElementById("errorMessage2").innerHTML = "Please select option from the list"
    return false;

  } else {
    document.getElementById("errorMessage2").innerHTML = ""
    return true;
  }

}
*/

//Phone number validation

///^\\+[1-9]{1}[0-9]{0,2}-[2-9]{1}[0-9]{2}-[2-9]{1}[0-9]{2}-[0-9]{4}$/
//+389-76-789-123

var number = document.getElementById("PhoneNumber")


number.onblur = function() {

  if (!/^\+[1-9]{1}[0-9]{0,2}-[2-9]{1}[0-9]{1}-[2-9]{1}[0-9]{2}-[0-9]{3}$/.test(number.value)) {
    document.getElementById("errorMessage2").innerHTML = "Not valid phone number"
    return false;


  } else {
    document.getElementById("errorMessage2").innerHTML = ""
    return true

  }

}

//Street address validation 
///^[’A-Z’’a-z’]*$/

var address = document.getElementById("StreetAddress")


address.onblur = function() {

  if (!/^[’A-Z’’a-z’]*$/.test(address.value)) {
    document.getElementById("errorMessage2").innerHTML = "Only Leters allowed"
    return false;

  } else {
    document.getElementById("errorMessage2").innerHTML = ""
    return true;
  }





}
//StreetNumber validation

var streetNumber = document.getElementById("StreetNumber")


streetNumber.onblur = function() {

  if (!/\d/.test(streetNumber.value)) {
    document.getElementById("errorMessage2").innerHTML = "Digits only"
    return false;
  } else {
    document.getElementById("errorMessage2").innerHTML = ""
    return true;
  }


}

//City Validation

var City = document.getElementById("city")


City.onblur = function() {

  validate()

  

}


//Country Validaion 


var country = document.getElementById("country")


country.onblur = function() {

  validate()

  
}


//Password Validation: Validates that the password field has the minimum lenght and complexity
//(?=.*[0-9]) means that the password must contain a single digit from 1 to 9.
//(?=.*[a-z]) means that the password must contain one lowercase letter.
//(?=.*[A-Z]) means that the password must contain one uppercase letter.
//(?=.*\W) means that the password must contain one special character.
//.{8,16} means that the password must be 8-16 characters long. We must use this at the end of the regex, just before the $ symbol.

var pass = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/



var pwd1 = document.getElementById("AccountPass")


pwd1.onblur = function() {

  if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(pwd1.value)) {
    document.getElementById("errorMessage2").innerHTML = "Pass does not meet the necesary complexity and length of min 8 characters."
    return false;

  } else {
    document.getElementById("errorMessage2").innerHTML = ""
    return true;
  }


}


var pwd2 = document.getElementById("ConfirmAccPass")


pwd2.onblur = function() {
  

  if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(pwd2.value)) {
    document.getElementById("errorMessage2").innerHTML = " Necesary complexity and length of min 8 characters not meet!!!."
    return false;


  } else {
    document.getElementById("errorMessage2").innerHTML = ""
    return true
  }
}



function validate() {

  var firstname = document.getElementById("fname")
  var lastname = document.getElementById("lname")
  var City = document.getElementById("city")
  var country = document.getElementById("country")

  if(
  (/\d/.test(firstname.value))|| 
  (/[^a-zA-Z0-9-]/gm.test(firstname.value))|| 
  (/\d/.test(lastname.value))|| 
  (/[^a-zA-Z0-9-]/gm.test(lastname.value))||
  (/\d/.test(City.value))|| 
  (/[^a-zA-Z0-9-]/gm.test(City.value))||
  (/\d/.test(country.value))|| 
  (/[^a-zA-Z0-9-]/gm.test(country.value))
  ) 
  {
    document.getElementById("errorMessage2").innerHTML = "Digits and Special Characters are not allowed"
    return false

  } else {
    document.getElementById("errorMessage2").innerHTML = ""
    return true

  }

}





//Submit validation button

document.getElementById("submitvalue").onclick = check

function check() {

  
  if (
      ((document.getElementById("fname").value == "") ||
      (document.getElementById("lname").value == "")) ||
      ((document.getElementById("email").value == "") || 
      (document.getElementById("PhoneNumber").value == "")) || 
      ((document.getElementById("StreetAddress").value == "") || 
      (document.getElementById("StreetNumber").value == "")) || 
      ((document.getElementById("city").value == "") || 
      (document.getElementById("country").value == "")) || 
      ((document.getElementById("AccountPass").value == "") || 
      (document.getElementById("ConfirmAccPass").value == ""))  || 
      ((pwd1.value!==pwd2.value))||
      ((document.getElementById('male').checked == false) && 
      (document.getElementById('female').checked == false)) || 
      ((document.getElementById("phonePrefix").value == "---Select Prefix---"))
    ) {


    document.getElementById("errorMessage").innerHTML = "All fields are reguired and pass should be equal" 


    return false;
  } else {

    document.getElementById("errorMessage1").innerHTML = ""

    return true
  }

}





13.2



var x = document.getElementById("phonePrefix").onchange = activate

function activate() {

  if (document.getElementById("phonePrefix").selectedIndex == [1]) {
    alert("The Montenegro country code 382 will allow you to call Montenegro from another country.")
  } else if (document.getElementById("phonePrefix").selectedIndex == [2]) {
    alert("The Croatia country code 385 will allow you to call Croatia from another country")
  } else if (document.getElementById("phonePrefix").selectedIndex == [3]) {
    alert("The Albania country code 355 will allow you to call Albania from another country")

  } else if (document.getElementById("phonePrefix").selectedIndex == [4]) {
    alert("The Bosnia and Herzegovina country code 387 will allow you to call Bosnia and Herzegovina from another country")
  } else if (document.getElementById("phonePrefix").selectedIndex == [5]) {
    alert("The Serbia country code 381 will allow you to call Serbia from another country")
  } else if (document.getElementById("phonePrefix").selectedIndex == [6])
    alert("The Macedonia country code 389 will allow you to call Serbia from another country")
  
}































