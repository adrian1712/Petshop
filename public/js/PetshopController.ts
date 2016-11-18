namespace App {
    export class PetshopController{
        static $inject = ['$http', '$state'];

        private httpService;
        private stateService;

        public petShops;
        // public currentShop;
        public newShop;

        public shopname;
        public address;
        public city;
        public state;
        public postalcode;

        constructor (

            $http: angular.IHttpService,
            $state: angular.ui.IState
        ){
            this.httpService = $http;
            this.stateService = $state;

            console.log ('test service: ', this.stateService);

            this.petShops = [];
            this.newShops = {};
            this.getShopList ();
        }

        public getShopList () {
            console.log ('list' )
            this.httpService ({
                url:'/shops',
                method: 'GET',
            })
            .success ((response) => {
                console.log('Test data: ',response);
                this.petShops = response;
            })
            .error ((response) => {

            })
        }
        public saveShop (data) {
            console.log ('datato save: ', this.shopname);
            this.httpService({
                url: '/shops',
                method: 'POST',
                data: {
                    shopname: this.shopname,
                    address: this.address,
                    city: this.city,
                    state: this.state,
                    postalcode: this.postalcode,
                }
            })
            .success ((response) => {
                console.log('Test data: ', response);
                this.stateService.reload ()
            })
            .error ((response) => {
            })
        }
        public deleteShop (id) {
            console.log('deleted: ' + id)
            this.httpService ({
                url: '/shops/' + id,
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
        public editShop (shopId) {
            console.log ('pet id: ' + shopId);
            this.stateService.go ('shop-edit' ,{
                id: shopId
            });
        }
    }
}





// namespace App {
//     export class PetshopController {
//         static $inject = ['$http','$state'];
//         private httpService;
//         private stateService;
//
//         public petsList;
//         public currentPets;
//         public newPets;
//
        // public shopname;
        // public address;
        // public city;
        // public state;
        // public postalcode;
//
//         constructor (
//             $http: angular.IHttpService,
//             $state: angular.ui.IState
//         )
//         {
//             this.httpService = $http;
//             this.stateService = $state;
//
//             console.log ('testing: ', this.stateService);
//
//             this.shopsList = [];
//             this.newShops = {};
//             this.getShopList ();
//         }
//
//         public getShopList (){
//             console.log('shopsList')
//             this.httpService ({
//                 url: '/shops',
//                 method: 'GET'
//             })
//             .success ((response) => {
//                 console.log('Test date: ',response)
//                 this.shopsList = response;
//             })
//             .error ((response) => {
//
//             })
//         }
//         public editShop (shopId) {
//             console.log('shop id: '+ shopId);
//             this.stateService.go ('shop-edit')
//         }
//     }
// }
