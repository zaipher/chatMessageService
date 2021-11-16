/**
 * Create a script that sets up the chat_logs table in a database found in:
 *  db/database.sqlite3
 * 
 * The script should drop the chat_logs table if it exists and always recreate the table.
 * Attributes should be as follows:
 *  - id INTEGER (Primary Key)
 *  - name TEXT
 *  - message TEXT
 *  - created_at DATE TIME
 * 
 * To run the script:
 *  node bin/dbsetup.js
 */
const sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database(`${__dirname}/../db/database.sqlite3`, (err) => {
    if(err) {
        console.log(err);
        return;
    }
});

var sqlDropTable = `
    DROP TABLE IF EXISTS chat_logs
`

db.run(sqlDropTable, (err) => {
    if(err) {
        console.log(err);
        return;
    }

    var sqlCreateTable = `
        CREATE TABLE chat_logs (
            id INTEGER NOT NULL PRIMARY KEY,
            name TEXT NOT NULL,
            message TEXT NOT NULL,
            created_at TEXT NOT NULL
        )
    `

    db.run(sqlCreateTable, (err) => {
        if(err) {
            return;
        }

        console.log("Successfully created chat_logs table.");
    })
});
