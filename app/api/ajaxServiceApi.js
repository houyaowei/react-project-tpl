import fetch from "whatwg-fetch";
import URL from "./urlConfig";

let getData = function(url, data, resolve) {
  let option = {
    method: "POST",
    credentials: "include",
    headers: { "Content-type": "application/json; charset=utf-8" },
    body: data && JSON.stringify(data)
  };
  return fetch(url, option)
    .then(resp => resp.json())
    .then(data => {
      resolve({
        res: data
      });
    });
};
class AjaxServiceApi {
  static login() {
    console.log("AjaxServiceApi -> login");
    return new Promise(resolve => {
      let url = URL.login;
      let postData = {};
      getData(url, postData, resolve);
    });
  }
}
export default AjaxServiceApi;
