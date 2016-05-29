function Human(name, age, gender, height, weight){
   this.name= name;
   this.age= age;
   this.gender= gender;
   this.height= height;
   this.weight= weight; 
};


function  Worker () {
    this.work='web developer';
    this.solary=1000000;
    this.make=function(){
        console.log('Развивает бизнес');
    };
    
};
function Student () {
    this.school='GoIT';
    this.scholarship=100;
    this.watchtv= function(){
        console.log('Любит спорт');
    };
};

Worker.prototype = new Human('Юрий', 48, 'male', 165, 80);
Student.prototype = new Human('Егор', 22, 'male', 170, 65);


var newStudent = new Student();

console.log('newStudent.gender', newStudent.gender );
console.log('newStudent.name', newStudent.name );

console.log('newStudent.age', newStudent.age + "лет");
console.log('newStudent.height', newStudent.height + "cm");
console.log('newStudent.weight', newStudent.weight + "kg");


newStudent.watchtv();


var newWorker = new Worker();

console.log('newWorker.gender', newWorker.gender);
console.log('newWorker.name', newWorker.name);

console.log('newWorker.age', newWorker.age + "лет");
console.log('newWorker.height', newWorker.height + "cm");
console.log('newWorker.weight', newWorker.weight + "kg");

newWorker.make();

