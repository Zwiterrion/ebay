'use strict';

var eBayResource = require('../../eBayResource');
var eBayMethod = eBayResource.method;

module.exports = eBayResource.extend({

    getDefaultCategoryTreeId: eBayMethod({
        method: 'GET',
        path: 'commerce/taxonomy/v1/get_default_category_tree_id?marketplace_id={marketplace_id}',
        urlParams: ['marketplace_id']
    }),
    getCategoryTree: eBayMethod({
        method: 'GET',
        path: 'commerce/taxonomy/v1_beta/category_tree/{category_tree_id}',
        urlParams: ['category_tree_id'],
        required: ['category_tree_id']
    }),
    getCategorySubtree: eBayMethod({
        method: 'GET',
        path: 'commerce/taxonomy/v1_beta/category_tree/{category_tree_id}/get_category_subtree',
        urlParams: ['category_tree_id'],
        required: ['category_tree_id']
    }),
    getCategorySuggestions: eBayMethod({
        method: 'GET',
        path: 'commerce/taxonomy/v1/category_tree/{category_tree_id}/get_category_suggestions?q={query}',
        urlParams: ['category_tree_id', 'query'],
        required: ['category_tree_id', 'query']
    }),
    getItemAspectsForCategory: eBayMethod({
        method: 'GET',
        path: 'commerce/taxonomy/v1/category_tree/{category_tree_id}/get_item_aspects_for_category?category_id={category_id}',
        urlParams: ['category_tree_id', 'category_id'],
        required: ['category_tree_id', 'category_id']
    })

});
