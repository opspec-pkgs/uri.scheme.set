const fs = require('fs');
const {scheme, uri} = process.env;

fs.writeFileSync('/uri', `${scheme}${uri.substr(uri.indexOf(':'))}`);
