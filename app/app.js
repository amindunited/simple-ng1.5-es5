angular.module('oldNG1', ['ngMaterial']);

angular.module('oldNG1')
.directive('oldSelectWrapper', [function () {
    return {
      template: '<h3>Pick your Super Villain name (es5)</h3><power-select first-names="$ctrl.firstNames" last-names="$ctrl.lastNames" callback="$ctrl.selection"></power-select>',
      controllerAs: '$ctrl',
      controller: [function () {
        this.firstNames = [
          { name: 'Doctor' },
          { name: 'The Black' },
          { name: 'The Red' },
          { name: 'The Creeping' },
          { name: 'Shadowy'},
          { name: 'Grimm'}, 
          { name: 'The Violent' },
          { name: 'The Dark' },
          { name: 'Unholy' },
          { name: 'Terrible' },
          { name: 'The Evil' }
        ];
        this.lastNames = [
          { name: 'Black' },
          { name: 'Hell' },
          { name: 'Creep' },
          { name: 'Terror' },
          { name: 'Darkness' },
          { name: 'Brood' },
          { name: 'Shadow' },
          { name: 'Evil' }
        ];
        this.selection = function (firstName, lastName) {
          console.log('the callback method got', firstName, lastName);
        }
      }]
    }
}])

angular.module('oldNG1')
.component('powerSelect', {
    bindings: {
      firstNames: '=',
      lastNames: '=',
      callback: '='
    },
    template: '<div layout="column">'+
              '<md-input-container>'+
                '<md-select ng-model="$ctrl.firstName" placeholder="Select your first name">'+
                  '<md-option ng-value="firstName" ng-repeat="firstName in $ctrl.firstNames">{{ firstName.name }}</md-option>'+
                '</md-select>'+
              '</md-input-container></div>'+
              '<div layout="column">'+
              '<md-input-container>'+
                '<md-select ng-model="$ctrl.lastName" placeholder="Select your last name">'+
                  '<md-option ng-value="lastName" ng-repeat="lastName in $ctrl.lastNames">{{ lastName.name }}</md-option>'+
                '</md-select>'+
              '</md-input-container></div>',
    controller: ['$scope', function ($scope) {
      this.onSelect = function () {
        if (this.firstName && this.lastName) {
          this.callback(this.firstName, this.lastName);
        }
      };
    }]
  });