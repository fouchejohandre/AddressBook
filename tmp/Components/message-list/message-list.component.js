'use strict';

angular.
  module('addressBookApp').
  component('messageList', {
    templateUrl: 'Components/message-list/message-list.template.html',
    controller: ['$http', 'AddressBookService', '$state', '$uibModal', function MessageListController($http, AddressBookService, $state, $uibModal) {

      var self = this;
      self.tempUserData = AddressBookService.getUser();
      self.allMessages = [];
      self.messagesTo = [];
      self.messagesFrom = [];
      self.showAll = true;
      self.showTo = false;
      self.showFrom = false;
      self.noMessages = false;
      self.i = 0;
      self.countTo = 0;
      self.countFrom = 0;
      self.selection = 'All';
      self.orderProp = '-MessageTimeStamp';
      self.messageToDeleteId = 0;


      self.$onInit = function()
      {
        self.getMessages();
      }

      self.getMessages = function()
      {
        if(!self.tempUserData[0])
        {
          $state.transitionTo('address-book');
        }
        else
        {
          self.url = "http://localhost:8000/AddressBook/getUserMessages.php?userId=" + self.tempUserData[0][0].userId;
          $http({
            method: 'GET',
            url: self.url
          }).then(function (response){
            self.allMessages = response.data;
            self.sortMessages();
            if(!self.allMessages[0])
            {
              self.noMessages = true;
            }
            else
            {
              self.noMessages = false;
            }
          },function (error){
        
          });
        }
      }

      self.sortMessages = function()
      {
        for(self.i = 0; self.i < self.allMessages.length; self.i++)
        {
          if(self.allMessages[self.i].UserToId == self.tempUserData[0][0].userId)
          {
            self.messagesTo[self.countTo] = self.allMessages[self.i];
            self.countTo++;
          }
          else if(self.allMessages[self.i].UserFromId == self.tempUserData[0][0].userId)
          {
            self.messagesFrom[self.countFrom] = self.allMessages[self.i];
            self.countFrom++;
          }
        }
      }

      self.showMessages = function(){
        if(self.selection == 'All')
        {
          self.showAll = true;
          self.showTo = false;
          self.showFrom = false;
        }
        else if(self.selection == 'To')
        {
          self.showAll = false;
          self.showTo = true;
          self.showFrom = false;
        }
        else if(self.selection == 'From')
        {
          self.showAll = false;
          self.showTo = false;
          self.showFrom = true;
        }
      }

      self.deleteMessage = function(id)
      {        
        self.messageToDeleteId = id;
        var message = "Are you sure you want to permanently delete this message from your address book?";

        var modalHtml = '<div class="modal-body">' + message + '</div>';
        modalHtml += '<div class="modal-footer"><button class="btn btn-danger" ng-click="ok()">DELETE</button><button class="btn btn-warning" ng-click="cancel()">CANCEL</button></div>';
    
        var modalInstance = $uibModal.open({
          template: modalHtml,
          controller: ModalInstanceCtrl
        });
    
        modalInstance.result.then(function() {
          reallyDelete();
        });
      };
    
      var reallyDelete = function(item) {
      };
    
    var ModalInstanceCtrl = function($scope, $uibModalInstance) {
      $scope.ok = function() {
        self.url = "http://localhost:8000/addressBook/deleteMessage.php?MessageId=" + self.messageToDeleteId;

        $http({
            method: 'GET',
            url: self.url
          }).then(function (response){
            $uibModalInstance.close();
            self.getMessages();
          },function (error){
            $uibModalInstance.close();
            self.getMessages();
        });
      };
    
      $scope.cancel = function() {
        $uibModalInstance.close();
      };
    };


      }]
  });