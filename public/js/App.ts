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
                    controllerAs: 'petshopController'
                })
                .state ('pet-edit', {
                    url: "/pets-edit",
                    templateUrl: 'templates/pet-edit.html',
                    controller: App.PetEditController,
                    controllerAs: 'petEditController',
                    params: {
                        id: null
                    }
                })
                .state ('shop-edit', {
                    url: "/shop-edit",
                    templateUrl: 'templates/shop-edit.html',
                    controller: App.PetshopEditController,
                    controllerAs: 'petshopEditController',
                    params: {
                        id: null
                    }
                })
        }
    ])
}
