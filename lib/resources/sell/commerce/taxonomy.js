'use strict';

var eBayResource = require('../../../eBayResource');
var eBayMethod = eBayResource.method;

module.exports = eBayResource.extend({

    getDefaultCategoryTreeId: eBayMethod({
        authorization: 'User',
        method: 'GET',
        path: 'commerce/taxonomy/v1/get_default_category_tree_id?marketplace_id=EBAY_FR'
    }),

    getItemAspectsForCategory: eBayMethod({
        authorization: 'User',
        method: 'GET',
        path: 'commerce/taxonomy/v1/category_tree/{categoryTreeId}/get_item_aspects_for_category?category_id={categoryId}',
        urlParams: ['categoryTreeId', 'categoryId'],
        required: ['categoryTreeId', 'categoryId']
    })
});