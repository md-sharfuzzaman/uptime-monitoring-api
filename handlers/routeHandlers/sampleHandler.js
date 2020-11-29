/* 
 * Project Title: Sample Handler 
 * Author: Sharfuzzaman
 * Inspired By: Sumit Saha
 * Date: 29-Nov-2020

 */
// module scaffolding 

const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(200, {
        message: 'This is a sample url',
    })
};

module.exports = handler;