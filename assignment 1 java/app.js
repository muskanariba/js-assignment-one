var num = +prompt("enter any number");
var newnum = ++num;
var newnum2 = num++;
var newnum3 = num--;
var newnum4 = --num;
document.write("user number : " + num + "<br>");
document.write("++num : " + newnum + "<br>");
document.write("num++ : " + newnum2 + "<br>");
document.write("num-- : " + newnum3 + "<br>");
document.write("--num : " + newnum4 + "<br>");

var a = 2;
var b = 1;
var c = --a - --b + ++b + b--;
document.write(c);

var userinfo = prompt("enter your name");
alert("hello " + userinfo);

var user = +prompt("enter a number of which table you wants") || 5;

for (var i = 1; i <= 10; i++) {
  document.write(`${user} x ${i} = ${user * i} <br>`);
}

var sub1 = "english";
var sub2 = "Math";
var sub3 = "urdu";
var total = 100;
var sub4 = prompt("what's your marks in english?");
var sub5 = prompt("what's your marks in math?");
var sub6 = prompt("what's your marks in urdu?");
document.write("eng marks : " + (sub4 % total) + "%" + "<br>");
document.write("math marks : " + (sub5 % total) + "%" + "<br>");
document.write("urdus marks : " + (sub6 % total) + "%" + "<br>");

// var a=2, b=3, c=4; // 3 variable in a statement
// var $username ="" // legal variable
// var num =""
// var phone = ""
// var fname = ""
// var result = ""
// var 123 = "" // illegal
// var 1name =""
// var name% = ""
// var @name = ""
// var % = ""

document.write("<h2>Rules for naming JS variables</h2>");
document.write(
  "variable names can only contain : number , $, and _ . for exampe : $my _1st variable " +
    "<br>"
);
document.write(
  "variable must begin with a letter , $ or _. for examplle :$name , _name or name" +
    "<br>"
);
document.write("variable names are case sensitive" + "<br>");
document.write("variable names should not be JS keywords" + "<br>");

var username = "";
var myName = "Areeba muskan";
var titlemessage = "hello world";
alert(titlemessage);

var user = prompt("enter any student data");
alert(user);

var email = "example@wxamplle.com";
alert("my email is : " + email, "<br>");
var book = "A smarter way to learn javascript";
alert("i am trying to learn from book " + book);

document.write("Yah! i can write htmll content through javascript");
var ale = "________*******________";
alert(ale);

var num1 = +prompt("enter one num for addition");
var num2 = +prompt("enter second num for additioin");
var sum = num1 + num2;
document.write("the sum of number one and two is : " + sum + "<br>");

var num1 = +prompt("enter one num for substraction");
var num2 = +prompt("enter second num substraction");
var sub = num1 - num2;
document.write("the sub of number one and two is : " + sub + "<br>");

var num1 = +prompt("enter one num for multiplication");
var num2 = +prompt("enter second num multiplication");
var mul = num1 * num2;
document.write("the multiplication of number one and two is : " + mul + "<br>");

var num1 = +prompt("enter one num for divide");
var num2 = +prompt("enter second num divide");
var div = num1 / num2;
document.write("the division of number one and two is : " + div + "<br>");

var num1 = +prompt("enter one num for modulus");
var num2 = +prompt("enter second num modulus");
var mod = num1 % num2;
document.write("the modulus of number one and two is : " + mod + "<br>");

var ran = "";
ran = 5;
document.write("initial value : " + ran + "<br>");
ban = 7;
ran3 = ++ran;
ran2 = ran3 + ban;
document.write("value after increrment : " + ran3 + "<br>");
document.write("value after addition : " + ran2 + "<br>");
ran4 = --ran2;
document.write("value after decrerment : " + ran4 + "<br>");
document.write("the remainder : " + (ran4 % 3) + "<br>");

var cost = 600;
var res = cost * 5;
document.write("total cost to buy 5 tickets to a movie is " + res + " PKR");

var table = +prompt("enter the table number");
for (var i = 0; i <= 10; i++) {
  document.write(`${table} x ${i} = ${table * i}  <br>`);
}
var one = +prompt("enter temperature in celsius");
document.write(one, " is ", (one * 9) / 5 + 32 + "<br>");
var two = +prompt("enter temperature in fahrenheit");
document.write(two, " is ", ((two - 32) * 5) / 9 + "<br>");

var one = +prompt("enter price of item 1 ");
document.write("price of item 1 is : " + one + "<br>");
var two = +prompt("enter the quantity of item 1 ");
document.write("the quantity of item 1 is : " + two + "<br>");
var three = +prompt("enter price of item 2 ");
document.write("price of item 2 is : " + three + "<br>");
var four = +prompt("enter the quantity of item 2 ");
document.write("the quantity of item 2 is : " + four + "<br>");
var five = one * two;
var six = three * four;
var seven = five + six;
document.write("total amount is : " + seven);

var a = +prompt("enter your obtained marks ");
document.write("obtained marks : " + a + "<br>");
var b = +prompt("enter total marks ");
document.write("total marks : " + b + "<br>");
var c = (a / b) * 100;
document.write("percentage is : " + c + "%" + "<br>");

var a = 10;
var b = 25;
var c = 104.8 * 10;
var d = 28 * 25;
var e = c + d;
document.write("total currency in PKR : " + e + "<br>");

var a = 10;
document.write("initia number is : " + a + "<br>");
var b = a + 5;
document.write("added value : " + b + "<br>");
var c = a * 10;
document.write("multiply by 10 : " + c + "<br>");
var d = a / 2;
document.write("divide by result by 2 : " + d + "<br>");

var q = +prompt("currrent year");
document.write("current year : " + q + "<br>");
var k = +prompt("birth year");
document.write("birth year : " + k + "<br>");
var a = q - k;
document.write("your age : " + a + "<br>");

var a = +prompt("radius of a circle ");
document.write("radius of a circle : " + a + "<br>");
document.write("circumference is : " + 2 * (22 / 7) * a + "<br>");
document.write("arera is : " + (22 / 7) * a * a);

var x = prompt("enter your favourite snacks");
document.write("favourite snacks : " + x + "<br>");
var y = prompt("what is your current age");
document.write("current age : " + y + "<br>");
var z = prompt("what is your estimated age");
document.write("estimated age : " + z + "<br>");
var a = prompt("amount of snack per day");
document.write("amount of snack per day : " + a + "<br>");
var res = (z - y) * a;
document.write(res + "<br>");
var age = 22;
alert("i am " + age + " years old " + "<br>");

var birthyr = 2002;
document.write("my birth year is" + birthyr + "<br>");
document.write("datatype of my variable is : " + typeof birthyr + "<br>");

var a = prompt("enter your name ");
var b = prompt("enter product title");
var c = prompt("enter quantity");
var d = a + " ordererd " + c + b + " on XYZ clothing store ";
document.write(d + "<br>");

var a = "you have visited this site 14 times";
alert(a);
