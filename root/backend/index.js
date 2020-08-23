class User {
    constructor(name, username, email) {
        this.name = name
        this.username = username
        this.email = email
        this.courses = []
    }

    addCourse(course) {
        this.courses.push(course)
    }

    removeCourse(course) {
        this.courses.splice(courses.indexOf(course), 1)
    }
}

class Course {
    constructor(courseName) {
        this.courseName = courseName
        this.classes = []
    }
}

function signUp(name, username, email) {
    return new Person(name, username, email)
}
