const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
})

class User {
    constructor(name, username, email) {
        this.name = name
        this.username = username
        this.email = email
        this.courses = []
    }

    async addCourse(course) {
        this.courses.push(course)
        await this.save()
    }

    async removeCourse(course) {
        this.courses.splice(courses.indexOf(course), 1)
        await this.save()
    }
}

userSchema.loadClass(User) // associates user class with user schema
userSchema.plugin(autopopulate)

module.exports = mongoose.model('User', userSchema)
