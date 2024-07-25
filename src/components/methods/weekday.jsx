import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import getTheDate from './date';
export default function CreateWeek({ data }) {
  const week = ['一', '二', '三', '四', '五', '六', '天'];
  const lessons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
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
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [today, setToday] = useState(getTheDate(new Date()));
  //   const handleLessonClick = (lesson) => {
  //     setSelectedLesson(lesson);
  //   };

  const handleLessonClick = (lesson, day) => {
    setSelectedLesson({ lesson, day });
  };

  const adjustDatesub = () => {
    const day = (today.day + 7) % 31;
    let month = today.month;

    if (day >= 23) {
      month--;
      if (month < 1) {
        month = 12; // 或者根据你的业务逻辑处理年份的变化
      }
    }

    const newToday = {
      ...today,
      day: day,
      week: today.week - 1,
      month: month,
    };

    setToday(newToday);
  };
  const adjustDateadd = () => {
    let day = (today.day - 7) % 30;
    let month = today.month;

    if ((today.day + 7) % 31 <= 7) {
      month++;
      if (month > 12) {
        month = 1; // 或者根据你的业务逻辑处理年份的变化
      }
    }
    if (day <= 0) {
      day = day + 31;
    }
    const newToday = {
      ...today,
      day: day,
      week: today.week + 1,
      month: month,
    };

    setToday(newToday);
  };
  const resetWeek = () => {
    setToday(getTheDate(new Date()));
  };

  return (
    <div className="main">
      <span className="changeWeek1" onClick={adjustDatesub}>
        ←
      </span>
      <span className="changeWeek2" onClick={adjustDateadd}>
        →
      </span>
      <span className="weekNum">{weekNumOfChinese[today.week]}周</span>
      <span className="goTheWeek" onClick={resetWeek}>
        回到本周
      </span>
      <div className="week_container">
        <ul className="monthAndnum">
          <li>{today.month}月</li>
          {lessons.map((lesson) => (
            <li key={lesson}>{lesson}</li>
          ))}
        </ul>
        {week.map((item, index) => (
          <ul
            className="weekdays"
            key={today.dayOfMonth - today.day + index - 1}
            style={{
              backgroundColor:
                today.dayOfMonth - today.day + index - 1 === today.dayOfMonth
                  ? 'rgb(244, 246, 251)'
                  : '',
            }}
          >
            <li>
              <div id={index + 1}>周{item}</div>
              <div>
                {today.dayOfMonth - today.day + index - 1 <= 0
                  ? (today.dayOfMonth - today.day + index - 1 + 30) % 31
                  : today.dayOfMonth - today.day + index - 1}
                日
              </div>
            </li>
            {lessons.map((lesson) => {
              let courseData = data.find(
                (i) =>
                  i.id === lesson &&
                  i.month === today.month &&
                  i.day === today.dayOfMonth - today.day + index - 1 &&
                  i.week === today.week
              );
              return (
                <li
                  key={lesson}
                  style={{
                    backgroundColor: courseData ? courseData.color : '',
                  }}
                  onClick={() =>
                    handleLessonClick(
                      lesson,
                      today.dayOfMonth - today.day + index - 1
                    )
                  }
                >
                  {' '}
                  {courseData ? courseData.course : ''}
                  {selectedLesson &&
                    selectedLesson.lesson === lesson &&
                    selectedLesson.day ===
                      today.dayOfMonth - today.day + index - 1 && (
                      <div className="smallbox">
                        <Link to="/add">+</Link>
                      </div>
                    )}
                </li>
              );
            })}
          </ul>
        ))}
      </div>
    </div>
  );
}

CreateWeek.propTypes = {
  data: PropTypes.node.isRequired,
};
