import { Directory } from '@src/types';
import { makeObservable, observable, action, computed } from 'mobx';
import RootStore from '.';

export default class DirectoriesStore {
  public root: RootStore;
  public directories = [] as Directory[];

  constructor(root: RootStore) {
    this.root = root;

    makeObservable(this, {
      directories: observable,
      allDirectories: computed,
      addDirectory: action
    });
  }

  public get allDirectories() {
    return this.directories;
  }

  public addDirectory(directory: Directory) {
    this.directories.push(directory);
  }
}
