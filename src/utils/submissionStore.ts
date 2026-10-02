import { TaskSubmission } from '../types';

const STORAGE_KEY = 'osjur_d3ti_submissions';

export const getStoredSubmissions = (): Record<string, TaskSubmission> => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.error('Failed to read submissions from localStorage', e);
    return {};
  }
};

export const saveStoredSubmission = (submission: TaskSubmission): void => {
  try {
    const current = getStoredSubmissions();
    current[submission.taskId] = submission;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  } catch (e) {
    console.error('Failed to save submission to localStorage', e);
  }
};

export const removeStoredSubmission = (taskId: string): void => {
  try {
    const current = getStoredSubmissions();
    delete current[taskId];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  } catch (e) {
    console.error('Failed to remove submission', e);
  }
};
