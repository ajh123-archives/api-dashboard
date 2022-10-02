import session from "express-session";
var FileStore = require('session-file-store')(session);

var fileStoreOptions = {};

const storage = session({
    store: new FileStore(fileStoreOptions),
    secret: process.env.SESSION_SECRET, 
    cookie: {
        secure: process.env.NODE_ENV === 'production', // Prod is supposed to use https
        sameSite: process.env.NODE_ENV === "production" ? 'none' : 'lax', // must be 'none' to enable cross-site delivery
        httpOnly: true,
        maxAge: 1000 * 60
    },
    name: "bank_data",
    resave: true,
    saveUninitialized: true,
});

exports.storage = storage;
export default storage;