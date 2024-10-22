import Mock from 'mockjs';

export default {
  // 支持值为 Object 和 Array
  'POST /api/login/user': (req: any, res: { send: (arg0: any) => void }) => {
    setTimeout(() => {
      res.send(Mock.mock({ users: [1, 2] }));
    }, 1000);
  },

  // GET 可忽略
  '/api/users/1': { id: 1 },
  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (
    req: any,
    res: { setHeader: (arg0: string, arg1: string) => void; end: (arg0: string) => void },
  ) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok');
  },
};
