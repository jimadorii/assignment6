

/*function showfield(name){
  if(name=='Other')document.getElementById('div1').innerHTML='Other: <input type="text" name="other" />';
  else document.getElementById('div1').innerHTML='';
}*/

// KEEP - IMPORTANT check ADDRESS type for OTHER BELOW blank entry box will display if other is chosen*/
function checkvalue(val)
{
    if(val==="other")
       document.getElementById('address').style.display='block';
    else
       document.getElementById('address').style.display='none'; 
}
function clearText(a) {
    if(a.defaultValue==a.value){
        a.value=""
    }
    else {
        if(a.value==""){
            a.value=a.defaultValue}
        }
};
// KEEP - END Important ADDRESS above


// Form entry character check below

//BEGIN - EMPTY form entry and valiation below

function validate() { 
    
    // BEGIN - regular expression variables for values entered below
    var letters = /[^A-Za-z]+$/;
    var lettersnumbers = /[^a-zA-Z0-9]+$/;
    var numbersonly = /([^0-9])/;
    // END - expressions
    
    
    // BEGIN - validate if name is empty */
    if (document.myform.firstname.value==""){
        alert("Please enter a name to continue");
        return false;
    }
    // END - validate if name is empty
    
    
    // BEGIN - check letters in name below
    else if(document.myform.firstname.value.match(letters))  
     {
         alert("Your name must contain letters only");
         return false;  
     }
    // END - check letters in name
    
    
    // BEGIN - validate if address type is not selected/empty */
    else if(document.getElementById("exampleSelect1").value == "") {
      alert("Please select an address type to continue");
      document.getElementById("exampleSelect1").focus(); //set focus back to control
      return false;
   }
    // END - validate address type selected/empty
    
    
    // BEGIN - validate if street adress is empty
    else if(document.myform.street.value=="") {
        alert("Please enter your street address to continue");
        return false;
    }
    // END - validate if street address is empty
    
    
    // BEGIN - street numbers and letters check
    else if(document.myform.street.value.match(lettersnumbers))  
     {
         alert("Your address can only contain numbers and letters");
         return false;  
     }
    // END - street numbers and letters check
    
    
    // BEGIN - validate if city name is empty
    else if(document.myform.city.value=="") {
        alert("Please enter a city name to continue");
        return false;
    }
    // END - validate if city name is empty
    
    
    // BEGIN - letter check in city name
    else if(document.myform.city.value.match(letters))  
     {
         alert("City name can only contain letters!");
         return false;  
     }
    // END - letter check in city name
    
    
    // BEGIN - validate if state name is empty //
    else if (document.myform.state1.value=="") {
        alert("Please enter a state name for your address!");
        return false;
    }
    // END - validate if state name is empty
    

    // BEGIN - Check state for letters
    else if(document.myform.state1.value.match(letters)) {
         alert("State name must contain letters only");
         return false;  
     }
    // END - Check state for letters
    
    
    // BEGIN- Check state for two character length
    else if(document.myform.state1.value.length != 2) {
         alert("State must be two letter in length only!");
         return false;  
     }
    // END - Check state for two charcter length
    
    
    // validate if zip code is empty //
    else if(document.myform.zip.value=="") {
        alert("Please enter your zip code to continue");
        return false;
    }
    // END - validate if zip code is empty
    
    
    // BEGIN - zip number characetrs check
    else if(document.myform.zip.value.match(numbersonly)) {
         alert("Zip code can only contain numbers!");
         return false;  
     }
    // BEGIN - zip number characetrs check
    
    
    // BEGIN -  zip check length is 5 characters
    else if(document.myform.zip.value.length != 5)  
     {
         alert("Zip code must be 5 characters in length!");
         return false;  
     }
    // END -  zip check length is 5 characters
    
    
    // validate if phone number is empty
    else if (document.myform.telephone.value=="") {
        alert("Please enter your phone number to continue");
        return false;
    }
    // END - validate if phone number is empty
    
    
    // BEGIN- check phone for numbers only
    else if(document.myform.telephone.value.match(numbersonly))  
     {
         alert("Phone number can only contain numbers!");
         return false;  
     }
    // BEGIN- check phone for numbers only
    
    
    // BEGIN - phone number pattern check
    else if(document.myform.telephone.value.length != 10)  
     {
         alert("Phone number must contain ten digits, including area code!");
         return false;  
     }
    
    /* validate if email entry is empty */
    else if (document.myform.emailentry.value=="") {
        alert("Please enter an email address to continue");
        return false;
    }
    else if(document.getElementById("admOption").checked == false) {
      alert("Please make a dough selection and choose a pizza size to continue");
      document.getElementById("admOption").focus(); //set focus back to control
      return false;
   }
    else {
        return true;
    }
}
// END - EMPTY form entry and valiation below


// BEGIN - pizza order entry validation below
    

// BEGIN - radio bttons and dropdown reveals
function doughSelectCheck(doughSelect)
{
    if(doughSelect){
        admOptionValue = document.getElementById("admOption").value;
        if(admOptionValue != 0){
            document.getElementById("admDivCheck").style.display = "block";
        }
        else{
            document.getElementById("admDivCheck").style.display = "none";
        }
    }
    
    else{
        document.getElementById("admDivCheck").focus.style.display = "none";
    }
}

function doughSelectCheck2(doughSelect2)
{
    if(doughSelect2){
        admOptionValue = document.getElementById("admOption").value;
        if(admOptionValue != 0){
            document.getElementById("admDivCheck2").style.display = "block";
        }
        else{
            document.getElementById("admDivCheck2").style.display = "none";
        }
    }
    else{
        document.getElementById("admDivCheck2").focus.style.display = "none";
    }
}


function doughSelectCheck3(doughSelec3)
{
    if(doughSelec3){
        admOptionValue = document.getElementById("admOption").value;
        if(admOptionValue != 0){
            document.getElementById("admDivCheck3").style.display = "block";
        }
        else{
            document.getElementById("admDivCheck3").style.display = "none";
        }
    }
    else{
        document.getElementById("admDivCheck3").focus.style.display = "none";
    }
}


function doughSelectCheck4(doughSelec4)
{
    if(doughSelec4){
        admOptionValue = document.getElementById("admOption").value;
        if(admOptionValue != 0){
            document.getElementById("admDivCheck4").style.display = "block";
        }
        else{
            document.getElementById("admDivCheck4").style.display = "none";
        }
    }
    else{
        document.getElementById("admDivCheck4").focus.style.display = "none";
    }
}
// END - radio bttons and dropdown reveals


// BEGIN - All Dough options population

var doughprices = {
    price1:"Small ($9.99)", price2:"Medium ($12.99)", price3:"Large ($14.99)" 
};

// BEGIN - Hand tossed 3 price dropdown options population
document.getElementById("smhand").innerHTML =
doughprices.price1;

document.getElementById("mdhand").innerHTML =
doughprices.price2;

document.getElementById("lghand").innerHTML =
doughprices.price3;
// END - Hand Tossed dough price population


// BEGIN - Thin Crust dough price population
var doughprices2 = {
    price1:"Medium ($11.99)", price2:"Large ($13.99)" 
};

// BEGIN - Hand tossed 3 price dropdown options population
document.getElementById("mdthin").innerHTML =
doughprices2.price1;

document.getElementById("lgthin").innerHTML =
doughprices2.price2;
// END - Thin Crust dough price population


// BEGIN - NY Style dough price population
var doughprices3 = {
    price1:"Large ($16.99)", price2:"Extra Large ($19.99)" 
};

// BEGIN - Hand tossed 3 price dropdown options population
document.getElementById("lgny").innerHTML =
doughprices3.price1;

document.getElementById("exlny").innerHTML =
doughprices3.price2;
// END - NY Style dough price population


// BEGIN - NY Style dough price population
var doughprices4 = {
    price1:"Small ($10.99)" 
};

// BEGIN - Hand tossed 3 price dropdown options population
document.getElementById("smgluten").innerHTML =
doughprices4.price1;
// END - NY Style dough price population



// BEGIN - Hand Tossed dough price population
var doughprices = {
    price1:"Small ($9.99)", price2:"Medium ($12.99)", price3:"Large ($14.99)" 
};

// BEGIN - Hand tossed 3 price dropdown options population
document.getElementById("smhand").innerHTML =
doughprices.price1;

document.getElementById("mdhand").innerHTML =
doughprices.price2;

document.getElementById("lghand").innerHTML =
doughprices.price3;
// END - Hand Tossed dough price population
// END - All Dough options population


// BEGIN - Cheese options population
var cheeses = {
    price1:"Light: No charge", price2:"Normal: No charge", price3:"Extra: +$2.99", price4:"Double: +$3.99" 
};

document.getElementById("cheese1").innerHTML =
cheeses.price1;

document.getElementById("cheese2").innerHTML =
cheeses.price2;

document.getElementById("cheese3").innerHTML =
cheeses.price3;

document.getElementById("cheese4").innerHTML =
cheeses.price4;
// END - Cheese options population


// BEGIN - Sauce options population

var sauces = {
    price1:"Regular Tomato: no charge", price2:"Hearty Tomato: +$.99", price3:"BBQ Sauce: +$1.99" 
};
document.getElementById("sauce1").innerHTML =
sauces.price1;

document.getElementById("sauce2").innerHTML =
sauces.price2;

document.getElementById("sauce3").innerHTML =
sauces.price3;
// END - Sauce options population







// END - pizza order entry validation below



