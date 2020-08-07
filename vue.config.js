const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    host: "127.0.0.1",
    port: 9090
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("examples"))
      .set("seed/packages", resolve("packages"))
      .set("seed/lib", resolve("lib"));
    if (process.env.NODE_ENV === "production") {
      config.externals({
        "element-ui": {
          commonjs: "element-ui",
          commonjs2: "element-ui",
          root: "ELEMENT"
        }
      });
    }
  },
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  css: { extract: false }
};
