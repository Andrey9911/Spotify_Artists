const path = require("path");


module.exports({
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "my-first-webpack.bundle.js"
    },
    module: {
        rules: [
            {test: /\.scss$/, use: "scss-loader"},
            {test: /\.css$/, use: "css-loader"}
        ]
    }

})