namespace App {
    let app = angular.module ('App', [ 'ui.router']);

    app.config ([
        '$stateProvider',
        ($stateProvider) => {
            $stateProvider
                .state ('home',{
                    url: "/",
                    template: "Home Page",
                    controller: App.HomeController,
                })
                .state ('about',{
                    url: "/about",
                    template: "About Page",
                    controller: App.AboutController,
                })
                .state ('contact',{
                    url: "/contact",
                    template: "Contact",
                    controller: App.AboutController,
                })
                .state ('pets',{
                    url: "/pets",
                    templateUrl: "templates/pets.html",
                    controller: App.PetsController,
                    controllerAs: 'petsController'
                })
                .state ('petshop',{
                    url: "/petshop",
                    templateUrl: "templates/petshop.html",
                    controller: App.PetshopController,
                    controllerAs: 'PetshopController'
                })
        }
    ])
}
