const database = require('../Repositories/database')
require('dotenv').config();
class User {
    constructor(id, name, room, phone = '') {
        this.id = id
        this.name = name
        this.room = room
        this.phone = phone
    }

    join() {
        database.users.push({ id: this.id, name: this.name, room: this.room })
        return this
    }

    static disconnect(id) {
        const index = database.users.findIndex((user) => user.id == id)
        if (index !== -1) {
            return database.users.splice(index, 1)[0];
        }
    }

    static getUser(id) {
        return database.users.find((user) => user.id === id)
    }
}

module.exports = User
