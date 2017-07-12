
export function getAll(db, callback) {
    db.collection('library').find().toArray((err, docs) => {
        if (err) {
            console.log("error getting collection", err);
            return callback(err, null);
        }
        return callback(null, docs);
    });
}

export function update(db, query, update, callback) {
    db.collection('library').update(query, { $set: update }, { multi: true }, (err, docs) => {
        if (err) {
            console.log("error updating collection", err);
            return callback(err, null);
        }
        return callback(null, docs);
    });
}

export function insert(db, data, callback) {
    db.collection('library').insert(data, (err) => {
        if (err) {
            console.log("error inserting", err);
        }
        return callback();
    });
}