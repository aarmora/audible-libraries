## Synopsis

This project is to merge multiple audible libraries (read: multiple accounts) for easy browsing. When the audible-api is in place it will pull them live. In the meantime, we have to do the sad way of getting them manually and adding them to a mongo database. I will be using mlab for this.

I will use nodejs on the for any server side code and angular for front end.

## Motivation

I have multiple audible accounts and often share my books with my family (for better or worse, TOS). It's getting to be hundreds of books and I would like to minimize the amount of books duplicated within my family.

## Installation

Clone it, `npm install` in both backend and front end and then `npm start` on both front and back.

You'll need a config.js in the root of your backend, as a sibling of `package.json`. It should look something like this:

    let config = {};

    config.appClientId = 'stuffity'; // This will be used for the audible-api
    config.userToken = 'usertokenz'; // This will be used for the audible-api   
    config.dbuser = 'pizzaUser'; // Mongo db user
    config.dbpassword = 'ifPizzasNeededPasswordsThisWouldBeIt'; // Mongo db password
    config.dburl = 'pizzamcpizza.mlab.com:12345/someDbName'; // Mongo db url

    module.exports = config;

## Seeding Data

Since there currently is no API, I built a [script](https://gist.github.com/aarmora/ce4d24f0b28e0c9a187214ece948625a) that can be used to get the audible books if you use it in the developer tools console. It will create a json object that you can then use function in `custom.js` to more or less reference your json file and insert them all into the database.

## License

MIT license.