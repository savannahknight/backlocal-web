// craco.config.js
module.exports = {
  devServer: {
    proxy: {
      "/api": "http://localhost:8080"
    },
  },
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  }