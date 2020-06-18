import { Effect, ImmerReducer } from 'umi';
import { login } from '@/pages/login/services/login';

export interface StateType {
  status?: 'ok' | 'error';
  type?: string;
}

export interface ModelType {
  namespace: string;
  state: StateType;
  effects: {
    login: Effect;
  };
  reducers: {
    changeLoginStatus: ImmerReducer<StateType>;
  };
}

const Model: ModelType = {
  namespace: 'login',

  state: {
    status: undefined,
  },

  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(login, payload);
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });
      // Login successfully
      // console.log('success', response);
    },
  },

  reducers: {
    changeLoginStatus(state) {
      // immer 写法
      state.status = 'ok';
    },
  },
};

export default Model;
