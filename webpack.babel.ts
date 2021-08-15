import { CleanWebpackPlugin } from 'clean-webpack-plugin'

import path from 'path'

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.ts',
        ArrowLeft: './src/components/ArrowLeft/index.ts',
        BirthdayCake: './src/components/BirthdayCake/index.ts',
        Camera: './src/components/Camera/index.ts',
        ChevronDown: './src/components/ChevronDown/index.ts',
        Close: './src/components/Close/index.ts',
        Comment: './src/components/Comment/index.ts',
        Filter: './src/components/Filter/index.ts',
        Home: './src/components/Home/index.ts',
        Info: './src/components/Info/index.ts',
        Mail: './src/components/Mail/index.ts',
        Menu: './src/components/Menu/index.ts',
        NewTab: './src/components/NewTab/index.ts',
        Pencil: './src/components/Pencil/index.ts',
        People: './src/components/People/index.ts',
        Person: './src/components/Person/index.ts',
        Profession: './src/components/Profession/index.ts',
        Reply: './src/components/Reply/index.ts',
        World: './src/components/World/index.ts',
    },
    output: {
        path: path.resolve(__dirname, './lib'),
        filename: '[name].js',
        libraryTarget: 'commonjs2',
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: {
            react: path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(scss|sass)$/,
                exclude: /node_modules\/(?!muejs)/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [new CleanWebpackPlugin()],
    externals: {
        react: 'commonjs2 react',
    },
}
