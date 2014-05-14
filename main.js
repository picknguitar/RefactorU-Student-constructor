/*student class*/

var Person = function(name, age) {
	this.name = name;				/*don't get this*/
	this.age = age;				/*superclass?? - prototype? */
};

Person.prototype.getYearBorn = function() {
	var today = new Date();
	return today.getFullYear() - this.age;
};

var Student = function(name, age, city) {
	Person.call(this, name, age);		/*invoke the superclass's constructor*/
	// this.name = name;
	// this.age = age; 
	this.city = city;
	this.grades = [];

/*prompts the user for student's grade*/	
	

/*return the average of all the grades*/
	this.currentGrade = function() {
		var total = 0;
		for(var i =0; i<this.grades.length; i++) {
			total += this.grades[i];
		}

		return total/this.grades.length;
	};
};
Student.prototype = new Person();
Student.prototype.constructor = Student;
//1.define a classroom class with a list of students, a subject and a teacher
//2. define a teacher class with a name and an array of subjects they can teach


Student.prototype.takeTest = function () {
		var score = prompt('What did you receive on the test?');
	this.grades.push(score);	
	};


var Classroom = function(teacher, subject) {
	this.students = [];
	this.subject = subject;			/*new Classroom(pass values!)Class*/
	this.teacher = teacher; 
};

var Teacher = function(fullName, age, subjects, city) {
	Person.call(this, fullName, age);
	// this.name = fullName;
	// this.age = age;						/*new Teacher('Raine', ['Java', 'C++', 'CSS'])*/
	this.subjects = subjects;
	this.city = city;
};
Teacher.prototype = new Person();
Teacher.prototype.constructor = Teacher;


var tom = new Student('Tom', 35, 'Sacramento');
var sarah = new Student('Sarah', 28, 'Sun Valley');
var paul = new Student('Paul', 19, 'Puerta Vallarta');

var nick = new Teacher('Nick', 38, ['Math', 'English'], 'Mobile');
var john = new Teacher('John', 83, ['Spanish', 'French', 'History'], 'Lafeyette');







tom.grades.push(95);
tom.grades.push(85);
tom.grades.push(56);

sarah.grades.push(100);
sarah.grades.push(101);
sarah.grades.push(100);
