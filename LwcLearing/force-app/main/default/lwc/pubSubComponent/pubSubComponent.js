const store = {}
/**
 subscribers a callback for an event
 @param {string} eventName - name of the event to listen for 
 @param {function} callback -Function to invoke when said event is fired
 */
const subscribe = (eventName,callback) =>{
    if(!store[eventName]){
        store[eventName] = new Set();
    }
    store[eventName].add(callback);
};

/**
unsubscribe a callback for an event
 @param {string} eventName - name of the event to unsubscribe from 
 @param {Function} callback -Function to unsubscribe
 */
 const unsubscribe = (eventName,callback) =>{
    if(store[eventName]){
        store[eventName].delete(callback);
    }
};

/**
 Publish an evnet to listners 
 @param {string} eventName - name of the event to publish
 @param {Function} payload - payload og the event to publish
 */

 const publish = (eventName,payload) =>{
    if(store[eventName]){
        store[eventName].forEach(callback => {
            try {
                callback(payload);
            } catch (error) {
                console.error(error);
            }
        });
    }
 };

 export default{
    subscribe,
    unsubscribe,
    publish
 };