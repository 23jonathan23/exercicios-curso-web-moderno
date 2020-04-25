//Esse é o arquivo de configuranção do WebPack
//Constante usada para identficar se estamos usando o modo produção ou Dev.
const modoDev = process.env.NODE_ENV !== 'production'
//Importando o framework Webpack e plugin
const webpack = require('webpack')
//Plugin responsavél por extrair o css para um arquivo externo
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//Plugin responsavél por otimizar o codigo JS, tirar espaços
//colocar tudo em uma só linha e etc (Minimificar)
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
//Plugin responsavél por otimizar o codigo CSS, tirar espaços
//colocar tudo em uma só linha e etc (Minimificar)
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  //Verificar se a varial é verdadeira se sim
  //setará o modo dev, se não setará o modo prodc.
  mode: modoDev ? 'development' : 'production', //Modo que o codigo será tratado //dev e production
  entry: './src/principal.js', //Arquivo de entrada
  output: { //Configurança de saida do arquivo
    filename: 'principal.js', //Nome do arquivo que seja salvo
    path: __dirname + '/public' //local onde será salvo o arquvio
  },
  devServer: {//Configurando servidor de DEV.
    contentBase: "./public", //Local onde estão os arquivos que serão servidos
    port: 8080 //Porta onde será servido
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({//Configuração do plugin / Otimiza o JS
        cache: true,
        parallel: true //Executar de forma paralela
      }),
      new OptimizeCSSAssetsPlugin({}) //Otimiza o CSS
    ]
  },
  plugins: [//plugins
    new MiniCssExtractPlugin({
      filename: 'estilo.css', //Nome do arquivo que será gerado
    })
  ],
  module: {
    rules: [{ //Aqui dentro são colocados as regras
      test: /\.s?[ac]ss$/, //Habilitando leitura de arquivos SCSS, CSS, SASS
      use: [// define quais Plugins serão usados
        MiniCssExtractPlugin.loader,
        //'style-loader', //Adiciona CSS a DOM injetando a tag <style>
        'css-loader', //Responsavel por interpretar @import, url()...
        'sass-loader'//Responsavél por interpretar Arquivos SCSS
      ]
    }, {
      test: /\.(png|svg|jpg|gif)$/, //Habilitando leitura de arquivos IMGs
      use:['file-loader'] //Responsavél por interpretar IMGs
    }]
  }
}