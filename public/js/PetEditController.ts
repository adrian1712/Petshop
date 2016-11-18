namespace App {
    export class PetEditController {
        static $inject = ["$http", "$state"];

        private httpService;
        private stateService;
        public pets;

        constructor (
            $http: angular.IHttpService,
            $state: angular.ui.IState
        ){
            this.httpService = $http;
            this.stateService = $state;

            console.log('here now')
            this.httpService({
                url: '/pets/' + this.stateService.params.id,
                method: 'GET'
            })
            .success ((response) => {
                console.log ('hello',response);
                this.pets = response;
            })
            .error (() => {

            })
        }
        public editPet () {
            console.log ('save: ', this.pets.title);
            this.httpService({
                url: '/pets/'+ this.stateService.params.id,
                method: 'PUT',
                data: {
                    name: this.pets.name,
                    category: this.pets.category,
                    breed: this.pets.breed,
                    price: this.pets.price,
                    img: this.pets.img,
                }
            })
            .success ((response) => {
                console.log('Test data: ', response);
                this.stateService.go ('pets')
            })
            .error ((response) => {

            });
        }
    }
}
