import { initializeMongo } from './data/mongo.connection';
import * as actions from './data/actions';

let books = require('./ashli-books.json');

initializeMongo((db) => {
    actions.insert(db, books, (err) => {
        console.log("inserted maybe");
    });
});