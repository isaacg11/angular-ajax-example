namespace app.Controllers {
  export class HomeController {
    public movies;
    constructor($http: ng.IHttpService) {
      $http.get('api/movies').then((results) => {
        console.log(results);
        this.movies = results.data;
      })
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
