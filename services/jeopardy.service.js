angular
  .module('bootstrapardy')
  .service('JService', function($http, $q, $cacheFactory) {
    var baseUrl = 'http://jservice.io/api/';
    var cacheEngine = $cacheFactory('bootstrapardy');

    function getCategory(id) {
      return $http.get(baseUrl + 'category?id=' + id);
    }

    function getCatIds() {
      var catIds = [];
      var id;
      for(var i = 0; i < 6; i++) {
        do {
          id = Math.floor(Math.random() * 18418);
        } while (catIds.includes(id));
        catIds.push(id);
      }
      return catIds;
    }

    function getCategories() {
      var defer = $q.defer();
      var cache = cacheEngine.get('categories');
      if(cache) {
        defer.resolve(cache);
      }
      else {
        var catIds = getCatIds();
        var catArray = [];
        catIds.forEach(function(id) {
          getCategory(id).then(function(category) {
            catArray.push(category);
          });
        });
        cacheEngine.put('categories',  catArray);
        defer.resolve(catArray);
      }
      return defer.promise;
    }
    return {
      getCategories: getCategories,
    };
  });
