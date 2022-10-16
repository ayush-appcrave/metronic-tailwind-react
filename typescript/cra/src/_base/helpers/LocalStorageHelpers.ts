const getData = (key: string): unknown | undefined => {
  try {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("read from local storage", error);
  }
};

const setData = (key: string, value: unknown) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("save in local storage", error);
  }
};

export { getData, setData };
