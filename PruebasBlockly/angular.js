 angular.module('Blocklyplay', ['ngMaterial'])
      .controller('AppCtrl', function ($scope,$http, $mdSidenav,$mdDialog) {
        /*funcion on ready para que despliegue el sideNav de instrucciones*/
        angular.element(document).ready(function () {
          $mdSidenav('Instrucciones1')
                .toggle();
                navID = 'Instrucciones1';
        });
        $scope.nivel2= true;
        $scope.nivel3= true;
        $scope.nivel4= true;
        $scope.isHW= false;
        $scope.GetXML = function () {
            $http.get('http://wegoo-staging.herokuapp.com/v1/projects').
            success(function(data) {
                  $scope.greeting = data;
                  console.log(data);
                 /* {{greeting[0].projects.name}}*/
                 //alert(data[0].projects.description)
                  program=data[data.length-1].projects.question;//data[0].projects.description;
                  loadCode();
                  //alert(program);
              })
            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<br />status: " + status +
                    "<br />headers: " + jsonFilter(header) +
                    "<br />config: " + jsonFilter(config);
            });
        };
        $scope.toggle = buildToggler();
        $scope.canvas1 = function() {         
          currentpanel=1;
          $scope.GetXML();
          //loadCode();
        }
        $scope.canvas2 = function() {         
          currentpanel=2;
          $scope.GetXML();
          //loadCode();
        }
        $scope.canvas3 = function() {         
          currentpanel=3;
          $scope.GetXML();
          //loadCode();
        }
        $scope.canvas4 = function() {          
          currentpanel=4;
          $scope.GetXML();
          //loadCode();
        }
        var originatorEv;
        $scope.openMenu = function($mdOpenMenu, ev) {
          originatorEv = ev;
          $mdOpenMenu(ev);
        };
        $scope.showCorrects = function(ev) {
          // Appending dialog to document.body to cover sidenav in docs app
          var confirm = $mdDialog.confirm()
                .title('Felicidades')
                .textContent('Haz realizado correctamente el puzzle, publica para guardar tu avance')
                .ariaLabel('Felicidades')
                .targetEvent(ev)
                .ok('Publicar')
                .cancel('Cancelar');
          $mdDialog.show(confirm).then(function() {
            
          }, function() {
             switch(currentpanel) {
                case 1:                  
                    $scope.nivel2= false;
                    break;
                case 2:                  
                    $scope.nivel3= false;
                    break;
                case 3:                  
                    $scope.nivel4= false;
                case 4:                  
                    /*aqui regresaria al menu principal o algo asi*/
                default:                  
                    $scope.nivel2= false;
              }
          });
        };
        $scope.isHWF = function() {
          $scope.isHW= true;
        };
        $scope.showCorrect = function(ev) {
           $mdDialog.show({
              clickOutsideToClose: true,
              scope: $scope,        // use parent scope in template
              preserveScope: true,  // do not forget this if use parent scope
              // Since GreetingController is instantiated with ControllerAs syntax
              // AND we are passing the parent '$scope' to the dialog, we MUST
              // use 'vm.<xxx>' in the template markup
              template: 
                '<div flex="50">'+
                  '<md-dialog aria-label="correct answer" id="correct answer">'+
                    '<md-dialog-content >'+
                     '<form>'+
                      '<md-dialog-content>'+
                        '<div class="md-dialog-content">'+
                          '<h2>¡Felicidades! </h2>'+
                          '<p>Haz realizado correctamente el ejercicio, publicalo para guardar tu avance</p>'+
                        '</div>'+
                      '</md-dialog-content>'+
                      '<md-dialog-actions layout="row">'+
                        '<md-button ng-click="cancelar()">'+
                          'Cancelar'+
                        '</md-button>'+
                        '<md-button ng-click="sendHW()" ng-show="isHW">'+
                          'Enviar a hardware'+
                        '</md-button>'+
                        '<md-button ng-click="publicar()" md-autofocus>'+
                          'Publicar'+
                        '</md-button>'+
                      '</md-dialog-actions>'+
                    '</form>'+
                    '</md-dialog-content>'+
                  '</md-dialog>'+
                '</div>',
              controller: function correctController($scope, $mdDialog) {
                $scope.publicar = function() {
                  switch(currentpanel) {
                    case 1:                  
                        $scope.nivel2= false;
                        $scope.nivel2A= true;
                        break;
                    case 2:                  
                        $scope.nivel3= false;
                        $scope.nivel3A= true;
                        break;
                    case 3:                  
                        $scope.nivel4= false;
                        $scope.nivel4A= true;
                    case 4:                  
                        /*aqui regresaria al menu principal o algo asi*/
                    default:                  
                        $scope.nivel2= false;
                  }
                  $mdDialog.show({
                    controller: DialogController,
                    templateUrl: '../publishproduct.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose:true
                  });
                  generate();
                };
                $scope.cancelar = function() {
                  switch(currentpanel) {
                    case 1:                  
                        $scope.nivel2= false;
                        break;
                    case 2:                  
                        $scope.nivel3= false;
                        break;
                    case 3:                  
                        $scope.nivel4= false;
                    case 4:                  
                        /*aqui regresaria al menu principal o algo asi*/
                    default:                  
                        $scope.nivel2= false;
                  }
                   $mdDialog.hide();
                };
                $scope.sendHW = function(){
                  pasoHW();
                  $mdDialog.hide();
                }
              }
           });
        };
        $scope.showWrong = function(ev) {
           $mdDialog.show({
              clickOutsideToClose: true,
              scope: $scope,        // use parent scope in template
              preserveScope: true,  // do not forget this if use parent scope
              // Since GreetingController is instantiated with ControllerAs syntax
              // AND we are passing the parent '$scope' to the dialog, we MUST
              // use 'vm.<xxx>' in the template markup
              template: 
              '<div flex="50">'+
                '<md-dialog aria-label="correct answer" id="correct answer">'+
                  '<md-dialog-content >'+
                   '<form>'+
                    '<md-dialog-content>'+
                      '<div class="md-dialog-content">'+
                        '<h2>¡Buen intento!</h2>'+
                        '<p>Esta vez no lo conseguiste, prueba de nuevo.</p>'+
                      '</div>'+
                    '</md-dialog-content>'+
                    '<md-dialog-actions layout="row">'+
                      '<md-button ng-click="nuevointento()" md-autofocus>'+
                        'Volver'+
                      '</md-button>'+
                    '</md-dialog-actions>'+
                  '</form>'+
                  '</md-dialog-content>'+
                '</md-dialog>'+
              '</div>',
              controller: function wrongController($scope, $mdDialog) {
                $scope.nuevointento = function() {
                  location.reload();
                };
              }
           });
        };
        $scope.hardwareError = function(ev) {
          $mdDialog.show(
            $mdDialog.alert()
              .parent(angular.element(document.querySelector('#popupContainer')))
              .clickOutsideToClose(true)
              .title('¡Espera!')
              .textContent('Debes de probar primero tu codigo')
              .ariaLabel('Entendido')
              .ok('Ok')
              .targetEvent(ev)
          )};
        $scope.connectionError = function(ev) {
          $mdDialog.show(
            $mdDialog.alert()
              .parent(angular.element(document.querySelector('#popupContainer')))
              .clickOutsideToClose(true)
              .title('Hubo un problema!')
              .textContent('Verifica la conexion de tu tarjeta Edison')
              .ariaLabel('Entendido')
              .ok('Ok')
              .targetEvent(ev)
          )};
        $scope.wrongString = function(ev) {
          $mdDialog.show(
            $mdDialog.alert()
              .parent(angular.element(document.querySelector('#popupContainer')))
              .clickOutsideToClose(true)
              .title('¡Ups! Hay un problema')
              .textContent('Recuerda que tu mensaje no debe tener mas de 32 caracteres')
              .ariaLabel('Mensaje mas corto')
              .ok('Ok')
              .targetEvent(ev)
          ).then(function() {
              myInterpreter=null;
              acabo=1;
              loadCode();
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
            }
        )};
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
          $scope.name = null;
          $scope.description = null;
          $scope.question = null;
          $scope.picture = null;
          $scope.active = null;
          
        });
      function DialogController($scope,$http, $mdDialog) {
        $scope.vistaprevia = function(){
          loadThumbnail();
          /*var datosr= document.getElementById("inputXML").value = domToPretty;
          var datos= document.getElementById("inputPREV").value = previa;*/
          showTabDialog();
          
        };
        $scope.hide = function() {
          $mdDialog.hide();
        };
        $scope.cancel = function() {
          $mdDialog.cancel();
        };
        $scope.postdata = function (name, description, active) {
            var data = {
              name: name,
              description: description,
              question: domToPretty,
              picture: previa,
              active: active
            };
            //Call the services
            $http.post('http://wegoo-staging.herokuapp.com/v1/projects', JSON.stringify(data)).then(function (response) {
                console.log(data);
              $scope.msg = "Post Data Submitted Successfully!";
              $mdDialog.hide(); 
            }, function (response) {
              var erromessage = document.getElementById('publisherror').style="display:block"              
              $scope.msg = "Service not Exists";
              $scope.statusval = response.status;
              $scope.statustext = response.statusText;
              $scope.headers = response.headers();
            });
          };
      }
function Hello($scope, $http) {
    $http.get('http://wegoo-staging.herokuapp.com/v1/projects').
        success(function(data) {
            $scope.greeting = data;
            console.log(data);
        });
}