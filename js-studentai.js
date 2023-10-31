/* Parasykite programa, kurios pagalba galima atlikti studentu,
*  paieska pagal varda.
*  Issokusiam prompt lange ivedamas studento vardas.
*  Jeigu studentas surandamas, console isvedami jo duomenys.
*  Jeigu nerandamas, isvedamas uzrasas: Tokio studento nera.
*  Paieskai realizuoti galite naudoti js funkcija includes.
 */

let students = [
    {
      id: 1,
      firstName: "Tadas",
      lastName: "Tadauskas",
      email: "tadas.tadauskas@gmail.com",
      group: "students",
      marks: [
        {
          subject: "Programming",
          mark: 8,
        },
        {
          subject: "IT",
          mark: 6,
        },
        {
          subject: "Math",
          mark: 7,
        },
      ],
    },
    {
      id: 2,
      firstName: "Ieva",
      lastName: "Ievaite",
      email: "ieva.ievaite@gmail.com",
      group: "students",
      marks: [
        {
          subject: "Programming",
          mark: 4,
        },
        {
          subject: "IT",
          mark: 9,
        },
        {
          subject: "Math",
          mark: 6,
        },
      ],
    },
    {
      id: 3,
      firstName: "Migle",
      lastName: "Miglaite",
      email: "migle.miglaite@gmail.com",
      group: "students",
      marks: [
        {
          subject: "Programming",
          mark: 4,
        },
        {
          subject: "IT",
          mark: 8,
        },
        {
          subject: "Math",
          mark: 5,
        },
      ],
    },
    {
      id: 4,
      firstName: "Vardenis",
      lastName: "Tadauskas",
      email: "vardenis.tadauskas@gmail.com",
      group: "students",
      marks: [
        {
          subject: "Programming",
          mark: 6,
        },
        {
          subject: "IT",
          mark: 8,
        },
        {
          subject: "Math",
          mark: 5,
        },
      ],
    },
    {
      id: 5,
      firstName: "Kipras",
      lastName: "Kiprauskas",
      email: "kipras.kiprauskas@gmail.com",
      group: "students",
      marks: [
        {
          subject: "Programming",
          mark: 9,
        },
        {
          subject: "IT",
          mark: 10,
        },
        {
          subject: "Math",
          mark: 10,
        },
      ],
    },
  ];

console.log('Studentai:')
  for (let student of students) {
    console.log("---------------------------");
    for (let studentData in student) {
      if (studentData === "group") {
        console.log(`Grupe:${student[studentData]} `);
      } else {
        if (studentData === "marks") {
          console.log("Ivertinimai:");
          for (marks of student[studentData]) {
            console.log(`${marks.subject}:${marks.mark}`);
          }
        }
        console.log(student[studentData]);
      }
    }
  }



    studentName = prompt('Iveskite ieskomo studento varda');
    for(let student of students){
        for(let studentData in student){
            if(student.includes(studentName)){
                alert(`Studentas ${StudentName}`)
            }
            else
                alert('Tokio studento nera')
            
        }

    }
