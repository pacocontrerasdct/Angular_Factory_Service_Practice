angular.module('AngularFactoryApp')
  .controller('CommentsController', function(CommentsFactoryFunction) {
    var self = this;
    var allComments = [];  

    CommentsFactoryFunction.getAllComments()
    .then(function(response) {
      self.allComments = response;
    });

    self.newComment = function() {
      CommentsFactoryFunction.newComment(self.comment)
      .then(function(response) {
        console.log("Response in controller", response);
        self.allComments.push(response);
        self.comment = {};
      });
    }

    


  });

