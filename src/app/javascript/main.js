var app = angular.module("myApp", []);

app.controller('myApp', function($scope, $http) {
    $scope.data = []; // Local array
    $scope.url = 'https://randomuser.me/api/?results='; // Connection to API
    $scope.amountOfReq = 9; // Quantity of requests
    $scope.search = '';
    // Get Data from randomuser.me API
    $scope.getUser = function(){
      $('.loaderPage').fadeIn();
      $('.app').hide();
      $('#loader').show();
      $scope.users = $http.get($scope.url + $scope.amountOfReq)
        .then(function (response) {
          $scope.users = response.data.results;
          $scope.data = $scope.users;
          console.log($scope.data)
          $('.loaderPage').fadeOut();
          $('.app').fadeIn();
          $('#loader').hide();
        })
    };
    $scope.getMoreUsers = function(){
        $('.loadMore').hide();
        $('#loader').fadeIn();
        $scope.users = $http.get($scope.url + $scope.amountOfReq)
        .then(function (response) {
          $("html, body").animate({ scrollTop: $(document).height() }, "slow");
          $scope.users = response.data.results;
          $scope.data = $scope.data.concat($scope.users);
          // console.log($scope.data)
          $('#loader').hide();
          $('.loadMore').fadeIn();

        })
      }
    $scope.setGenderImg = function(user) {
       switch(user.gender){
        case 'male':
          // console.log('its a man')
         user.genderImg = 'src/images/man.png';
         break;
        case 'female':
        // console.log('its a girl')
         user.genderImg = 'src/images/girl.png';
         break;
        }
      }

    // Running
    $scope.getUser()
});
