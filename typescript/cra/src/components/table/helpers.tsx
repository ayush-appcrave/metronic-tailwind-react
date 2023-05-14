const formatDate = (date?: string) => {
  if (date) {
    const localDateTime = new Date(date);
    return `${localDateTime.getUTCDate()}/${localDateTime.getUTCMonth()}/${localDateTime.getFullYear()} at ${localDateTime.getHours()}:${localDateTime.getMinutes()}`;
  } else {
    return 'date is not set';
  }
};

export { formatDate };
