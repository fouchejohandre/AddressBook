'use strict';

angular.
  module('addressBookApp').
  component('addressLogin', {
    templateUrl: 'Components/address-login/address-login.template.html',
    controller: ['$state', '$http', '$scope', 
      function AddressHeaderLoginController($state, $http, $scope) {
      var self = this;
      self.str1 = 'A,C.D!';
      self.str2 = '';
      self.chars = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+','{','[',']','}',':',';','|','/','?','.','>',',','<','0','1','2','3','4','5','6','7','8','9','`', ' ']
      self.strChars = [];
      self.$onInit = function(){
        $state.transitionTo("home");
        for(var i=0; i< self.chars.length; i++)
        {
          self.str1 = self.str1.replace(self.chars[i], '');
        }
        self.strChars = self.str1.split('');
        self.strChars = self.strChars.reverse();
        self.str2 = self.strChars.join();
        for(var i=0; i< self.chars.length; i++)
        {
          self.str2 = self.str2.replace(self.chars[i], '');
        }
        console.log(self.str1);
        console.log(self.str2);
      }

      }]
  });

