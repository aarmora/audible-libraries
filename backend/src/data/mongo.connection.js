import { MongoClient } from 'mongodb';
let config = require('../../config');

let url = `mongodb://${config.dbuser}:${config.dbpassword}@${config.dburl}`;

let _db;

export function initializeMongo(callback) {
    MongoClient.connect(url, (err, db) => {
        if (err) {
            console.log("db connection error: ", err);
            return callback(err);
        }
        return callback(db);
    })
}

