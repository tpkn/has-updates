/*!
 * Has Updates (v1.1.10.20171008), http://tpkn.me/
 */

const request = require('request');
const compare = require('compare-version');

module.exports = (link, current_version = '0.0.1') => {
   return new Promise((resolve, reject) => {
      if(typeof link === 'undefined'){
         reject({type:'error', text: 'Missed link to updates'});
      }

      request.get(link, (error, response, body) => {
         if(error){
            reject({type:'error', text: 'Connection problems'});
            return;
         }
         if(response.statusCode != 200){
            reject({type:'error', text: 'No updates.json file'});
            return;
         }

         try {
            let data = JSON.parse(body);
            if(compare(data.version, current_version)){
               resolve({version: data.version, win: data.win, mac: data.mac, linux: data.linux});
            }else{
               reject({type:'message', text: 'You have latest ' + current_version + ' version'});
            }
         }catch(e){
            reject({type:'error', text: 'Invalid json file'});
         }
      });
   })
}