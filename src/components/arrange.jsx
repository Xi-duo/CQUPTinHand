import '../Less/arrange.less';

import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

import CreateWeek from './methods/weekday';
export default function Arrange() {
  const [isDragging, setIsDragging] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [dragY, setDragY] = useState(0);
  const [scheduleData, setScheduleData] = useState([
    { id: 1, date: '1月1日', course: '数学', color: 'lightblue' },
    { id: 3, date: '1月2日', course: '英语', color: 'lightgreen' },
  ]); // 新增状态存储数据
  const startDragY = useRef(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/schedule');
        console.log(res.data);
        setScheduleData(res.data.data);
      } catch (error) {
        console.error('Error fetching schedule:', error);
      }
    };

    fetchData();
  }, []);
  const handleMouseDown = (e) => {
    startDragY.current = e.clientY;
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isHidden) {
      if (isDragging) {
        const dragAmount = e.clientY - startDragY.current;
        setDragY(dragAmount);
      }
    } else {
      if (isDragging) {
        const dragAmount = 600 - startDragY.current - e.clientY;
        setDragY(dragAmount);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (dragY > 100) {
      setIsHidden(!isHidden);
    } else {
      setDragY(0); // Reset drag position
    }
  };
  function handleHidden(isHidden) {
    if (isHidden) {
      return {
        top: topValue,
        // transform: `translateY(${Math.min(dragY, 600)}px)`,
      };
    } else return { transform: `translateY(${Math.max(dragY, 0)}px)` };
  }
  // const seen = dragY > 100 ? 'hidden' : 'visible';
  const seen = isHidden ? 'hidden' : 'visible';
  // const topValue = isHidden ? `calc(600px - ${Math.max(dragY, 0)}px)` : '0px';
  const topValue = isHidden ? '600px' : '0px';
  // const transitionStyle = isHidden
  //   ? { top: topValue }
  //   : { transform: `translateY(${Math.max(dragY, 0)}px)` };
  const transitionStyle = handleHidden(isHidden);
  return (
    <div>
      <div
        className={seen}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{ ...transitionStyle }}
      >
        <div className="drag"></div>
        <div className="header">
          <span></span>
        </div>
        <div className="body">
          <CreateWeek data={scheduleData} />
        </div>
      </div>
    </div>
  );
}
