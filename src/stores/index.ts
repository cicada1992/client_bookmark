import BookmarksStore from './BookmarksStore';
import DirectoriesStore from './DirectoriesStore';

export default class RootStore {
  public directories: DirectoriesStore;
  public bookmarks: BookmarksStore;

  constructor() {
    this.directories = new DirectoriesStore(this);
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
