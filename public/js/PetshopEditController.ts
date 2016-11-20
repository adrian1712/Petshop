namespace App {
    export class PetshopEditController {
        static $inject = ["$http", "$state"];

        private httpService;
        private stateService;
        public shops;

        constructor (
            $http: angular.IHttpService,
            $state: angular.ui.IState
        ){
            this.httpService = $http;
            this.stateService = $state;

            console.log('here now')
            this.httpService({
                url: '/shops/' + this.stateService.params.id,
                method: 'GET'
            })
            .success ((response) => {
                console.log ('hello',response);
                this.shops = response;
            })
            .error (() => {

            })
        }
        public editShop () {
            console.log ('new shop: ', this.shops.title);
            this.httpService({
                url: '/shops/'+ this.stateService.params.id,
                method: 'PUT',
                data: {
                    shopname: this.shops.shopname,
                    address: this.shops.address,
                    city: this.shops.city,
                    state: this.shops.state,
                    postalcode: this.shops.postalcode,
                }
            })
            .success ((response) => {
                console.log('Test data: ', response);
                this.stateService.go ('petshop')
            })
            .error ((response) => {

            });
        }
    }
}
