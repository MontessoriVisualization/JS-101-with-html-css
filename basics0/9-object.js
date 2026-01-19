const LetsLearnUser = {
    name:"pawan",
    "job work":"developer",
    age:22,
    email:"pawan@gmail.com",
    isLoggedIn:true,
    lastLoginDays:["Monday","Friday","Saturday"],
};
console.log(LetsLearnUser);
console.log(LetsLearnUser["job work"]);
console.log(typeof LetsLearnUser);
console.log(LetsLearnUser.email);
console.log(LetsLearnUser["email"]);
console.log(LetsLearnUser.lastLoginDays[1]);
LetsLearnUser["email"] = "pawan_new@gmail.com";
console.log(LetsLearnUser.email);
console.log(LetsLearnUser.isLoggedIn);
if(LetsLearnUser.isLoggedIn){
    console.log("User is logged in");
}
 LetsLearnUser.points = 45;
 console.log(LetsLearnUser);
 LetsLearnUser.lastLoginDays.push("Sunday");
 LetsLearnUser.greating = function(){
    console.log("Hello "+this.name+" , welcome back!");
 }
    LetsLearnUser.greating();


    const anotherUser = new Object();

    anotherUser.name = "saugat";
    anotherUser.age = 25;
    anotherUser.email = "saugat@gmail.com";
    anotherUser.isLoggedIn = false;
    anotherUser.lastLoginDays = ["Tuesday","Friday"]; 
    
    console.log(anotherUser);
    const totalUser = {...LetsLearnUser,...anotherUser};
    console.log(totalUser);
    console.log(Object.keys(totalUser));
    console.log(Object.values(totalUser));

    // 1 object school next class details
    //  object student details


    const school = {
    class1: {
        teacher: "Mr. Smith",
        subject: "Mathematics",
        students: {
            Alice: {  age: 14 },
            Bob: {  age: 15    },  
            
        },
    }
    ,
    class2: {
        teacher: "Ms. Johnson", 
        subject: "English",
    },
    class3: {
        teacher: "Mrs. Brown",
        subject: "Science",
    },
    };  
    console.log(Object.keys(school.class1.students));

    //hw create an object for a student with properties like name, age, grade, subjects (array of subjects), and a method to display student details.


    const students = {
        joe: {
            name: "Joe",
            age: 16,
            grade: "10th",
            subjects: ["Math", "Science", "History"],
    
        },
        kelly: {
            name: "Kelly",
            age: 15,
            grade: "9th",
            subjects: ["English", "Art", "Physical Education"],
         

        }
    };
  function displayStudentDetails(a){
    console.log("Name: "+a.name);
    console.log("Age: "+a.age);
    console.log("Grade: "+a.grade);
    console.log("Subjects: "+a.subjects.join(", "));
  }
    displayStudentDetails(students.joe);