// to use firebase admin tool to validate the token which we will get from frontend

let admin = require("firebase-admin");

let serviceAccount = require("../config/fbAdminKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://shopify-ecommerce.firebaseio.com",
});

module.exports = admin;
