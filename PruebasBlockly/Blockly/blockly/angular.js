 angular.module('Blocklyplay', ['ngMaterial'])
      .controller('AppCtrl', function ($scope, $mdSidenav,$mdDialog) {
        /*funcion on ready para que despliegue el sideNav de instrucciones*/
        angular.element(document).ready(function () {
          $mdSidenav('Instrucciones1')
                .toggle();
                navID = 'Instrucciones1';
        });
        
        $scope.toggle = buildToggler();
        $scope.canvas1 = function() {         
          currentpanel=1;
          loadCode();
        }
        $scope.canvas2 = function() {         
          currentpanel=2;
          loadCode();
        }
        $scope.canvas3 = function() {         
          currentpanel=3;
          loadCode();
        }
        $scope.canvas4 = function() {          
          currentpanel=4;
          loadCode();
        }
        var originatorEv;
        $scope.openMenu = function($mdOpenMenu, ev) {
          originatorEv = ev;
          $mdOpenMenu(ev);
        };
        $scope.showCorrect = function(ev) {
          $mdDialog.show({
            controller: correctController,
            templateUrl: '../correctanswer.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
          })
        };
        $scope.showWrong = function(ev) {
          // Appending dialog to document.body to cover sidenav in docs app
          var confirm = $mdDialog.confirm()
                .title('Lo sentimos')
                .textContent('Esta vez no lo conseguiste, intenta de nuevo.')
                .ariaLabel('Intenta de nuevo')
                .targetEvent(ev)
                .ok('Intentar de nuevo');
          $mdDialog.show(confirm).then(function() {location.reload();
          });
        };
        $scope.showTabDialog = function(ev) { 
            $mdDialog.show({
              controller: DialogController,
              templateUrl: '../publishproduct.html',
              parent: angular.element(document.body),
              targetEvent: ev,
              clickOutsideToClose:true
            });
            generate();
        };
        function buildToggler() {
          return function() {
              switch(currentpanel) {
                case 1:
                    navID = 'Instrucciones1';
                    break;
                case 2:
                    navID = 'Instrucciones2';
                    break;
                case 3:
                    navID = 'Instrucciones3';
                case 4:
                    navID = 'Instrucciones4';
                default:
                    navID = 'Instrucciones1';
              }
              // Component lookup should always be available since we are not using `ng-if`
              $mdSidenav(navID)
                .toggle();
            }
          }
        })
        .controller('RightCtrl', function ($scope,$mdSidenav) {
          $scope.close = function () {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(navID).close();
          };
          $scope.buttonshow = true;
          $scope.loadCV = function () {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(navID).close();
            $scope.buttonshow = false;
            switch(currentpanel) {
              case 1:
                  begin1();
                  break;
              case 2:
                  begin2();
                  break;
              case 3:
                  begin3();
              case 4:
                  begin4();
              default:
                  begin1();
            }
          };
        });
      function correctController($scope,$rootScope, $mdDialog) {
        $scope.newLevel = function() {         
          switch(currentpanel) {
            case 1:
                $rootScope.nivel2= false;//estos son para ponerlos en enabled, pero no funcionan
                $rootScope.nivel2A= true;
                break;
            case 2:                  
                $rootScope.nivel3= false;//estos son para ponerlos en enabled, pero no funcionan
                $rootScope.nivel3A= true;
                break;
            case 3:                  
                $rootScope.nivel4= false;//estos son para ponerlos en enabled, pero no funcionan
                $rootScope.nivel4A= true;
                break;
            default:                  
                $rootScope.nivel2= false;//estos son para ponerlos en enabled, pero no funcionan
                //$rootScope.nivel2A= true;
          }
         $mdDialog.cancel();
        }
        $scope.showPublish = function(ev) { 
            $mdDialog.show({
              controller: DialogController,
              templateUrl: '../publishproduct.html',
              parent: angular.element(document.body),
              targetEvent: ev,
              clickOutsideToClose:true
            });
            generate();
        };
        $scope.hide = function() {
          $mdDialog.hide();
        };
        $scope.cancel = function() {
          $mdDialog.cancel();
        };
      }
      function DialogController($scope, $mdDialog) {
        $scope.vistaprevia = function(){
          loadThumbnail();
          showTabDialog();
        };
        $scope.hide = function() {
          $mdDialog.hide();
        };
        $scope.cancel = function() {
          $mdDialog.cancel();
        };
      }