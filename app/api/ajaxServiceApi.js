class TravelServiceApi {
    static login(){
        return new Promise((resolve) => {
            setTimeout(() => {
              resolve(Object.assign({}, {
                   login : true
              }));
            }, 3000);
        });
    }
}