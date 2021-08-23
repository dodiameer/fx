const esbuild = require("esbuild")
const glob = require("glob")

  ; (async () => {
    const entryPoints = glob.sync("./src/**/*.ts")
    await esbuild.build({
      format: "cjs",
      target: ["node12"],
      outdir: "./dist/node",
      entryPoints,
      bundle: true,
      minify: false,
      sourcemap: false,
      platform: "node",
    })

    await esbuild.build({
      format: "esm",
      target: ["chrome58", "firefox57", "safari11", "edge16"],
      outdir: "./dist/browser",
      entryPoints,
      bundle: true,
      minify: false,
      sourcemap: false,
      platform: "browser",
    })
  })()
