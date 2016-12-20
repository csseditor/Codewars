/**********TRAINING CONTROLLER************/

// each Ctrl should call  - mainService.user - for access to the user object

angular.module('app').controller('trainingCtrl', function($scope, $state, mainService) {

var textarea = document.getElementById('solution-input');
  var myCodeMirror = CodeMirror.fromTextArea(textarea, {
   lineNumbers: true, 
   theme: 'tomorrow-night-bright',
  });

  $scope.languages = ['JavaScript', 'Python'];
  $scope.versions = ['Node v0.10.33', 'Node v6.6.0'];
  $scope.output = [];

  //NG-SHOWS
  $scope.showOutputShow = true;
  $scope.showInstructionsShow = false;
  $scope.showOutput = function() {
    $scope.showOutputShow = false;
    $scope.showInstructionsShow = true;
  }
  $scope.showInstructions = function() {
    $scope.showOutputShow = true;
    $scope.showInstructionsShow = false;
  }

  //Examples should be an array of objects. Returned results will be an array with the different tests and their results.
  $scope.testExamples = function(solutions, examples) {
    $scope.showOutput();
    solutions = solutions.replace(/\n/g, " ");
    let examplesArr = [];
    console.log(examples);
    examples = examples.split(/\n/);
    console.log(examples);
    examples.forEach(example => examplesArr.push({test: example}));
    mainService.testExamples(solutions, examplesArr).then((response) => $scope.output.push(response.data[0]));
  }


  $scope.testSuite = function(solutions) {
    $scope.showOutput();
    solutions = solutions.replace(/\n/g, " ");
    // mainService.testSuite(solutions, kataid).then((response) => console.log(response));
  }

  // this function needs to call the kata by id when the user selects train on the home page -getKataById


  // submit final solution once they have passed the testSuite using setSoluton funciton on the service


});
