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
          // Appending dialog to document.body to cover sidenav in docs app
          var confirm = $mdDialog.confirm()
                .title('Felicidades')
                .textContent('Haz realizado correctamente el puzzle')
                .ariaLabel('Felicidades')
                .targetEvent(ev)
                .ok('Ir al siguiente nivel')
                .cancel('Volver al nivel actual');
          $mdDialog.show(confirm).then(function() {
            switch(currentpanel) {
              case 1:                  
                  $scope.nivel2= true;
                  break;
              case 2:                  
                  $scope.nivel3= true;
                  break;
              case 3:                  
                  $scope.nivel4= true;
              case 4:                  
                  /*aqui regresaria al menu principal o algo asi*/
              default:                  
                  $scope.nivel2= true;
            }


            //$scope.status = 'You decided to get rid of your debt.';
            //alert('entro al confirm');
          }, function() {
            $scope.status = 'You decided to keep your debt.';
          });
        };
        $scope.showWrong = function(ev) {
          // Appending dialog to document.body to cover sidenav in docs app
          var confirm = $mdDialog.confirm()
                .title('Lo sentimos')
                .textContent('Esta vez no lo conseguiste, intenta de nuevo.')
                .ariaLabel('Intenta de nuevo')
                .targetEvent(ev)
                .ok('Intentar de nuevo')
                .cancel('Sounds like a scam');
          $mdDialog.show(confirm).then(function() {
            $scope.status = 'You decided to get rid of your debt.';
          }, function() {
            $scope.status = 'You decided to keep your debt.';
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
        /*$scope.loadNewLevel = function(ev){

          {{status}}

        };*/

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