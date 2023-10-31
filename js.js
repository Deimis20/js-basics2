// let items = ['Phone', 'Pencil', 'Box', 'Table'];

// let user = {
//     id:1,
//     name:"Jonas",
//     email:'jonux123@gmail.com',
//     role:"Admin"
// }
// for(let userData in user){
//     // console.log(user[userData])
//     console.log(`${userData}:${user[userData]}`)
// }

// Parasykite for cikla, kuris atspausdina masyvo elementu reiksmes.

// console.log('For ciklas:');

// for(let i=0;i<items.length;i++){
//     console.log(items[i])
// }

// for(let item of items){
//     console.log(item)
// }

// let students = [
//   {
//     id: 1,
//     firstName: "Tadas",
//     lastName: "Tadauskas",
//     email: "tadas.tadauskas@gmail.com",
//     group: "students",
//     marks: [
//       {
//         subject: "Programming",
//         mark: 8,
//       },
//       {
//         subject: "IT",
//         mark: 6,
//       },
//       {
//         subject: "Math",
//         mark: 7,
//       },
//     ],
//   },
//   {
//     id: 2,
//     firstName: "Ieva",
//     lastName: "Ievaite",
//     email: "ieva.ievaite@gmail.com",
//     group: "students",
//     marks: [
//       {
//         subject: "Programming",
//         mark: 4,
//       },
//       {
//         subject: "IT",
//         mark: 9,
//       },
//       {
//         subject: "Math",
//         mark: 6,
//       },
//     ],
//   },
//   {
//     id: 3,
//     firstName: "Migle",
//     lastName: "Miglaite",
//     email: "migle.miglaite@gmail.com",
//     group: "students",
//     marks: [
//       {
//         subject: "Programming",
//         mark: 4,
//       },
//       {
//         subject: "IT",
//         mark: 8,
//       },
//       {
//         subject: "Math",
//         mark: 5,
//       },
//     ],
//   },
//   {
//     id: 4,
//     firstName: "Vardenis",
//     lastName: "Tadauskas",
//     email: "vardenis.tadauskas@gmail.com",
//     group: "students",
//     marks: [
//       {
//         subject: "Programming",
//         mark: 6,
//       },
//       {
//         subject: "IT",
//         mark: 8,
//       },
//       {
//         subject: "Math",
//         mark: 5,
//       },
//     ],
//   },
//   {
//     id: 5,
//     firstName: "Kipras",
//     lastName: "Kiprauskas",
//     email: "kipras.kiprauskas@gmail.com",
//     group: "students",
//     marks: [
//       {
//         subject: "Programming",
//         mark: 9,
//       },
//       {
//         subject: "IT",
//         mark: 10,
//       },
//       {
//         subject: "Math",
//         mark: 10,
//       },
//     ],
//   },
// ];

/*
Isvesti studentus tokiu budu:

Studentai:
------------------------
Rokas
Rakauskas
rokas.rakauskas.@gmail.com
Grupe: students
------------------------


*/

// for (let student of students) {
//   console.log("---------------------------");
//   for (let studentData in student) {
//     if (studentData === "group") {
//       console.log(`Grupe:${student[studentData]} `);
//     } else {
//       if (studentData === "marks") {
//         console.log("Ivertinimai:");
//         for (marks of student[studentData]) {
//           console.log(`${marks.subject}:${marks.mark}`);
//         }
//       }
//       console.log(student[studentData]);
//     }
//   }
// }


// let names = ['Jonas', 'Andrius', 'Ieva', 'Karolis']; // masyvas

// names = names.join(','); // names tampa stringu

// names = names.split(','); // names tampa masyvu

// console.log(names); // isvedimas
// console.log('-----------------')




// names.push('Giedrius'); // prideda i masyvo gala reiksme

// names.pop(); // isima paskutini masyva

// names.unshift('Kristina'); // prideda i prieki masyva

// names.shift() //pasalina is priekio masyva

// names.splice(3,0,"Gintaras");


// names = names.join(','); // names tampa stringu
// console.log(names); // isvedimas
// console.log('-----------------')















// /*
// Reikia sukurti sveciu saraso aplikacija.
// Paleidus programa issoka langas ir paklausia, kiek sveciu bus partyje.
// Ivedus skaiciu, rodomas kitas langas, kuriame reikia pakviesti svecia.
// Sis langas kartojamas tiek kartu kiek reikia pakciesti sveciu.
// Pabaigus duomenu ivedima isvedamas sveciu sarasas.
// Bonus uzduotis:
// Sukurti masyva blacklist. Jeigu svecias yra blackliste i sarasa jo neitraukiam.


// // let kieksveciu = prompt('Iveskite keik sveciu bus kvieciama');

// // let list = []
// // let blacklist = ['Tadas, Gintaras, Arvydas']
    
// // if (isNaN(kieksveciu)){
// //     alert('Koks partis jei nebus sveciu?')
// // }
// //     else;
// // for(let) 



// // console.log(kieksveciu);
// */
// (function(){
// //Funkcijos Deklaravimas
// function syHi(a){
//     return a*2;
// }


// //Funkcijos call
// console.log(syHi(5));



// const calc = function(...numbers){
//     return numbers.reduce((prev, current)=>prev+current);
// }
// console.log(calc(5,8,4,8,6,4,5,9,9,4,8,4))
// })();