export const converSecondsToTime = (seconds: number) => {
  const timeString = new Date(seconds * 1000).toISOString().substring(11, 19);

  const splitedTime = timeString.split(":");

  const [hours, minutes, splitedSeconds] = splitedTime;

  return `${hours}h ${minutes}m ${splitedSeconds}s`;
};
