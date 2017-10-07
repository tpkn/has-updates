/*!
 * Has Updates (v1.1.8.20171001), http://tpkn.me/
 */

const request = require('request');

module.exports = (link, version = '0.0.1') => {
   return new Promise((resolve, reject) => {
      if(typeof link === 'undefined'){
         reject({type:'error', text: 'Missed link to updates'});
      }

      request.get(link, (error, response, body) => {
         if(error){
            reject({type:'error', text: 'Connection problems'});
         }
         if(response.statusCode != 200){
            reject({type:'error', text: 'No updates.json file'});
         }

         let data = JSON.parse(body);
         if(data){
            if(version != data.version){
               resolve({version: data.version, win: data.win, mac: data.mac, linux: data.linux});
            }else{
               reject({type:'message', text: 'You have latest ' + version + ' version'});
            }
         }else{
            reject({type:'error', text: 'Invalid json file'});
         }
      });
   })
}