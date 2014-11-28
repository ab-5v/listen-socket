listen-socket
=============

Start a UNIX socket server listening for connections on the given path.

```
npm i listen-socket --save
```

```js
var express = require('express');
var listen = require('listen-socket');

var app = express();
// ...
listen(app, path, function(err) {
  if (!err) { console.log('Server is running on' + path); }
});
```
