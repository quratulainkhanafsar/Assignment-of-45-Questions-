// Assaignment of 45 Questions:

// Question no:01

// Install [Node.js](https://nodejs.org/en/), [TypeScript](https://www.typescriptlang.org/download)  and [VS Code](https://code.visualstudio.com/) on your computer.

// answer:  Done installation.

// Question no:02

// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric,
// would you like to learn some Python today?”

// Answer:

// let personName : string = "Sadia";
// let message : string = "Hello Sadia ! would you like to learn some Python today?";

// console.log(personName, message);

// Questions no:03

// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// Answer:

// let personName: string = "Ahmed Raza"; 
// console.log(personName);


// // uppercase:
// console.log(personName.toUpperCase());
// // lowercase:
// console.log(personName.toLowerCase());

// titlecase:

// let personName:string = "ahmed raza from karachi ";
// // step : 01
// let words:string[] = personName.split(" ");
// // step :02
// let titleCaseName: string = "";
// //step : 03
// // for loop 1-10
// for (let i = 0; i < words.length; i++) {
// titleCaseName += words[i].charAt(0).toUpperCase()
// + words[i].slice(1).toLowerCase() + " "
// }
// console.log(titleCaseName);

// Question no:04

// //Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the
// following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

// Answer:

// console.log(`shakespeare once said, "laughing faces do not mean that there is absence of sorrow! but it means that they have the ability to deal with it."`);

// Question no:05

// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

// Answer:

// let famous_person: string = "shakespeare";
// let message: string =  `${famous_person} once said, "laughing faces do not mean that there is absence of sorrow! but it means that they have the ability to deal with it."`;
// console.log(message);

// Question no:06

// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

// Answer:

// let personName: string = ("\t\n Hanzala \t\n");    //save the name whitespace
// console.log(personName);                              // show name with whitespace
// console.log(personName.trim());                       // show the name without whitespace

// Question no:07

// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results. 

// Answer:
// console.log(3 + 5);   // addition
// console.log(10 - 2);  // subtraction
// console.log(2 * 4);   // multiplication
// console.log(32 / 4);  // division

// Question no:08

// You should create four lines that look like this:

// _____________________________________________

// console.log(5 + 3)

// _____________________________________________

// Your output should simply be four lines with the number 8 appearing once on each line.

// Answer:

// console.log(3 + 5);   // addition
// console.log(10 - 2);  // subtraction
// console.log(2 * 4);   // multiplication
// console.log(32 / 4);  // division

// Question no:09

// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

// Answer:

// let favoritenumber: number = 4;

// console.log(`my favorite number is ${favoritenumber}.`);

// Question no:10

// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write
// because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence
// describing what the program does.

// Answer:

// Quratulain, 5-4-2024
// This program print a personal message.

// let myname: string = "Quratulain";
// console.log(`Hellow ${myname}), would you like to learn typescript today?`)

// Question no:11

// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

// Answer:

// let myfriendsname: string[] = ["Ayesha, Sadia, Aqsa, Dua, layba"];
// for (let i = 0; i < myfriendsname.length; i++){
// console.log(myfriendsname[i]); 
// }

// Question no:12

// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the person’s name.

// Answer:

// let myfriendsname: string[] = ["Ayesha, Sadia, Aqsa, Dua, layba"];
// for (let name of myfriendsname){
// console.log(`Hellow ${myfriendsname}, would you like to learn some typescript today?`);
// }

// Question no:13

// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
// to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// Answer:

// let transports: string[] = ["Civic Car, Honda Motorcycle, Mehran Car"];
// transports.forEach(transports =>{
// console.log(`I would like to own a  ${transports}.`);    
// })

// Question no:14

// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

// Answer:

// let invitation: string[] = ["Ahmed, Hassan, Alisha, Zohaib, Hanzala, Rehan"];
// invitation.forEach(invitation =>{
// console.log(`Dear! ${invitation}, would you like to join us at dinner today? `);
// })

// Question no:15

// Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still
// in your list.

// Answer:

// invitation guest: Q:14

// let invitation: string[] = ["Ahmed, Hassan, Alisha, Zohaib, Hanzala, Rehan"];
// invitation.forEach(invitation =>{
// console.log(`Dear! ${invitation}, would you like to join us at dinner today? `);
// })

// // The guest who can't join:

// let guestcannotjoin = "Hassan, Rehan, Alishba";
// console.log(`${guestcannotjoin} can't make it to dinner.`);
 
// // Replace the invitation:

// let newGuest  = "Asma, Faizan, Nimra, Ahmed, Zohaib, Hanzala";
// invitation[invitation.indexOf(guestcannotjoin)]= newGuest

// // new invitaion:

// invitation.forEach(guest => {
//     console.log(`Dear! ${guest}, would you like to join us at dinner today?`);  
// })

// Question no:16

// More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

// Answer:

// let guest: string[] = ["Ali Raza, Furqan, Kinza, Sadia"];
// console.log("Great news! I found a bigger dinner table!");

// // Adding more guest:

// guest.unshift("Naila Pervaiz");
// guest.splice(guest.length / 2, 0, "Ahmed shoaib");
// guest.push("Anila Shehzad");

// guest.forEach(guest => {
//     console.log(`Dear! ${guest}, would you like to join us at dinner today?`);   
// })

// Question no:17

// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.

// Answer:

// console.log("unfortunetly, I can only invite two people for dinner.");

// while (guests.length > 2) {
//     let removedGuest = guests.pop();
//     console.log(`sorry, ${removedGuest}, I can't invite you at dinner.`);
//     }

//     guests.forEach(guest => {
// console.log(`Dgear! ${guest}, you are still invited to dinner.`);
// })

// guests.(0, guests.length);
// console.log(guests);       // show an empty list.

// Question no:18

// Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its
// order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

// Answer:

// let places: string[] = ["switzerland", "Iceland", "japan", "Dubai", "Norway"];
// console.log("original order:", places);

// console.log("Alphabetical order:", [...places].sort());

// console.log("original order", places);

// console.log("Reversed alphabetical order:", [...places].sort().reverse());

// console.log("original order:", places);

// places.reverse();
// console.log("Reversed order:",places);

// places.reverse();
// console.log("original order:", places);

// places.sort();
// console.log("Alphabetical order:", places);

// places.reverse();
// console.log("Reversed alphabetical order:", places);

// Question no:19

// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.

// Answer:

// let guests: string[] = ["Asma, Faizan, Nimra, Ahmed, Zohaib, Hanzala"];
// console.log(`I am inviting ${guests.length} people to dinner.`);

// Question no:20

// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
// else you’d like. Write a program that creates a list containing these items.

// Answer:

// let rivers: string[] = ["Neelum river","Jehlum river", "Chanab river"];
// console.log("rivers I would like to visit:", rivers);

// Question no:21

// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Answer:

// let hotel: {name: string; owner: string; openingyear: number} = 
// {
//     name: "Marina Hotel",
//     owner: "Ahmed Hassan",
//     openingyear: 1997
// };

// console.log(`hotel info: ${hotel.name} by ${hotel.owner}, opening in ${hotel.openingyear}`);

// Question no:22

// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
// to produce an index error. Make sure you correct the error before closing the program.

// Answer:

// let fruits: string[] = ["Apple", "Mango", "Gava", "watermelon"];

// international error: [] r 0-indexed, so index 4 is out of bounds.
// console.log(fruits[4]);      

// correcting the error by accessing a valid index.
// console.log(fruits[1])
         
// Question no:23

// Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the results of each test. Your code
// should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

// Answer:

// let basket = 'pink';
// console.log("Is basket == 'pink'? I predict True.");
// console.log(basket == 'pink')   // true

// let vechile = 'toyota';
// console.log("Is vechile == 'toyota'? I predict true.");
// console.log(vechile == 'toyota'); // true

// let sky = 'blue';
// console.log("Is sky == 'blue'? I predict false.");
// console.log(sky == 'blue');  // true

// let mobile = 'white';
// console.log("Is mobile == 'white'? I predict false.");
// console.log(mobile == 'white');   // true

// let car = 'civic';
// console.log("Is car == 'civic'? I predict true.");
// console.log(car == 'civic');  // true

// let trinagle = '4angles';
// console.log("Is triangle !== '4angles'? I predict false.");
// console.log(trinagle !== '4angles');  // false

// let Mango = 'yellow';
// console.log("Is Mango == 'yellow'? I predict false.");
// console.log(Mango == 'Yellow');  // false

// let banana = 'yellow';
// console.log("Is banana == 'yellow'? I predict true.");
// console.log(banana == 'Yellow');  // false

// let bike = 'sevenstar';
// console.log("Is bike == 'Mehran'? I predict false.");
// console.log(bike == 'Mehran');  // false 

// let eight = `10`;
// console.log("is eight !== `10`? I predict false");
// console.log(eight !== `10`); // false

// Question no:24

// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

// Answer:

// definnig veriable:

let mango = "mango";
let toUpperCaseMango = "MANGO";
let ten = "10";
let seven = "7";
let colors = ["red", "blue", "green", "pink"]

// test for equality and inequality with strings:

// console.log("is mango is equal to mango?");
// console.log(mango == "mango");

// console.log("is mango is not equal to mango?");
// console.log(mango !== "mango");

// // Tests using the lower case function

// console.log("Is MANGO is equal to mango after convertion to lowercase?");
// console.log(toUpperCaseMango.toLowerCase() == "mango");

// console.log("Is MANGO is not equal to mango after convertion to lowercase?");
// console.log(toUpperCaseMango.toLowerCase() !== "mango");

// Numerical tests:

// equality and inequality:

// console.log("Is ten is equal to seven?");
// console.log(ten == seven);

// console.log("Is ten is not equal to seven?");
// console.log(ten !== seven);

// greater than and less than:

// console.log("Is ten is not greater than to seven?");
// console.log(ten > seven);

// console.log("Is ten is less than to seven?");
// console.log(ten < seven);

// greater than or equal to, and less than or equal to:

// console.log("Is ten is not greater than or equal to seven?");
// console.log(ten >= seven);

// console.log("Is ten is less than or equal to seven?");
// console.log(ten <= seven);

// Tests using "and" and "or" operators:

// console.log("ten is not equal to seven and ten is greater than seven");
// console.log(ten != seven && seven < ten) ;

// console.log("ten is not equal to seven or seven is equal seven");
// console.log(ten != seven || seven == seven) ;

// Test whether an item is in a array:

// console.log("is pink include in my array?");
// console.log(colors.includes("pink"));

// Test whether an item is not in a array:

// console.log("is black include in my array?");
// console.log(colors.includes("black"));

// Question no:25

// Alien Colors #1: Imagine an alien was just shot down in a game. Create a
// variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

// • Write an if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that
// fails. (The version that fails will have no output.)

// Answer:

// let alien_color = "green"

// if (alien_color === "green") {
//     console.log("player just earned 5 points.");
    
// }

// if(alien_color === "red"){
//     console.log("player just earned 10 points.");
    
// }

// Question no:26

// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.

// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.

// Answer:

// let alien_color = "green";

// if (alien_color === "green") {
//     console.log("player just earned 5 points for shooting the alien.")
    
// }

// else{
//     console.log("player just earned 10 points.");
    
// }

// // second version:

// if (alien_color == "pink") {
//     console.log("runs the if block");
   
// }

// else{
// console.log("runs the else block.");

// }

// Question no:27

// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

// Answer:

// let aliencolor1 = "green";

// if (aliencolor1 === "green") {
//     console.log("the player earned 5 points.");
    
// }

// else if(aliencolor1 === "yellow"){
//     console.log("player earned 10 points.");
    
// }

// else if(aliencolor1 === "red"){
//     console.log("player earned 15 points.");

// }
    
// version 2

// let aliencolor2 = "yellow";

// if (aliencolor2 === "green") {
//     console.log("the player earned 5 points.");
    
// }

// else if(aliencolor2 === "yellow"){
//     console.log("player earned 10 points.");
    
// }

// else if(aliencolor2 === "red"){
//     console.log("player earned 15 points.");

// }

// version 3

// let aliencolor3 = "red";

// if (aliencolor3 === "green") {
//     console.log("the player earned 5 points.");
    
// }

// else if(aliencolor3 === "yellow"){
//     console.log("player earned 10 points.");
    
// }

// else if(aliencolor3 === "red"){
//     console.log("player earned 15 points.");

// }

// Question no:28

// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.

// Answer:

// let age = 22;

// if (age < 2) {
//    console.log("the person is a baby.");
    
// }

// else if (age >= 2 && age < 4 ){
//     console.log("the person is a toddler.");
    
// }

// else if (age >= 4 && age < 13){
// console.log("the person is a kid.");

// }

// else if (age >= 20 && age < 65){
//     console.log("the person is an adult.");
    
// }

// else if (age >= 65 ){
//     console.log("the person is an elder.");
    
// }

// Question no:29

// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!

// Answer:

// let favourite_fruits = ["Apple", "Mango", "Orange"];

// using 5 independent if statements:

// if (favourite_fruits.includes("Mango")){
// console.log("I like Mango");

// }

// if (favourite_fruits.includes("Apple")){
//     console.log("I like Apple");
    
// }

// if (favourite_fruits.includes("Gava")){
//     console.log("I like gava");
    
// }

// if (favourite_fruits.includes("Orange")){
//     console.log("I like orange");
    
// }

// if (favourite_fruits.includes("Water-melon")){
//     console.log("I like Water-melon");
    
//     }

// Question no:30

// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
// after they log in to a website. Loop through the array, and print a greeting to each user:

// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

// Answer:

// let username = ["Ali", "Hammad", "Anaya", "Admin", "Sana"];

// // using forEach loop on Array:

// username.forEach(oneuser => {
// if (oneuser === "Admin"){
//     console.log(`Hello admin, would you like to see a status report?`);
    
// }else{
//     console.log(`Hello ${oneuser} thank you for logging in again.`);
    
// }
// } )

// Question no:31

// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

// Answer:

// let username = ["Ali", "Hammad", "Anaya", "Admin", "Sana"];

// username = []

// if(username.length === 0){
//     console.log("We need to find some users!");
    
// }else{
//     // using forEach loop on Array:

//     username.forEach(oneuser => {
//         if (oneuser === "Admin"){
//             console.log(`Hello admin, would you like to see a status report?`);
            
//         }else{
//             console.log(`Hello ${oneuser} thank you for logging in again.`);
            
//         }
//         } )
// }

// Question no:32

// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// // Answer:

// // array of current and new users:
// let current_users = ["Ahmed","Bilal", "Rabia", "Ali", "Aneeqa"];
// let new_users = ["Ayesha","Bilal", "Rahima", "Hamza", "Aneeqa"];

// // loop throug new_users to check for usernames availablity:
// new_users.forEach(new_one_user => {
    
// // making a condition for username already exist and save in our condition's variables:  
// let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

// // print different messages using if,else statement:
// if(our_condition){
// console.log(`sorry ${new_one_user} is already taken!`);

// }else{
//     console.log(`This username ${new_one_user} is available.`); 
// }
// })

// Question no:33

// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
// 7th 8th 9th", and each result should be on a separate line.

// Answer:

// let numbers = [1,2,3,4,5,6,7,8,9];

// // using for loop:
// for(let oneNumber of numbers){
// let ordinalEnding: string;

// if(oneNumber === 1){
// ordinalEnding = "st"
// }
// else if(oneNumber === 2){
//     ordinalEnding = "nd"
// }
// else if(oneNumber === 3){
// ordinalEnding = "rd"
// }
// else {
//     ordinalEnding = "th"
// }
//     console.log(`${oneNumber}${ordinalEnding}`);
    
// }

// Question no:34

// Pizzas: Think of at least three kinds of your favorite pizza. Store these
// pizza names in a array, and then use a for loop to print the name of each pizza.

// • Modify your for loop to print a sentence using the name of the pizza
// instead of printing just the name of the pizza. For each pizza you should
// have one line of output containing a simple statement like I like pepperoni
// pizza.

// • Add a line at the end of your program, outside the for loop, that states
// how much you like pizza. The output should consist of three or more lines
// about the kinds of pizza you like and then an additional sentence, such as
// I really love pizza!

// Answer:

// let Pizza = ["Chicken Tikka", "Malai cheese", "Fajita"];

// // usisng for loop:
// for (let onepizza of Pizza){
// console.log(`I like ${onepizza} pizza`);

// }

// // print a message outside of the for-loop:
// console.log("I really love pizza!");

// Question no:35

// Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!

// Answer:

// let petAnimals = ["Cat", "Dog", "Rabbit",]

// // using for-loop:
// for(let onepet of petAnimals){
// console.log(`A ${petAnimals} would make a great pet.`);

// }

// // print a message outside of for-loop:
// console.log("Any of these animals would make a great pet!");

// Question no:36

// T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.

// Answer:

// function make_shirt(size:string, printMessage:string) {
// console.log(`you selected ${size} size shirt with ${printMessage} print on shirt`);
    
// }

// calling a function:
// make_shirt("medium", "you are perfect");

// Question no:37

// Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.

// Answer:

// function make_shirt(size:string= "large", printMessage:string = " I love tYpescript!") {
//     console.log(`created a ${size} shirt with the ${printMessage} print on shirt`);
    
// }

// // calling a function:
// make_shirt();

// // calling a function now with medium size and default message:
// make_shirt("medium")

// // calling a function now small size with a different message:
// make_shirt("small", "I love adventure!")

// Question no:38

// Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.

// Answer:

// describe/creating function:
// function describe_city(cityname:string, countryname:string = "Pakistan" ) {
//     console.log(`${cityname} is in ${countryname}`);  
// }

// // calling the function:
// describe_city("Karachi");

// describe_city("Islamabad");

// describe_city("Berlin", "German");

// Question no:39

// City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value
// that’s returned.

// Answer:

// function city_country(city:string , country:string) : string {
//     return `${city} , ${country}`;
// }

// // calling a function and print the return value
// console.log(city_country("Karachi", "pakistan"));

// console.log(city_country("Tokyo", "Japan"));

// Question no:40

// Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.

// Answer:

// function make_album(artist_name:string, album_title:string, tracks? : number) {
// let album: {artist: string, title: string, tracks?: number} = {
//     artist: artist_name,
//     title: album_title,
// };
// if(tracks !== undefined){
//     album.tracks = tracks;
// }

// return album;
// }

// // calling function:
// let album1 = make_album("Atif Aslam", "album_title 1");

// let album2 = make_album("Ali Zafar", "album_title 2");

// let album3 = make_album("Nimra Mehra", "album_title 3", 10);


// // print values of our object created my fuction:
// console.log(album1);
// console.log(album2);
// console.log(album3);

// Question no:41

// Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.

// Answer:

// function show_magicians(magicians:string[]){
//     magicians.forEach(name => console.log(name));
    
// }

// // Define an array:
// let magicians_names = ["Faizan", "Ayan", "Rohan"]

// // call the function:
// show_magicians(magicians_names);

// Question no:42

// Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.

// Answer:

// function show_magicians(magicians:string[]){
//     magicians.forEach(name => console.log(name));
// }

// // function to make magicians great through .map() it will be modify array:
// function make_great(magicians: string[]){
//    return magicians.map(name =>  `The Great ${name}`);
// }

// // definnig array:
// let magicians_names = ["Faizan", "Ayan", "Rohan"]

// // calling make_great function to modigy magicians names:
// let great_magicians = make_great(magicians_names);

// // calling show_function that show nmodify list of magicians:
// show_magicians(great_magicians)

// Question no:43

// Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.

// // Answer:

// function show_magicians(magicians:string[]){
//     magicians.forEach(name => console.log(name));
// }

// // function to make magicians great through .map() it will be modify array:
// function make_great(magicians: string[]){
//    return magicians.map(name =>  `The Great ${name}`);
// }

// // definnig array:
// let magicians_names = ["Faizan", "Ayan", "Rohan"]

// // making a copy of original array throug .slice() fuction:
// let copy_magicians_names = magicians_names.slice()

// // modify the copied array to include "the great" with their names:
// let copy_great_magicians = make_great(copy_magicians_names);

// // show both arrays original and copied:

// // original:
// console.log("Original Array\n");
// show_magicians(magicians_names);

// // copied:
// console.log("\nCopied Array\n");
// show_magicians(copy_great_magicians);

// Question no:44

// Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.

// // Answer:

// function makeSandwich(...items:string[]) {
//     console.log("making a sandwich with the followig items: \n");
    
//     items.forEach(singleitem => console.log(singleitem));
//     console.log("\n now enjoy sandwich");
    
// }

// // calling the fuction:
// // 3 times with the 3 different arguments:

// makeSandwich("Chicken", "Cheese", "Egg", "Mayo");

// makeSandwich("Breed", "Butter", "Egg")

// makeSandwich("chicken kabab", "Ketchup", "Mayo", "Egg", "Tomato", "Chesse")

// Question no:45

// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.

// Answer:

// interface Car {
//     manufacturer: string;
//     model: string;
//     [key: string]: string; 
// }

// // // Allow additional properties of type string
// function create_car(manufacturer: string, model: string, ...options: string[]){

//     // initialize a car object with manufacturer and model
// let car : Car = {
//     manufacturer: manufacturer,
//     model:model,
// }

// // add additional options to the car object:
// options.forEach(option => {
//     let [key , value] = option.split(":");
//     car[key.trim()] = value.trim();
// });

// return car;

// }

// // callint the function:
// let my_car = create_car("Toyota", "Corolla", "Color: Black", "Sunroof: True");

// // print the variable:
// console.log(my_car);





















