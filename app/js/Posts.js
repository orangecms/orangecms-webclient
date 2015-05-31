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
var module = angular.module('ornPosts', dependencies);

/**
 * @ngdoc controller
 * @name Posts
 *
 * @description
 * _Please update the description and dependencies._
 *
 * @requires $scope
 * @requires $resource
 */
module.controller(
    'PostsController',
    function($scope, $resource) {

        var Posts = $resource('/posts/:postId', { postId: '@id' });
/*
        var postById = Posts.get({ postId: 1 }, function() {
            console.log(postById);
        });
*/

        var postsByTag = Posts.query({ tag: 'cats' }, function() {
            $scope.posts = postsByTag;
        });
/*
        var posts = Posts.query(function() {
            $scope.posts = posts;
        });
*/
    }
);
