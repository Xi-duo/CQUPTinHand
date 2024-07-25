import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import example from '../assets/example.jpg';
import getTheDate from './methods/date';

export default function Home() {
  const [weekTime, setWeekTime] = useState({ week: 0, day: 0 });

  useEffect(() => {
    const today = new Date();
    const result = getTheDate(today);
    setWeekTime(result);
  }, []);
  const weekNumOfChinese = [
    '零',
    '一',
    '二',
    '三',
    '四',
    '五',
    '六',
    '七',
    '八',
    '九',
    '十',
    '十一',
    '十二',
    '十三',
    '十四',
    '十五',
    '十六',
    '十七',
    '十八',
    '十九',
    '二十',
    '二十一',
    '二十二',
    '二十三',
    '二十四',
    '二十五',
    '二十六',
    '二十七',
    '二十八',
    '二十九',
    '三十',
  ];
  const dayNames = ['一', '二', '三', '四', '五', '六', '天'];

  return (
    <div>
      <div className="header">
        <div className="weektime">
          {' '}
          第{weekNumOfChinese[weekTime.week]}周 周{dayNames[weekTime.day - 1]}
        </div>
        <div className="something">
          <span>发现</span>
          <span>邮箱图标</span>
          <span>写的图标</span>
        </div>
      </div>
      <div className="body">
        <div>
          <img src={example} alt="" />
          <div className="jwzx">教务在线</div>
          <div className="buttonbox">
            <span>
              <Link to="/arrange"> 课表查询</Link>
            </span>
            <span>重邮地图</span>
            <span>没课约</span>
            <span>没课约</span>
            <span>没课约</span>
          </div>
        </div>
      </div>
    </div>
  );
}
