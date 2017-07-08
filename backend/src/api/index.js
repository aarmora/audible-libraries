import Express from 'express';
import { initializeMongo } from '../data/mongo.connection';
import { getAll } from '../data/actions';

const app = Express();
const port = 3022;

initializeMongo((db) => {
    // respond with "hello world" when a GET request is made to the homepage
    app.get('/', function (req, res) {
        getAll(db, (err, docs) => {
            if (err) {
                res.send(500, err);
            }
            res.send(docs);
        });
    });

    app.listen(port, () => {
        console.log("listening at: ", port);
    });
});



