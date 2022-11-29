const oracledb = require('oracledb');


const mypw = 'sqlpassword';
oracledb.autoCommit = true;
    async function Sales_record(Sale_id, Salesperson, customer, product, quantity) {
        let connection;

        try {
        connection = await oracledb.getConnection({
            user          : "hr", password      : mypw
        });
        await connection.execute(
            `INSERT INTO sale (Sale_id, Salesperson, Customer, Product, Quantity) values (:Sale_id, :Salesperson, :customer, :product, :quantity)`, [Sale_id, Salesperson, customer, product, quantity]
        );

        } catch (err) { // catches errors in getConnection and the query
            console.log(err);
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

    function getSP() {
        return new Promise(async function(resolve, reject) {
            let connection;
        
            try {
            connection = await oracledb.getConnection({
                user          : "hr", password      : mypw
            });
        
            const result = await connection.execute(
                `SELECT * FROM sale`
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
    
    async function work() {
    try {
        await Sales_record ('ABX-100000', 2, 'JPR-326', 'A4', 1000);
        const res = await getSP();
        console.log(res);
    } catch (err) {
        console.error(err);
    }
    }

    work();