import { FILTER_NAMES } from "./constants";
import { Todo } from "../models/Todo";

const KEY_STORAGE_TODOLIST = 'todoList';

const KEY_STORAGE_FILTER = 'filterValue';

class MemoryTodoList {

  keyName: string;
  defaultValue: [] | string;

  constructor(keyName: string, defaultValue: [] | string) {
    this.keyName = keyName;
    this.defaultValue = defaultValue;
  }

  getStorageValue() {
    try {
      const storedValue = localStorage.getItem(this.keyName);
      const parsedValue = JSON.parse(storedValue || "");
      return parsedValue || this.defaultValue;
    } catch {
      return this.defaultValue;
    }
  }

  setStorageValue(value: Todo[] | string) {
    const stringValue = JSON.stringify(value);
    localStorage.setItem(this.keyName, stringValue);
  }
};

export const todoListStored = new MemoryTodoList(KEY_STORAGE_TODOLIST, []);

export const filterStored = new MemoryTodoList(KEY_STORAGE_FILTER, FILTER_NAMES.all);



