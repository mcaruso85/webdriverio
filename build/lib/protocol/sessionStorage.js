/**
 *
 * Protocol bindings for all sessionStorage operations.
 *
 * <example>
    :sessionStorage.js
    // get the storage item for the given key
    client.sessionStorage('GET', someKey).then(function(res) { ... });

    // get all keys of the storage
    client.sessionStorage().then(function(res) { ... });

    // set the storage item for the given key
    client.sessionStorage('POST', {key: someKey, value: someValue});

    // remove the storage item for the given key
    client.sessionStorage('DELETE', 'someKey');

    // clear the storage
    client.sessionStorage('DELETE');
 * </example>
 *
 * @param {String=}        method  method for storage operation
 * @param {Object|String=} args    operation arguments
 *
 * @see  https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/session_storage
 * @type protocol
 *
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var sessionStorage = function sessionStorage(method, args) {
    if (method === undefined) method = 'GET';

    /**
     * set default options
     */
    var data = {};
    var requestOptions = {
        path: '/session/:sessionId/session_storage',
        method: method.toUpperCase()
    };

    if (requestOptions.method === 'POST' && typeof args === 'object') {
        data = {
            key: args.key,
            value: args.value
        };
    }

    /**
     * add/delete specific key
     */
    if (requestOptions.method === 'DELETE' && typeof args === 'string' || requestOptions.method === 'GET' && typeof args === 'string') {
        requestOptions.path += '/key/' + args;
    }

    return this.requestHandler.create(requestOptions, data);
};

exports['default'] = sessionStorage;
module.exports = exports['default'];
