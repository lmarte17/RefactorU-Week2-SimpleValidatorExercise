var phoneNumber = prompt("Give me your phone number or reap the consequences! \nPlease input via the xxx-xxx-xxxx method.");

while (phoneNumber.charAt(3) != "-" || phoneNumber.charAt(7) != "-") {
    alert("You entered it wrong! Idiot! Do it again...");
    phoneNumber = prompt("Give me your phone number or reap the consequences! \nPlease input via the xxx-xxx-xxxx method.");
} 

if (phoneNumber.charAt(3) == "-" && phoneNumber.charAt(7) == "-") {
    alert("So You DO know how to folow directions..");
}

var birthDate = prompt("Now give me your birthday! In the xx/xx/xxxx format, dummy!");

while(birthDate.charAt(2) != "/" || birthDate.charAt(5) != "/") {
    alert("You don't Know your own birthday?!? Geez.. \nHopefully you'll figure it out next time.");
    birthDate = prompt("Now give me your birthday! In the xx/xx/xxxx format, dummy!");
}

if (birthDate.charAt(2) == "/" || birthDate.charAt(5) == "/") {
    alert("Nice job, Einstein.");
}

var postalCode = prompt("If I were to send you a box of soiled unmentionables, \nwhich postal code would I use? xxxxx or xxxxx-xxxx");

while ((postalCode.length != 10 && postalCode.charAt(5) != "-") && (postalCode.length != 5)) {
    alert("I said your Postal code! not all of this mumbo jumbo!");
    postalCode = prompt("If I were to send you a box of soiled unmentionables, \nwhich postal code would I use? xxxxx or xxxxx-xxxx");
}

if ((postalCode.length === 10 && postalCode.charAt(5) === "-") || (postalCode.length === 5)) {
    alert("Be on the lookout for a special package.");
}

var stateAbrv = prompt("Now I need your State abreviation; post haste!");

stateAbrv.toUpperCase();

var isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

while (stateAbrv.length != 2) {
    alert("How tall are you? I didn't know we could stack sh*t that high!");
    stateAbrv = prompt("Now I need your State abreviation; post haste!");
}

if (stateAbrv.length === 2) {
    alert("Luckily, your parents never told you not to talk to strangers.");
}

var married = prompt("Are you making someone's life completely miserable by being their spouse?");

while (married.toUpperCase() != ("YES" && "NO")) {
    alert("It's a yes or no question. Chop chop.");
    married = prompt("Are you making someone's life completely miserable by being their spouse?");
} 

if (married.toUpperCase() === "YES") {
    alert("I guess there is someone for everyone.");
} 
else if (married.toUpperCase() === "NO") {
    alert("You should check out the dating site: www.loweredexpextations.com")
}
