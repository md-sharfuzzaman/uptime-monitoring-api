/* 
 * Project Title: Not Found Handler
 * Description: 404 Not Found Handler
 * Author: Sharfuzzaman
 * Inspired By: Sumit Saha
 * Date: 29-Nov-2020

 */
// module scaffolding 

const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested URL was not found'
    })
};

module.exports = handler;