angular.module('directivePractice')

.directive('lessonHider', function(){
  return{
    templateUrl: 'lessonHider.html',
    controller: 'lessonCtrl',
    link: function(scope, element, attributes){
      console.log(scope);
      console.log(element);
      console.log(attributes);
    },
    scope:  {
      
    }
  }
});
