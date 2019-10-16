# shopapp

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
此项目开发遇到的问题：
1：字体样式从iconfont下载好后，在项目引入时，少引了.svg文件，导致报错。（在阿里的iconfont里将需要的图标保存至项目，然后下载到本地，将其中的字体文件及css文件拷贝至src的css目录。然后在main.js里将iconfont.css引入，然后在网站复制各个图标的16进制编码进行使用。）
2：在使用mui时，下载好后。将mui的dist文件里的文件单另拿出来，容易导致错误。直接将整个dist目录拷贝到项目根目录。将dist改为lib.
3：header使用的是mintui的。默认是fixed定位。这导致header下的轮播被压住。直接将fixed去掉。然后将index.html的padding和margin设置为0.