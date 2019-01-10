'use strict';

angular.
  module('addressBookApp').
  component('messageSend', {
    templateUrl: 'Components/message-send/message-send.template.html',
    controller: ['$http', 'AddressBookService', '$state', '$scope', function MessageSendController($http, AddressBookService, $state, $scope) {
      var self = this;
      self.tempUserData = AddressBookService.getUser();
      self.sendToId = '';
      self.title = '';
      self.contents = '';
      self.dateTime = '';

      if(!self.tempUserData[0])
      {
        $state.transitionTo('home');
      }
      else
      {
        self.url = "http://localhost:8000/addressBook/getUserContacts.php?userId=" + self.tempUserData[0][0].userId;
        $http({
          method: 'GET',
          url: self.url
        }).then(function (response){
          self.contacts = response.data;
          if(!self.contacts[0])
          {
            self.noContacts = true;
          }
        },function (error){
      
        });
      }

      self.sendMessage = function(){
        self.dateTime =  $scope.getDateTime = new Date();
        // console.log('User From: ' + self.tempUserData[0][0].userId);
        // console.log('User To: ' + self.sendToId);
        // console.log('Title: ' + self.title);
        // console.log('Contents: ' + self.contents);
        // console.log('Time: ' + self.dateTime);



        self.url = "http://localhost:8000/addressBook/addUserMessage.php?"
        + "UserToId=" + self.sendToId
        + "&UserFromId=" + self.tempUserData[0][0].userId
        + "&Title=" + self.title
        + "&Contents=" + self.contents
        + "&Time=" + self.dateTime;
        $http({
          method: 'GET',
          url: self.url
        }).then(function (response){
        },function (error){
    
      });
      $state.transitionTo('message-list');
      }
      }]
  });