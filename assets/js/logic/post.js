app.controller('PostController', function ($http, $scope) {
    $scope.enabled = false;
    $scope.enablePosts = true;
    $scope.enableEditing = false;
    $scope.postButtonText = 'Write Post'
    $scope.title = ''
    $scope.body = ''
    $scope.titleEdit = ''
    $scope.bodyEdit = ''
    $scope.posts = [];
    $scope.errors = [];
    $scope.currentId = '';
    $scope.closeForm = function () {
        $scope.enabled = false;
    }
    $scope.showForm = function () {
        $scope.errors=[]
        $scope.enabled = true;
    }
    $scope.savePost = function () {
        $http.post('/post/store', {
            'title': $scope.title,
            'body':$scope.body
        }).then(function (response) {
            if (response.data.status == 'validationError') {
                $scope.errors=response.data.errors
            }
            if (response.data.status == 'success') {
                $scope.enabled = false;
                $scope.getPosts()
            }
        })
    }
    $scope.getPosts = function () {
        $http.get('/posts/all').then(function (response) {
            if (response.data.status == 'success') {
                $scope.posts = response.data.docs
            }
        })
    }
    $scope.deletePost = function (id) {
        $http.post("/post/delete", {'id': id}).then(function (response) {
            if (response.data.status == 'success') {
                $scope.posts = response.data.docs
                $scope.getPosts()
            }

        })
    }
    $scope.editPost = function (id) {
        $scope.errors=[]
        $scope.enabled = false;
        $scope.postButtonText = 'Write Post'
        $scope.enablePosts = false;
        $scope.enableEditing = true;
        $scope.currentId = id;
        $http.post('/post/edit',{'id':id}).then(function (response) {
            if (response.data.status == 'success') {
                $scope.titleEdit = response.data.doc.title
                $scope.bodyEdit = response.data.doc.body
            }
        })
    }
    $scope.closeEditing = function () {
        $scope.enablePosts = true;
        $scope.enableEditing = false;
    }
    $scope.updatePost = function () {
        $scope.enabled = false;
        $scope.postButtonText = 'Write Post'
        $scope.enablePosts = false;
        $scope.enableEditing = true;
        $http.post('/post/update/' ,{
            'id':$scope.currentId,
            'title': $scope.titleEdit,
            'body': $scope.bodyEdit
        }).then(function (response) {
            if (response.data.status == 'validationError') {
                $scope.errors=response.data.errors
            }

            if (response.data.status == 'success') {
                $scope.getPosts()
                $scope.enableEditing = false;
                $scope.enablePosts = true;
            }
        })
    }
})