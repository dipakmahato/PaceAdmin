angular.module("PaceHcmAdmin",[]).controller("IndexCtrl", function ($scope, $q, $http) {

    $scope.paceData = { resume: 10, req: 20, reqGroup: 30, transaction: 40, client: 5 };
    // $scope.paceData = {};
    
    // http://23.236.49.140:1002/api/v1.1/WM/paceusers/paceAdmin?token=ac223cc1-3823-11e9-87f9-42010af00005&fromDate=2018-01-01&toDate=2019-02-12

    //  $scope.getDataService = function () {
    //     var defer = $q.defer();
    //     $http({
    //         method: "GET",
    //         url: " http://23.236.49.140:1002/api/v1.1/WM/paceusers/paceAdmin",
    //         params:{
    //             token:"ac223cc1-3823-11e9-87f9-42010af00005",
    //         }
    //     }).then(function (response) {
    //         if(response.data){
    //             defer.resolve(response);
    //         }else{
    //             defer.resolve({});
    //         }
    //         // $scope.paceData = angular.copy(response);
    //         // defer.resolve(response);
    //     }).catch(function () {
    //         defer.reject([]);
    //     });
    //     return  defer.promise;
    // }

    // $scope.getDataService().then(function(resp){
    //     if(resp){
    //         $scope.paceData=resp.data.data;
    //     }
    //     console.log("get data service");
    //     console.log($scope.paceData);
    // });

});