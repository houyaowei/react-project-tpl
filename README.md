## react前端模板

 提供一站式的react项目开发模板，完全实现0配置，你可以享受到如下服务：
 
 - 基于流行的三方库:redux,saga,router等。
 - 及时上手，不用其他配置即可进行业务开发。
 - 提供前端mock server，真正实现前后端分离
 - 自动提供eslint检查
 - 打包自动优化

#### install nodejs
> https://nodejs.org/en/

#### install yarn
> https://yarnpkg.com/en/docs/install

#### install project node packages
* install by yarn or npm 

>  yarn install or npm install 

* run the demo

> yarn run start


#### resource
[React](https://reactjs.org/)

[Redux 中文](http://www.redux.org.cn/)

[react-router](https://github.com/ReactTraining/react-router)

[Redux-saga](https://github.com/redux-saga/redux-saga)


[ES6](http://es6.ruanyifeng.com/)

#### run mock server

> cd server directory
> yarn install
> yarn start

#### fix error

* error Msg:The engine "node" is incompatible with this module. Expected version ">=4 <=9".

> resolve :  yarn config set ignore-engines true

#### code formate
* vs code  setting
> "editor.formatOnSave": false,
    "[javascript]": {
        "editor.formatOnSave": true
    }

*  webstorm    
> ctrl+alt+shift +P

### pre-commit根据情况定义
```
npm add --dev pre-commit

package.json中配置
"pre-commit": [
  "eslint"
]
```

#### questions
如果问题请及时提issue。
