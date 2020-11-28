'use strict';

var eBayResource = require('../../eBayResource');
var eBayMethod = eBayResource.method;

module.exports = eBayResource.extend({

    getTrafficReport: eBayMethod({
        authorization: 'User',
        method: 'GET',
        path: 'sell/analytics/v1/traffic_report'
    })

});