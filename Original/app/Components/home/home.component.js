'use strict';

angular.
  module('addressBookApp').
  component('home', {
    templateUrl: 'Components/home/home.template.html',
    controller: ['$http','$scope', 'AddressBookService', '$state', function HomeController($http, $scope, AddressBookService, $state) {
      var self = this;
      self.users = [];
      self.username = '';
      self.password = '';
      self.successfulLogin = false;
      self.errorLogin = false;
      self.loginReg = true;

      self.login = function(){
        self.url = "http://localhost:8000/addressBook/userLogin.php?username=" + self.username + "&password=" + self.password;
        $http({
          method: 'GET',
          url: self.url
        }).then(function (response){
          self.users = response.data;
          AddressBookService.resetUser();
          AddressBookService.resetContacts();
          AddressBookService.addUser(self.users);
          if (self.users.length > 0)
          {
            self.successfulLogin = true;
            self.errorLogin = false;
            self.loginReg = false;
            $state.transitionTo('address-book');
          }
          else
          {
            self.errorLogin = true;
            self.successfulLogin = false;
            self.loginReg = true;
            self.username = '';
            self.password = '';
          }
        },function (error){
    
      });
      
      }


    }]
  });