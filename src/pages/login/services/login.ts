import request from 'umi-request';

interface ParamsTypes {
  accountNo: string;
  passWord: string;
}

export async function login(params: ParamsTypes) {
  return request('/api/login/user', {
    method: 'POST',
    data: params,
  });
}
