"use strict";angular.module("app").controller("formController",function($scope,$state,server){info("Form loaded"),$scope.back=function(){return $state.go("menu")},$scope.whot={},$scope.whot.whots=[],$scope.addWhot=function(newWhot){$scope.whot.whots.push(newWhot),$scope.newWhot=null},$scope.delWhot=function(key){$scope.whot.whots.splice(key,1)},$scope.pushWhot=function(whot){var now=new Date;whot._created=now,server.db.collection("whots").add(whot).then(function(){succ("Whot created successfully"),$state.go("menu")})}});
//# sourceMappingURL=form.js.map