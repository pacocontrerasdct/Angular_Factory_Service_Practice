angular.module('AngularFactoryApp')
  .factory('CommentsFactoryFunction', function($http, $q){
    var CommentsFactoryFunction = {
      
      getAllComments: function() {
        var deferred = $q.defer();
        $http
        .get('http://jsonplaceholder.typicode.com/comments')
        .success(function(response) {
          deferred.resolve(response);
        })
        .error(function(error) {
          deferred.reject(error);
        })
        return deferred.promise;
      },

      newComment: function(comment) {
        var deferred = $q.defer();
        $http
        .post('http://jsonplaceholder.typicode.com/comments', comment)
        .success(function(response) {
          deferred.resolve(response);
          console.log("this is Factory response", response);
        })
        .error(function(error) {
          deferred.reject(error);
        })
        return deferred.promise;
      },

      showComment: function(comment) {
        console.log("this is show in Factory, response", comment);
        var deferred = $q.defer();
        $http
        .get('http://jsonplaceholder.typicode.com/comments/' + comment.id)
        .success(function(response) {
          deferred.resolve(response);
          console.log("this is Factory response", response);
        })
        .error(function(error) {
          deferred.reject(error);
        })
        return deferred.promise;

      },

      editComment: function(comment) {
        console.log("this is edit in Factory, response", comment);
        var deferred = $q.defer();
        $http
        .patch('http://jsonplaceholder.typicode.com/comments/' + comment.id, comment)
        .success(function(response) {
          deferred.resolve(response);
          console.log("this is Factory response", response);
        })
        .error(function(error) {
          deferred.reject(error);
        })
        return deferred.promise;

      }



    }

    return CommentsFactoryFunction;
  });