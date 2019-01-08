'use strict';

angular.
  module('addressBookApp').
  component('addressLogin', {
    templateUrl: 'Components/address-login/address-login.template.html',
    controller: ['$state', '$http', '$scope', 
      function AddressHeaderLoginController($state, $http, $scope) {
      var self = this;
      // Project Euler: Problem 1: Multiples of 3 and 5
      //   self.number = 1000;
      //   self.array = [];
      //   self.result = 0;
      //   for(var i = 0; i < self.number; i++)
      //   {
      //     if(i % 3 === 0 || i % 5 === 0)
      //     {
      //       self.array.push(i);
      //     }
      //   }
      // console.log(self.array);
      //   for (var x = 0; x < self.array.length; x++)
      //   {
      //     if(self.result === 0)
      //     {
      //       self.result = self.array[x];
      //     }
      //     else
      //     {
      //       self.result = self.result + self.array[x];
      //     }
      //   }
      //   console.log(self.result);


      function canMakeWord (word) {
        var blocks = ['B', 'O', 'X', 'K', 'D', 'Q', 'C', 'P', 'N', 'A', 'G', 'T', 'R', 'E', 'T', 'G', 'Q', 'D', 'F', 'S', 'J', 'W', 'H', 'U', 'V', 'I', 'A', 'N', 'O', 'B', 'E', 'R', 'F', 'S', 'L', 'Y', 'P', 'C', 'Z', 'M'];
      
        var wordArray = word.split('');
      
        var can;
      
        for(var i = 0; i < blocks.length; i++)
        {
          for(var x = 0; x < wordArray.length; x++)
          {
            if(wordArray[x] == blocks[i])
            {
              wordArray.splice(x, 1);
            }
          }
        }
      
        if(wordArray.length > 0)
        {
          can = true;
        }
        else
        {
          can = false;
        }
        console.log(can);


      self.$onInit = function(){
        $state.transitionTo("home");
        
      }

      }]
  });

