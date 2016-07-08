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