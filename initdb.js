const db = require("./db");

db.run(`CREATE TABLE IF NOT EXISTS logs (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 message TEXT,
 created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)`);
