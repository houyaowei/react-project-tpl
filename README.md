# react前端平台

### install nodejs
> https://nodejs.org/en/

### install yarn
> https://yarnpkg.com/en/docs/install

### install project node packages
* install by yarn or npm 

>  yarn install or npm install 

* run the demo

> yarn run start


### resource
[React](https://reactjs.org/)

[Redux 中文](http://www.redux.org.cn/)

[react-router](https://github.com/ReactTraining/react-router)

[Redux-saga](https://github.com/redux-saga/redux-saga)

[React-Native](https://facebook.github.io/react-native/)

[ES6](http://es6.ruanyifeng.com/)

### run mock server

> cd server directory
> yarn install
> yarn start

### fix error

* error Msg:The engine "node" is incompatible with this module. Expected version ">=4 <=9".

> resolve :  yarn config set ignore-engines true

### code formate
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