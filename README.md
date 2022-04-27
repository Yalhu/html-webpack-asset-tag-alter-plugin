
# htmlWebpackAssetTagAlterPlugin
This package extends the html-webpack-plugin. It alter asset tags attribute. For example, adding `id`, `onerror` and any other attribute for some reason.
The result will be like: `<script src="//app.domain.com/js/app.js" id="appjs" onerror="__reloadResource(this)"></script>`


## Installation
`npm i html-webpack-plugin@4 html-webpack-asset-tag-alter-plugin`
note: `html-webpack-plugin` is also required.
## Basic Usage
```js
{
    plugins: [
        new HtmlWebpackPlugin(),
        new HtmlWebpackAssetTagAlterPlugin({
            assetTags: {
                scripts: {
                    str: "somevalue",
                    /*
                     * target - current tag (when assetTags) or value.
                     * data - html-webpack-plugin#alterassettaggroups-hook arguments.
                    */
                    truly: true,
                    falsely: false,
                    fun: function(target, data) {
                        return "foo(123)"
                    }
                },
                styles: {},
                meta: {},
            },
            // publicPath: {}, // Error: {} is not a correct value
            outputName: '',
        })
    ]
}
```
The result is: 
`<script src="//app.domain.cn/js/app.b9xxx6a.js" str="somevalue" truly fun="foo(123)"></script>`

### options
Option's entry are same with [html-webpack-plugin#alterassettaggroups-hook](https://github.com/jantimon/html-webpack-plugin#alterassettaggroups-hook). And the value to be seted can be string, boolean or function. 
```js
    AsyncSeriesWaterfallHook<{
        assetTags: {
            scripts: Array<HtmlTagObject>,
            styles: Array<HtmlTagObject>,
            meta: Array<HtmlTagObject>,
        },
        publicPath: string,
        outputName: string,
        plugin: HtmlWebpackPlugin
    }>
```