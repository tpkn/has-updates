Light and easy-to-use plugin to check available app updates


## app.js
```javascript
const hasUpdates = require('has-updates');

hasUpdates("https://domain.me/public/apps/myapp/updates.json", electron.app.getVersion())
.then((result) => {
   console.log(result);
}, (error) => {
   console.log(error);
});

```


## updates.json
```json
{
   "version": "0.0.2",
   "win": {
      "url": "myapp-0.0.2.exe",
      "description": "Fixed horrible bugs"
   },
   "mac": {
      "url": "myapp-0.0.2.dmg",
      "description": "Fixed even more horrible bugs"
   },
   "linux": {
      "url": "myapp-0.0.2.zip",
      "description": "Meh..."
   }
}
```