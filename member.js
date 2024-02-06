function skillsMember() {
  return {
    name: 'skillsMember',
    restrict: 'E',
    scope: {
      member: '=',
      skills: '='
    },
    templateUrl: 'member.html'
  };
}
