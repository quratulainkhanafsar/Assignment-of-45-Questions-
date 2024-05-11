"use strict";
// Assaignment of 45 Questions:
Object.defineProperty(exports, "__esModule", { value: true });
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
let colors = ["red", "blue", "green", "pink"];
// // Allow additional properties of type string
function create_car(manufacturer, model, ...options) {
    // initialize a car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    // add additional options to the car object:
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    return car;
}
// callint the function:
let my_car = create_car("Toyota", "Corolla", "Color: Black", "Sunroof: True");
// print the variable:
console.log(my_car);
