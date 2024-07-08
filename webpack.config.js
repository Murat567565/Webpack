const path = require('path');

module.exports = {
    entry: './src/index.js', // Укажите путь к вашему основному JS файлу
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        }]
    },
    mode: 'development' // или 'production', если хотите использовать оптимизацию для продакшн
};