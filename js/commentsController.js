angular.module('AngularFactoryApp', [])
  .controller('CommentsController', CommentsController);

CommentsController.$inject = ['$http']; 

function CommentsController($http){
  
  var self = this;  
  self.all = [];

  function getComments() {
    $http
      .get('http://jsonplaceholder.typicode.com/comments')
      .then(function(response) {
          console.log(response)
          self.all = response.data;
      });
  }
  getComments();
}




