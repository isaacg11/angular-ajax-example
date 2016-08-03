namespace app.Controllers {
  export class HomeController {
    public movies;
    constructor($http: ng.IHttpService, private movieService: app.Services.MovieService) {
      // $http.get('api/movies').then((results) => {
      //   console.log(results);
      //   this.movies = results.data;
      // })
      this.movies = this.movieService.list();
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
