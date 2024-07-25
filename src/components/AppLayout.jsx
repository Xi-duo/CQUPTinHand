import { Outlet } from 'react-router-dom';

import App from '../App';
export default function AppLayout() {
  return (
    <App>
      <div className="phone-screen">
        <Outlet />
        <div className="button-container">
          <button>发现</button>
          <button>邮乐园</button>
          <button>我的</button>
        </div>
      </div>
    </App>
  );
}
