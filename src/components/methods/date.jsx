export default function getTheDate(date) {
  const startDate = new Date(date.getFullYear(), 1, 26); // 1表示2月，因为月份从0开始计数

  const timeDifference = date - startDate;
  const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  const weekNumber = Math.floor(dayDifference / 7) + 1; // 第几周
  const dayOfWeek = (dayDifference % 7) + 1; // 周几 (1表示周一，2表示周二，...，7表示周日)

  const month = date.getMonth() + 1; // 月份 (1表示1月，2表示2月，...，12表示12月)
  const dayOfMonth = date.getDate(); // 几号

  return {
    week: weekNumber,
    day: dayOfWeek,
    month: month,
    dayOfMonth: dayOfMonth,
  };
}
