angular.module('use',[]).controller('user',function($scope,$routeParams)
{
	$scope.one='文成武德';
	$scope.two='千秋万载';
	$scope.three='一统江湖';
	switch($routeParams.type)//类型结果参数
	{
		case'hot':
		$scope.one='文成';
		$scope.two='千秋';
		$scope.three='一统';
		break;
		
		case'sexy':
		$scope.one='武德';
		$scope.two='万载';
		$scope.three='江湖';
		break;
		
		case'game':
		$scope.one='文成武德';
		$scope.two='千秋万载';
		$scope.three='一统江湖';
		break;
	}
});