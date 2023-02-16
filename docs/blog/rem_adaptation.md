# Rem 布局适配

## 1.安装rem所需插件

```
npm i postcss-plugin-px2rem --save-dev

或者

npm install postcss-pxtorem --save-dev
```
## 2.安装amfe-flexible：

```
    npm i amfe-flexible -S
```
然后： main.js 引入amfe-flexible

```javascript
  import 'amfe-flexible'
```

5.设置vue.config.js

```javascript
//如果安装postcss-plugin-px2rem 

module.exports = {
  lintOnSave: false,//关闭lintOnSave
	css: {
		loaderOptions: {
			postcss: {
				plugins: [
					require('postcss-plugin-px2rem')({
						rootValue: 75, //换算基数， 默认100  ，原型750，原型图375，这里就37.5
						// unitPrecision: 5, //允许REM单位增长到的十进制数字。
						//propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
						// propBlackList: [], //黑名单
						exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
						// selectorBlackList: [], //要忽略并保留为px的选择器
						// ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
						// replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
						mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
						minPixelValue: 1 //设置要替换的最小像素值(1px会被转rem)。 默认 0
					}),
				]
			}
		}
	},
	
}

```

```javascript
//如果安装npm install postcss-pxtorem --save-dev

module.exports = {
  lintOnSave: false,//关闭lintOnSave
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          require('postcss-pxtorem')({ // 把px单位换算成rem单位
            rootValue: 75, // 换算的基数(设计图750的根字体为75)
            exclude: /(node_module)/,
            selectorBlackList: ['weui', 'mu', '.norem'], // 忽略转换正则匹
            propList: ['*']
          })
        ]
      }
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  }
}
```
