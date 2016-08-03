namespace app.Services {
  export class MovieService {
    private MovieResource;

    public list() {
      return this.MovieResource.query();
    }

    constructor(private $resource: ng.resource.IResourceService){
      this.MovieResource = $resource('/api/movies/:id');
    }
  }
  angular.module('app').service('movieService', MovieService);
}
