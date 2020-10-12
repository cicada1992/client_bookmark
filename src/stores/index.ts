import BookmarksStore from './BookmarksStore';

export default class RootStore {
  public bookmarks: BookmarksStore;

  constructor() {
    this.bookmarks = new BookmarksStore(this);
  }

  private static instance: RootStore;

  public static getOrMakeInstance(): RootStore {
    if (!this.instance) {
      this.instance = new RootStore();
    }
    return this.instance;
  }
}
