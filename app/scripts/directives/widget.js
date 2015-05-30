'use strict';

/**
 * @ngdoc directive
 * @name happytailApp.directive:widget
 * @description
 * # widget
 */
angular.module('happytailApp')
.directive('htWidget', htWidget)
.directive('htWidgetHeader', htWidgetHeader)
.directive('htWidgetBody', htWidgetBody)
.directive('htWidgetFooter', htWidgetFooter);

function htWidget() {
    var directive = {
        transclude: true,
        template: '<div class="widget" ng-transclude></div>',
        restrict: 'EA'
    };
    return directive;
}

function htWidgetHeader() {
    var directive = {
        requires: '^htWidget',
        scope: {
            title: '@',
            icon: '@'
        },
        transclude: true,
        template: '<div class="widget-header"><div class="row"><div class="pull-left"><i class="fa" ng-class="icon"></i> {{title}} </div><div class="pull-right col-xs-6 col-sm-4" ng-transclude></div></div></div>',
        restrict: 'E'
    };
    return directive;
}

function htWidgetBody() {
    var directive = {
        requires: '^htWidget',
        scope: {
            loading: '@?',
            classes: '@?'
        },
        transclude: true,
        template: '<div class="widget-body" ng-class="classes"><rd-loading ng-show="loading"></rd-loading><div ng-hide="loading" class="widget-content" ng-transclude></div></div>',
        restrict: 'E'
    };
    return directive;
}

function htWidgetFooter() {
    var directive = {
        requires: '^htWidget',
        transclude: true,
        template: '<div class="widget-footer" ng-transclude></div>',
        restrict: 'E'
    };
    return directive;
}
