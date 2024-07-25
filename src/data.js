// mock.js
import axios from 'axios';
import { mock } from 'mockjs';
axios.defaults.baseURL = 'http://localhost:3000';
import Mock from 'mockjs';

// // 生成一个数组的日期数据
// const generateDate = () => {
//   const month = Mock.Random.integer(1, 12);
//   const day = Mock.Random.integer(1, 31); // 假设每个月最多有31天
//   return `${month}月${day}日`;
// };

// // 生成课程数据
// const generateCourse = () => {
//   const courses = ['数学', '英语', '物理', '化学', '生物', '历史', '地理'];
//   return Mock.Random.pick(courses);
// };

// const generateId = () => {
//   const oddIds = [1, 3, 5, 7, 9, 11];
//   return Mock.Random.shuffle(oddIds).slice(0, 1)[0];
// };

const generateData = () => {
  const week = Mock.Random.integer(20, 25);
  const month = Mock.Random.integer(6, 7);
  const day = Mock.Random.integer(20, 30);
  const date = `${month}月${day}日`;

  const courses = ['数学', '英语', '物理', '化学', '生物', '历史', '地理'];
  const course = Mock.Random.pick(courses);

  const oddIds = [1, 3, 5, 7, 9, 11];
  const id = Mock.Random.shuffle(oddIds).slice(0, 1)[0];
  let color = 'pink';
  if (id < 4) {
    color = 'rgb(249, 232, 215)';
  } else if (id < 8) {
    color = 'rgb(249, 227, 229)';
  } else {
    color = 'rgb(221, 227, 249)';
  }

  return { week, id, month, day, date, course, color };
};
mock('http://localhost:3000/api/schedule', {
  code: 0,
  'data|7-8': [
    generateData,

    //   id: generateId(), // 生成1到12之间的单数
    //   date: generateDate(), // 生成日期
    //   course: generateCourse(), // 生成课程
  ],
  msg: '成功',
});
async function getlist() {
  try {
    let res = await axios.get('/api/schedule');
    console.log(res.data);
  } catch (e) {
    console.log('报错', e);
  }
}
getlist();
