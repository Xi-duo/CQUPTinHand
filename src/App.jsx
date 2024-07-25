import './Less/index.less';

import PropTypes from 'prop-types';
function App({ children }) {
  return (
    //模拟小米13Pro手机的样子
    <div className="app-container">
      <div className="phone-container">
        <div className="phone-screen">{children}</div>
      </div>
    </div>
  );
}
App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
