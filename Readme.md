### TypeScript的打包配置小demo步骤：

> 1. npm init -y 
> 2. npm i webpack webpack-cli -D
> 3. 新建 weboack.config.js 、index.tsx、tsconfig.json   
> 4. npm i ts-loader typescript -D
> 5. npm i  @types/lodash -D  
> 4与5的安装为对应的库与对应的库类型文件，可以给出一些警告。可以参考Github仓库：DefinitelyTyped，通过search匹配查询。
> 6. npm run build
 ```
 // index.tsx
 import * as _ from 'lodash';

class Greeter {
  greeting:string;
  constructor(message:string){
    this.greeting = message;
  }
  greet(){
    return _.join(["Hello", ' ', this.greeting], '');
  }
}

let greeter = new Greeter('world');

let button = document.createElement('button');
// button.textContent ='Click ';
// button.onclick = function(){
  alert(greeter.greet());
// }
document.body.appendChild(button);
```

```
//webpack.config.js
const path = require('path')

module.exports = {
  mode:'production',
  entry:"./src/index.tsx",
  module:{
    rules:[
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  output:{
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist')
  }
}
```

```
// tsconfig.json
{
  "compolerOptions":{
    "outDir" : "./dist", //打包生成的文件为根目录下的dist文件(可不写，webpack已配置)
    "module": "es6",
    "target:": "es5",  //打包成ES5的代码
    "allowsJs": true // 允许引入js文件
  }
}
```

