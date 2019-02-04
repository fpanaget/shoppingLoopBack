let VCAP;

// PRODUCTION CREDENTIALS
// Check for VCAP_SERVICES on the server
if (process.env.VCAP_SERVICES) {
  VCAP = JSON.parse(process.env.VCAP_SERVICES);
}
// LOCAL DEVELOPMENT
// Check for local credentials; log error if it fails
else {
  try {
    VCAP = require('./env.json');
  } catch (e) {
    console.error(e);
  }
};

// Export our data-sources for convenience
let DATASOURCES = {
  "accesstoken_cloudantVUDS": {
    "url":VCAP.cloudantNoSQLDB[0].credentials.url,
    "database": "accesstoken",
    "username": VCAP.cloudantNoSQLDB[0].credentials.username,
    "password": VCAP.cloudantNoSQLDB[0].credentials.password,
    "name": "accesstoken_cloudantVUDS",
    "plugin": "retry",
    "retryAttempts": 10,
    "retryTimeout": 2000,
    "connector": "cloudant"
  },
  "acl_cloudantVUDS": {
    "url":VCAP.cloudantNoSQLDB[0].credentials.url,
    "database": "acl",
    "username": VCAP.cloudantNoSQLDB[0].credentials.username,
    "password": VCAP.cloudantNoSQLDB[0].credentials.password,
    "name": "acl_cloudantVUDS",
    "plugin": "retry",
    "retryAttempts": 10,
    "retryTimeout": 2000,
    "connector": "cloudant"
  },
  "role_cloudantVUDS": {
    "url":VCAP.cloudantNoSQLDB[0].credentials.url,
    "database": "role",
    "username": VCAP.cloudantNoSQLDB[0].credentials.username,
    "password": VCAP.cloudantNoSQLDB[0].credentials.password,
    "name": "role_cloudantVUDS",
    "plugin": "retry",
    "retryAttempts": 10,
    "retryTimeout": 2000,
    "connector": "cloudant"
  },
  "rolemapping_cloudantVUDS": {
    "url":VCAP.cloudantNoSQLDB[0].credentials.url,
    "database": "rolemapping",
    "username": VCAP.cloudantNoSQLDB[0].credentials.username,
    "password": VCAP.cloudantNoSQLDB[0].credentials.password,
    "name": "rolemapping_cloudantVUDS",
    "plugin": "retry",
    "retryAttempts": 10,
    "retryTimeout": 2000,
    "connector": "cloudant"
  },
  "product_cloudantVUDS": {
    "url":VCAP.cloudantNoSQLDB[0].credentials.url,
    "database": "product",
    "username": VCAP.cloudantNoSQLDB[0].credentials.username,
    "password": VCAP.cloudantNoSQLDB[0].credentials.password,
    "name": "product_cloudantVUDS",
    "plugin": "retry",
    "retryAttempts": 10,
    "retryTimeout": 2000,
    "connector": "cloudant"
  },
  "order_cloudantVUDS": {
    "url":VCAP.cloudantNoSQLDB[0].credentials.url,
    "database": "order",
    "username": VCAP.cloudantNoSQLDB[0].credentials.username,
    "password": VCAP.cloudantNoSQLDB[0].credentials.password,
    "name": "order_cloudantVUDS",
    "plugin": "retry",
    "retryAttempts": 10,
    "retryTimeout": 2000,
    "connector": "cloudant"
  },
  "customer_cloudantVUDS": {
    "url":VCAP.cloudantNoSQLDB[0].credentials.url,
    "database": "customer",
    "username": VCAP.cloudantNoSQLDB[0].credentials.username,
    "password": VCAP.cloudantNoSQLDB[0].credentials.password,
    "name": "customer_cloudantVUDS",
    "plugin": "retry",
    "retryAttempts": 10,
    "retryTimeout": 2000,
    "connector": "cloudant"
  }
};

module.exports = { VCAP, DATASOURCES };