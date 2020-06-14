// https://umijs.org/config/
import { defineConfig, utils } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import webpackPlugin from './plugin.config';
const { winPath } = utils; // preview.pro.ant.design only do not use in your production ;

const { REACT_APP_ENV, GA_KEY } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  analytics: GA_KEY ? { ga: GA_KEY } : false,
  dva: {
    hmr: true,
    immer: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: false,
  },
  dynamicImport: {
    // loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  define: {
    REACT_APP_ENV: REACT_APP_ENV || false,
  },
  ignoreMomentLocale: true,
  lessLoader: {
    javascriptEnabled: true,
  },
  cssLoader: {
    modules: {
      getLocalIdent: (
        context: { resourcePath: string },
        _: string,
        localName: string,
      ) => {
        if (
          context.resourcePath.includes('node_modules') ||
          context.resourcePath.includes('ant.design.pro.less') ||
          context.resourcePath.includes('global.less')
        ) {
          return localName;
        }

        const match = context.resourcePath.match(/src(.*)/);

        if (match && match[1]) {
          const antdProPath = match[1].replace('.less', '');
          const arr = winPath(antdProPath)
            .split('/')
            .map((a: string) => a.replace(/([A-Z])/g, '-$1'))
            .map((a: string) => a.toLowerCase());
          return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
        }

        return localName;
      },
    },
  },
  manifest: {
    basePath: '/',
  },
  proxy: proxy[REACT_APP_ENV || 'dev'],
  chainWebpack: webpackPlugin,
});
