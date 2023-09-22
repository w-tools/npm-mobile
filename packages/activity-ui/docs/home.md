# 介绍

### 关于

动效组件库

构建工具基于有赞的`vant-cli`: https://github.com/youzan/vant/tree/2.x/packages/vant-cli

### 开发

`yarn run dev`

- 开发新组件时可以直接 copy`scale-button`文件作为模板
- 组件进行文档页面预览时需要在`site.js`文件中进行注册
- 开发组件时使用`px`进行布局, 在进行打包后, 工具会自动将`px`转化为`rem`
- 预览子页面的默认宽度为`360px`

### 打包

`yarn run build`

### 样式

所有样式`px`均会被转成`rem`

### 注意点

所有的样式引用不要使用别名, 否则在 build 时无法进行路径解析

./src/icons 文件夹中存放一些常用的 icon 图标数据, 注意==所有图标以 base64 的形式==进行存储.

进行构建时会对生成 1 倍和 3 倍的 CSS 样式,根据项目自行引用