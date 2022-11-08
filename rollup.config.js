//import typescript from 'rollup-plugin-typescript2';
//import typescript from "@rollup/plugin-typescript"
//import pkg from "./package.json";

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts"
import postcss from "rollup-plugin-postcss"

const packageJson = require("./package.json");

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            { file: packageJson.module, format: "esm", sourcemap: true },
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            postcss()
            
        ],
        external : ["react", "react-dom"]
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external :  [/\.css$/u, "react", "react-dom"]
    },
];

// const input = 'src/index.ts';

// const plugins = [
//     typescript(),
// ];

// const external = [
//     ...Object.keys(pkg.dependencies || {}),
//    // ...Object.keys(pkg.peerDependencies || {}),
// ];

// export default [
//     {
//         input,
//         output: {
//             file: pkg.module,
//             format: 'esm',
//             sourcemap: true,
//             exports : "auto"
//         },
//         plugins : [css()],
//         external,
//     },
//     {
//         input,
//         output: {
//             file: pkg.main,
//             format: 'cjs',
//             sourcemap: true,
//             exports : "auto"
//         },
//         plugins : [css()],
//         external,
//     },
// ];

////V2 TEST/////////////////////////////////////////////////////
// import resolve from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
// import typescript from "@rollup/plugin-typescript";
// import dts from "rollup-plugin-dts";

// const packageJson = require("./package.json");

// export default [
//     {
//         input: "src/index.ts",
//         output: [
//             {
//                 //  file: packageJson.main,
//                 format: "cjs",
//                 sourcemap: true,
//                 file: "dist/index.cjs.ts",
//                 exports: "auto",
//             },
//             {
//                 // file: packageJson.module,
//                 format: "esm",
//                 sourcemap: true,
//                 dir: "dist/index.esm.ts",
//                 exports: "auto",
//             },
//         ],
//         plugins: [
//             resolve(),
//             commonjs(),
//             typescript({ tsconfig: "./tsconfig.json" }),
//         ],
//     },
//     {
//         input: "dist/index.esm.ts/index.js",
//         output: [{ file: "dist/esm/index.d.ts", format: "esm" }],
//         plugins: [dts()],
//     },
// ];

/// V1 TEST
// import styles from "rollup-plugin-styles";
// const autoprefixer = require("autoprefixer");
// import babel from "@rollup/plugin-babel";
// import typescript from "@rollup/plugin-typescript";

// // the entry point for the library
// const input = "src/index.ts";

// //
// var MODE = [
//     {
//         fomart: "cjs",
//     },
//     {
//         fomart: "esm",
//     },
//     {
//         fomart: "umd",
//     },
// ];

// //var config = [];

// //MODE.map((m) => {
//     var conf = {
//         input: input,
//         // output: {
//         //     // then name of your package
//         //     name: "tiny-modal",
//         //
//         //     format: m.fomart,
//         //     exports: "auto",
//         // },
//         output: {
//          // dir: 'output',
//           file: `dist/index.cjs.ts`,
//           format: 'cjs'
//         },
//         // this externelizes react to prevent rollup from compiling it
//         external: ["react", /@babel\/runtime/],
//         plugins: [
//             [typescript()],
//             // these are babel comfigurations
//             babel({
//                 exclude: "node_modules/**",
//                 plugins: ["@babel/transform-runtime"],
//                 babelHelpers: "runtime",
//             }),
//             // this adds sourcemaps
//             // sourcemaps(),
//             // this adds support for styles
//             styles({
//                 postcss: {
//                     plugins: [autoprefixer()],
//                 },
//             }),
//         ],
//     };
//  //   config.push(conf);
// //});

// export default conf;
