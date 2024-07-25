import '../Less/add.less';

import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
export default function NewComponent() {
  const inputRef = useRef(null);
  const [message, setMessage] = useState(['', '一个标题']);
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    // 自动聚焦 input 框
    inputRef.current.focus();
  }, []);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleNextClick = () => {
    if (inputValue.trim() === '') {
      alert('输入框内容不能为空');
    } else {
      setMessage([`标题:${inputValue}`, '具体内容']);
      setInputValue('');
      inputRef.current.focus();
    }
  };
  return (
    <div className="newComponent">
      <div className="box1"></div>
      <div className="box2"></div>
      <div className="box3"></div>
      <div className="box4"></div>
      <div className="yoursheader">
        <div className="title">{message[0]}</div>
        <div className="message">为你的行程添加</div>
        <div className="message">{message[1]}</div>
        <input
          className="addtext"
          type="text"
          ref={inputRef}
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className="next" onClick={handleNextClick}>
        →
      </div>
    </div>
  );
}

NewComponent.propTypes = {
  lesson: PropTypes.number.isRequired,
  day: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};
