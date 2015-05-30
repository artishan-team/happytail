'use strict';

/**
 * @ngdoc function
 * @name happytailApp.controller:HelpCtrl
 * @description
 * # HelpCtrl
 * Controller of the happytailApp
 */
angular.module('happytailApp')
  .controller('HelpCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.common.navbar = '/templates/navbar.main.html';
    $scope.common.side = false;
    $scope.common.header = false;

    $scope.groups = [
      {
        title: '개의 성격이 소심할 경우 천천히 산책시켜 주세요.',
        content: 'Dynamic Group Body - 1'
      },
      {
        title: '나눠드린 배변봉투로 배변시 꼭 청소를 부탁드립니다.',
        content: 'Dynamic Group Body - 2'
      },
      {
        title: '개에게 산책시 주지 말아야 할 음식들이 있어요',
        content: '산책시에 따로 간식은 가급적 주지 마세요. 사람이 먹는 가공음식들은 대체적으로 개들에게 좋지 않습니다. 특히 초콜릿은 개들에게 치명적입니다.'
      },
      {
        title: '산책시 목줄을 꼭 붙잡아 주세요.',
        content: 'Dynamic Group Body - 2'
      },
      {
        title: '산책이 즐거우셨다면 언제든 자주 찾아와 주세요.',
        content: 'Dynamic Group Body - 2'
      },
    ];

  });
