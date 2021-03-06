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

  export class AddMovieController {
    public movie;

    public save() {
      this.movieService.save(this.movie).then(() => {
        this.$state.go('Home');
      });
    }

    constructor(private movieService: app.Services.MovieService, private $state: ng.ui.IStateService) {

    }
  }

  export class UpdateMovieController {
    public movieToEdit;

    public edit() {
      this.movieService.save(this.movieToEdit).then(() => {
        this.$state.go("Home");
      })
    }

    constructor(
      private movieService: app.Services.MovieService,
      private $state: ng.ui.IStateService,
      $stateParams: ng.ui.IStateParamsService
    ) {
      this.movieToEdit = movieService.get($stateParams['id']);
    }
  }

  export class DeleteMovieController {
    public movieToDelete;

    public remove() {
      this.movieService.remove(this.movieToDelete.id).then(() =>{
        this.$state.go("Home");
      })
    }

    constructor(
      private movieService: app.Services.MovieService,
      private $state: ng.ui.IStateService,
      $stateParams: ng.ui.IStateParamsService
    ) {
      this.movieToDelete = movieService.get($stateParams['id']);
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
