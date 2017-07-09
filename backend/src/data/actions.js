
export function getAll(db, callback) {
    db.collection('library').find().toArray((err, docs) => {
        if (err) {
            console.log("error getting collection", err);
            return callback(err, null);
        }
        return callback(null, docs);
    });
}

