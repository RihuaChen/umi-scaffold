import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'umi';
import { Spin } from 'antd';

interface StateType {
  login: { status: string };
  loading: {
    effects: {
      [key: string]: boolean;
    };
  };
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state: StateType) => state.login);
  const loadingEffect = useSelector((state: StateType) => state.loading);
  const loading = loadingEffect.effects['login/login'];
  useEffect(() => {
    dispatch({
      type: 'login/login',
      payload: { accountNo: 'UOB100129', passWord: 'welcome@2' },
    });
  }, [1]);
  return (
    <div>
      <Spin spinning={loading}>Page index {status}</Spin>
    </div>
  );
};

export default Login;
