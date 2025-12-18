import {
  addMinutes,
  formatDistanceToNow,
  formatDistanceToNowStrict,
  parseISO,
  isAfter,
} from "date-fns";

function formatPostTime(isoString) {
  const initialDate = parseISO(isoString);

  const currentTime = new Date();

  if ((isAfter(initialDate), addMinutes(currentTime, 1))) {
    console.log("Less than 1 min");
    return formatDistanceToNow(initialDate);
  }
  return formatDistanceToNowStrict(initialDate);
}
export default formatPostTime;
