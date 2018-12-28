'use strict';

angular.
  module('addressBookApp').
  component('register', {
    templateUrl: 'Components/register/register.template.html',
    controller: ['$http', '$state', 'AddressBookService', function RegisterController($http ,$state, AddressBookService) {
      var self = this;

      self.Error = false;
      self.errorMessage = {};
      self.index = 0;
      self.newUser = {};
      self.allUsers = [];
      self.sameEmail = false;
      self.sameUsername = false;

      self.registerUser = function()
      {
        self.Error = false;
        self.errorMessage = {};
        self.index = 0;
        //http://localhost:8000/AddressBook/getAllUsers.php
        $http({
          method: 'GET',
          url: "http://localhost:8000/AddressBook/getAllUsers.php"
        }).then(function (response){
          self.allUsers = response.data;

        if(!self.newUser.FirstName)
        {
          self.Error = true;
          self.errorMessage[self.index] = "First Name cannot be blank."
          self.index = self.index + 1;
        }

        if(!self.newUser.LastName)
        {
          self.Error = true;
          self.errorMessage[self.index] = "Last Name cannot be blank."
          self.index = self.index + 1;
        }

        if(!self.newUser.Mobile)
        {
          self.Error = true;
          self.errorMessage[self.index] = "Mobile Number cannot be blank."
          self.index = self.index + 1;
        }

        //Check Email Address
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(self.newUser.Email))
        {
          self.errorMessage[self.index] = 'Invalid E-mail Address';
          self.index = self.index + 1;
          self.Error = true;
        }

        for(var i = 0; i < self.allUsers.length; i++)
        {
          if (self.allUsers[i].Email == self.newUser.Email)
          {
            self.sameEmail = true;
            self.Error = true;
            self.errorMessage[self.index] = "Email is already registered.";
            self.index = self.index + 1;
            break;
          }
        }
        if(!self.newUser.Username)
        {
          self.Error = true;
          self.errorMessage[self.index] = "Username cannot be blank."
          self.index = self.index + 1;
        }

        for(var i = 0; i < self.allUsers.length; i++)
        {
          if (self.allUsers[i].Username == self.newUser.Username)
          {
            self.sameUsername = true;
            self.Error = true;
            self.errorMessage[self.index] = "Username is already taken.";
            self.index = self.index + 1;
            break;
          }
        }

        
        if(!self.newUser.Password)
        {
          self.Error = true;
          self.errorMessage[self.index] = "Password cannot be blank."
          self.index = self.index + 1;
        }

        if (self.newUser.Password != self.newUser.Password2)
        {
          self.Error = true;
          self.errorMessage[self.index] = "Passwords do not match.";
          self.index = self.index + 1;
        }


      console.log(self.errorMessage);

      //Register if no errors
      if (!self.Error)
      {
        self.url = "http://localhost:8000/addressBook/addUser.php?"
      + "FirstName=" + self.newUser.FirstName
      + "&LastName=" + self.newUser.LastName
      + "&TelNo=" + self.newUser.TelNo
      + "&Mobile=" + self.newUser.Mobile
      + "&Email=" + self.newUser.Email
      + "&Username=" + self.newUser.Username
      + "&Password=" + self.newUser.Password;

      $http({
        method: 'GET',
        url: self.url
      }).then(function (response){
      },function (error){
      });
      $state.transitionTo('home');
      };
        },function (error){});
        
      }

      }]
  });