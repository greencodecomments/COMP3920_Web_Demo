const database = include('databaseConnection');

async function createTables() {
	let createUserSQL = `
		CREATE TABLE IF NOT EXISTS user (
            user_id INT NOT NULL AUTO_INCREMENT,
            username VARCHAR(25) NOT NULL,
            password VARCHAR(100) NOT NULL,
            PRIMARY KEY (user_id),
            UNIQUE INDEX unique_username (username ASC) VISIBLE);
	`;
	
	try {
		const results = await database.query(createUserSQL);

        console.log("Successfully created tables");
		console.log(results[0]);
		return true;
	}
	catch(err) {
		console.log("Error Creating tables");
        console.log(err);
		return false;
	}
}

module.exports = {createTables};