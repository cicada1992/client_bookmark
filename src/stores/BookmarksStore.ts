import { Bookmark } from '@src/types';
import { makeObservable, observable, action, computed } from 'mobx';

export default class BookmarksStore {
  public bookmarks = [] as Bookmark[];

  constructor() {
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

  private static instance: BookmarksStore;

  public static instantiate(): BookmarksStore {
    if (!this.instance) {
      this.instance = new BookmarksStore();
    }
    return this.instance;
  }
}
