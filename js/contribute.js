console.clear();
(function () {
  var app = angular.module('app', []);

  app.service('UserService', function ($q, $http) {
    const api = 'https://api.github.com/repos/Tibinsunny/enumcrt/contributors';

    this.getUsers = function () {
      let defer = $q.defer();
      $http.get(api).then(res => {
        defer.resolve(res.data.map(user => ({
          src: user.avatar_url,
          name: user.login.toUpperCase(),
          login: `@${user.login}` })));

      }, error => defer.reject(error));
      return defer.promise;
    };

  });

  app.controller('MainCtrl', function (UserService) {
    UserService.getUsers().then(users => {
      this.users = users;
      console.log(users);
    });
  });

})();