'use strict';

/**
 * @ngdoc function
 * @name happytailApp.controller:ReviewCtrl
 * @description
 * # ReviewCtrl
 * Controller of the happytailApp
 */
angular.module('happytailApp')
  .controller('ReviewCtrl', function ($scope) {
    $scope.common.navbar = '/templates/navbar.main.html';
    $scope.common.side = false;
    $scope.common.header = false;

    $scope.groups = [
      {
        title: '유기견 봉사활동 어렵지 않아요',
        content: '해피테일을 통해 알게된 답십리 땡큐 보호소라는 곳을 방문했어요. 센터에 도착하자 마자 너무 많은 아이들이 좁은 공간에서 움직이지 않고 생활하는 모습이 가장 마음이 아팠습니다. 정말 잘 왔다고 생각했어요. 특별한 경험이나 노하우 없이도 가장 쉽게 할수 있는 봉사활동이 산책이라고 해요. 많은 개들을 적은 인원으로 관리하는 보호소에서는 많은 개들을 외출 시켜주기가 참 어렵다고 하네요... 그래서 단지 시간을 내서 함께 밖에서 놀아주는 것 만으로 개들에겐 신체적으로 심리적으로도 많은 치료효과가 있다고 해요. 센터에 도착하고 매칭받은 작은 뽀롱이라는 아이를 데리고 센터 관리자분이 알려주신 인근 근린공원으로 산책을 나갔어요. 갑작스런 외출에 흥분해 오줌을 싸거나 겁을 먹을 수도있다는 주의사항 몇가지를 알려주셨지만 뽀롱이는 40여분 산책하는 동안 너무 착하게 제 옆을 지켜주었답니다. '
      },
      {
        title: '키우지 못하더라도 지켜줄 수 있다는것을 깨닫게 되었다.',
        content: 'Dynamic Group Body - 2'
      },
      {
        title: '호승아 이젠 퇴근후 나랑 매일 운동하자 >ㅅ< ',
        content: 'Dynamic Group Body - 2'
      },
      {
        title: '버림받았지만 여전히 사람을 좋아하는 아이들',
        content: 'Dynamic Group Body - 2'
      },
      {
        title: '우리동네 귀요미와 산책',
        content: 'Dynamic Group Body - 2'
      },
      {
        title: '딸아이들도 좋은 시간을 보냈어요',
        content: 'Dynamic Group Body - 2'
      },
      {
        title: '말티즈 키위와 함께한 힐링의 시간',
        content: 'Dynamic Group Body - 2'
      },
      {
        title: '다음엔 사료라도 조금 챙겨갈게',
        content: 'Dynamic Group Body - 2'
      },
      {
        title: '너무너무 귀여운 깨돌이!!!',
        content: 'Dynamic Group Body - 2'
      },
      {
        title: '불광천에 산책 다녀왔습니다!',
        content: 'Dynamic Group Body - 2'
      },
    ];

  });
