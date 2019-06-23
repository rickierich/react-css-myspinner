import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import {terser} from 'rollup-plugin-terser'
const disttt = 'dist'
const production = !process.env.ROLLUP_WATCH
export default{
  input : 'src/index.js',
  external :['react'],
  output : [
    {
    file : `${disttt}/bundle.cjs.js`,
    format : 'cjs'
  },
  {
    file : `${disttt}/bundle.esm.js`,
    format : 'esm'
  },
  {
    name : 'ReactCssSpinners',
    file : 'dist/bundle.umd.js',
    globals : {
        react: 'React'
    },
    format : 'umd'
  }
],
plugins:[
  resolve,
  babel({
    exclude :'node_modules/**'}),
    production && terser()
]
}
