import { Bookmark } from '@src/types';
import { makeObservable, observable, action, computed } from 'mobx';
import RootStore from '.';

export default class BookmarksStore {
  public root: RootStore;
  public bookmarks = [] as Bookmark[];

  constructor(root: RootStore) {
    this.root = root;

    makeObservable(this, {
      bookmarks: observable,
      allBookmarks: computed,
      addBookmark: action
    });
  }

  public get allBookmarks() {
    return this.bookmarks;
  }

  public addBookmark(bookmark: Bookmark) {
    this.bookmarks.push(bookmark);
  }
}
