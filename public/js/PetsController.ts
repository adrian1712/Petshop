namespace App {
    export class PetsController{
        static $inject = ['$http', '$state'];

        private httpService;
        private stateService;

        public petsList;
        public currentPets;
        public newPets;

        public name;
        public category;
        public breed;
        public price;

        constructor (

            $http: angular.IHttpService,
            $state: angular.ui.IState
        ){
            this.httpService = $http;
            this.stateService = $state;

            console.log ('- test: ', this.stateService);

            this.petsList = [];
            this.newPets = {};
            this.getPetsList ();
        }

        public getPetsList () {
            console.log ('list')
            this.httpService ({
                url:'/pets',
                method: 'GET',
            })
            .success ((response) => {
                console.log('Test data: ',response);
                this.petsList = response;
            })
            .error ((response) => {

            })
        }
        public save (data) {
            console.log ('datato save: ', this.name);
            this.httpService({
                url: 'pets',
                method: 'POST',
                data: {
                    name: this.name,
                    category:this.category,
                    breed: this.breed,
                    price: this.price
                }
            })
            .success ((response) => {
                console.log('Test data: ', response);
                this.stateService.reload ()
            })
            .error ((response) => {
            })
        }
        public deletePet (id) {
            console.log('deleted: ' + id)
            this.httpService ({
                url: '/pets/' + id,
                method: 'DELETE'
            })
            .success ((response) => {
                console.log("deleted!!!!")
                console.log ("deleted: " + response);
                this.stateService.reload ()
            })
            .error ((response) => {
                console.log()
            })
        }
    }
}
