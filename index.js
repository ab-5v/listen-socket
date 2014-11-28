var fs = require('fs');

module.exports = function(server, path, callback) {
    var mask = process.umask(0);

    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }

    server.listen(path, function(err) {
        if (mask) {
            process.umask(mask);
            mask = null;
        }
        callback.apply(null, arguments);
    });
};
