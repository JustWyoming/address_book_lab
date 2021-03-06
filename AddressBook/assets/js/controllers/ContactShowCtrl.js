addressApp.controller('ContactShowCtrl',['$scope','$http','$routeParams', '$location','$modal', function($scope, $http, $routeParams, $location, $modal){

    var contactId = $routeParams.id;
    $http.get('/.api/contact/'+ contactId).success(function(data){
        $scope.contact = data;
    }).error(function(err){
        $location.path('/');
        alert('that contact could not be found. Get another drink');
    })

    $scope.editContact = function(idx){
        $modal.open({
            templateUrl: '/views/contact/editModal.html',
            controller: 'ContactEditModalCtrl',
            resolve: {
                contact: function(){
                    return $scope.contact
                }
            }
        }).result.then(function(updateContact){
            $scope.contact = updateContact;
        }, function(){
            // alert("modal closed with cancel");
        })

    }


}]);