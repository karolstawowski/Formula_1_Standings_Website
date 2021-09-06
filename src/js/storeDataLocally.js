const LOCALSTORAGE_KEY = "f1";

const saveJSONToStorage = (key, json) => {
  let data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (data) {
    data[key] = {
      data: json,
      updateDate: new Date().toISOString(),
    };
  } else {
    data = {
      [key]: {
        data: json,
        updateDate: new Date().toISOString(),
      },
    };
  }
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
};

const parseStorageData = (key) => {
  const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  return data ? data[key] : null;
};

const updateDataInStorage = async (key, APIKey) => {
  const nazwa = await fetch(
    "https://ergast.com/api/f1/" + APIKey + ".json"
  ).then((resp) => resp.json());
  saveJSONToStorage(key, nazwa);
  return nazwa;
};

export const getDataFromStorage = async (queryId, APIKey) => {
  const localStorageData = parseStorageData(queryId);
  if (localStorageData) {
    const lastUpdateDay = new Date(localStorageData.updateDate).getDate();
    const lastUpdateMonth =
      new Date(localStorageData.updateDate).getMonth() + 1;
    const todayDay = new Date().getDate();
    const todayMonth = new Date().getMonth() + 1;
    return lastUpdateDay != todayDay && lastUpdateMonth != todayMonth
      ? updateDataInStorage(queryId, APIKey)
      : localStorageData.data;
  } else {
    return updateDataInStorage(queryId, APIKey);
  }
};
