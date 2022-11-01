const db = require('../config/db.js')

class Post {
    constructor(title, body) {
        this.title = title
        this.body = body
    }

    async save() {
        
    }

    static findAll() {
        let sql = "SELECT * FROM posts;"

        return db.execute(sql)
    }

    static findById(id) {
        let sql = `SELECT * FROM posts WHERE id=${id};`
        return db.execute(sql)
    }
}

module.exports = Post