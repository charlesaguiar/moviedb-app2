import {
  format as dateFnsFormat,
  intervalToDuration,
  minutesToMilliseconds,
} from "date-fns";

export const tryFormatDate = (date: string, format: string, fallback = "-") => {
  if (!date) return fallback;

  try {
    const dateObj = new Date(date);
    return dateFnsFormat(dateObj, format);
  } catch {
    return fallback;
  }
};

export const convertMinutesToHoursMinutes = (minutes: number) => {
  const milliseconds = minutesToMilliseconds(minutes);
  const duration = intervalToDuration({ start: 0, end: milliseconds });
  return `${duration.hours || 0}h ${duration.minutes}m`;
};
