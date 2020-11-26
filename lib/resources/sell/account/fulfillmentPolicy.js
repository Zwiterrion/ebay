'use strict';

var eBayResource = require('../../../eBayResource');
var eBayMethod = eBayResource.method;

module.exports = eBayResource.extend({

    getFulfillmentPolicies: eBayMethod({
        authorization: 'User',
        method: 'GET',
        path: 'sell/account/v1/fulfillment_policy'
    }),

    getFulfillmentPolicy: eBayMethod({
        authorization: 'User',
        contentType: 'application/json',
        path: 'sell/account/v1/fulfillment_policy/{fulfillmentPolicyId}',
        urlParams: ['fulfillmentPolicyId'],
        required: ['fulfillmentPolicyId']
    }),

    createFulfillmentPolicy: eBayMethod({
        authorization: 'User',
        contentType: 'application/json',
        method: 'POST',
        path: 'sell/account/v1/fulfillment_policy'
    })

});
