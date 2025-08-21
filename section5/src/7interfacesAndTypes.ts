export {};

type DoubleArray<T, R> = {
  array1: Array<T>;
  array2: Array<R>;
};

type Programmer = {};
type Manager = {};

const employees: DoubleArray<Programmer, Manager> = {
  array1: [],
  array2: [],
};

interface IMemoryDatabase<T> {
  addItem(item: T): void;
  getItemByIndex(index: number): T | undefined;
  listItems(): void;
}

class MemoryDataBase<T> implements IMemoryDatabase<T> {
  private items: T[] = [];
  addItem(item: T): void {
    this.items.push(item);
  }
  getItemByIndex(index: number): T | undefined {
    return this.items[index];
  }
  listItems(): T[] | undefined {
    return this.items;
  }
}
