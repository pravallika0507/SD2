class Student {
    constructor() {
        //define initial variable
    }
}

class Student1 {
    //Attributes
    firstName;
    lastName;
    courseId;

    constructor() {

    }
}

class Student2 {
    //Atributes
    firstName1;
    lastName1;
    courseId1;

    constructor(firstName1, lastName1, courseId1) {
        this.firstName1 = firstName1;
        this.lastName1 = lastName1;
        this.courseId1 = courseId1;
    }
    getFormattedName() {
        return this.firstName1 + ' ' + this.lastName1;
    }
}