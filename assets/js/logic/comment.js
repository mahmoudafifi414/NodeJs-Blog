app.controller('CommentController', function ($http, $scope) {
    $scope.comments = []
    $scope.showComments = false
    $scope.showCommentFormForAdd = false
    $scope.commentButtonTitle = 'show comments'
    //to get comments for specific post
    $scope.getComments = function (id) {
        $scope.errors=[]
        if ($scope.showComments == false) {
            $scope.showCommentFormForAdd = false
            $scope.showComments = true
            $http.post('/comments', {'id': id}).then(function (response) {
                if (response.data.status == 'success') {
                    $scope.comments = response.data.doc[0].comments

                }
            }).then(function () {
                $scope.commentButtonTitle = 'close comments'
            })
        } else {
            $scope.showComments = false
            $scope.commentButtonTitle = 'show comments'
        }


    }
    //for showing the form for post comment
    $scope.showCommentForm = function () {
        $scope.errors=[]
        $scope.showCommentFormForAdd = true
        $scope.showComments = false
        $scope.commentButtonTitle = 'show comments'
    }
    //for saving the form
    $scope.writeComment = function (id) {
        $http.post('/comment/store', {
            "id": id,
            "name": typeof ($scope.name) != 'undefined' ? $scope.name : '',
            "comment": typeof ($scope.comment) != 'undefined' ? $scope.comment : '',
        }).then(function (response) {
            if (response.data.status == 'validationError') {
                $scope.errors=response.data.errors
            }
            if (response.data.status == 'success') {
                $scope.getComments(id)
            }
        })
    }
    $scope.closeCommentForm = function () {
        $scope.showCommentFormForAdd = false
    }
})