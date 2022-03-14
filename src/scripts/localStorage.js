const initialState = require('@/constants/initialState.json');

const LOCAL_STORAGE_KEY = 'rt_app_data';

export function getAllData() {
    const rawData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (rawData) {
        return JSON.parse(rawData);
    } else {
        return initialState;
    }
}

export function setAllData(data) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}

export function deleteAllData() {
    console.warn("deleting all app data");
    localStorage.setItem(LOCAL_STORAGE_KEY, "");
}