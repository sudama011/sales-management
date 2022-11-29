const oracledb = require('oracledb');


const mypw = 'sqlpassword';

async function insertManager(empid, FName, LName) {
    let connection;

    try {
        connection = await oracledb.getConnection({
            user: "hr", password: mypw
        });
        oracledb.autoCommit = true;
        await connection.execute(
            `INSERT INTO manager (manager_id, first_name, last_name) values (:e, :fn, :ln)`, [empid, FName, LName]
        );
        resolve(result.rows);

    } catch (err) { // catches errors in getConnection and the query
    }
    finally {
        if (connection) {   // the connection assignment worked, must release
            try {
                await connection.release();
            } catch (e) {
                console.error(e);
            }
        }
    }
};

function getEmployee(empid) {
    return new Promise(async function (resolve, reject) {
        let connection;

        try {
            connection = await oracledb.getConnection({
                user: "hr", password: mypw
            });

            const result = await connection.execute(
                `SELECT * FROM manager order by manager_id`
            );
            resolve(result.rows);

        } catch (err) { // catches errors in getConnection and the query
            reject(err);
        } finally {
            if (connection) {   // the connection assignment worked, must release
                try {
                    await connection.release();
                } catch (e) {
                    console.error(e);
                }
            }
        }
    });
}

async function run() {
    try {
        //await insertManager(3, 'Tarun', 'Goyal');
        const res = await getEmployee(1);
        console.log(res);
    } catch (err) {
        console.error(err);
    }
}

run();


module.exports = { insertManager, getEmployee, run }

