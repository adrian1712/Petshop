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
                    template: "About Page",
                    controller: App.AboutController,
                })
                .state ('pets',{
                    url: "/pets",
                    template: "Pets",
                    controller: App.PetsController,
                })
                .state ('petshop',{
                    url: "/petshop",
                    template: "Pet Shop",
                    controller: App.PetshopController,
                })
        }
    ])
}
