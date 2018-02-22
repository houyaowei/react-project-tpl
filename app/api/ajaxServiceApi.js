class TravelServiceApi {
    static login(){
        console.log("TravelServiceApi -> login");
        return new Promise((resolve) => {
            //setTimeout(() => {
              resolve(Object.assign({}, {
                   login : true
              }));
           // }, 3000);
        });
    }
}
export default TravelServiceApi;