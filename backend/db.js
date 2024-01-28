const sqlite3 = require("sqlite3").verbose()

let db = new sqlite3.Database('../db/test1.db', sqlite3.OPEN_READWRITE, (err)=>{
    if(err){
        console.error(err.message);
    }
})

function getAll(){
    let sql = 'SELECT * FROM todo';

    db.all(sql, [], (err, rows) => {
        if(err){
            throw err;
        }
        rows.forEach((row)=>{
            console.log(row)
        })
        return rows;
    })
}

function insert(title, desc){  
      db.run('INSERT INTO todo (title, desc) values (?, ?)', title, desc, function(err){
        if(err){
            return console.error(err.message)
        }

        console.log('A row has been inserted with rowid ${this.lastID}');
      })
}

module.exports = {
    getAll,
    insert
}