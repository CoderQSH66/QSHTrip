import * as dayjs from "dayjs";


export function formatMonthDay(date) {
  return dayjs(date).format("MM月DD日")
}

export function formatMonthDayadd(date, num){
  return dayjs(date).add(num, 'day').format("MM月DD日")
}

export function formatDiff(date1, date2) {
  return dayjs(date2).diff(dayjs(date1), 'day')
}
