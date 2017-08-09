function setUriScheme(uri, scheme) {
    return `${scheme}${uri.substr(uri.indexOf(':'))}`;
}

console.log(`uri=${setUriScheme(process.env.uri, process.env.scheme)}`);
