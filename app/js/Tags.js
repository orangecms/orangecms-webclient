/**
 * Created by dan on 5/24/15.
 */

/**
 *
 * @type {string[]}
 */
var dependencies = ['ngResource'];

/**
 *
 * @type {module}
 */
var module = angular.module('ornTags', dependencies);

/**
 * @ngdoc controller
 * @name Tags
 *
 * @description
 * _Please update the description and dependencies._
 *
 * @requires $scope
 * @requires $resource
 */
module.controller(
    'TagsController',
    function($scope, $resource) {
/*
        var Tags = $resource('/tags/:id');
/*
        var tags = Tags.query(function() {
            console.log(tags);
            $scope.tags = tags;
        });
*/
        $scope.tags = [
            { tag: 'cats'},
            { tag: 'tech'}
        ];
    }
);
