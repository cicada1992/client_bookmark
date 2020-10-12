export interface Directory {
  id: string;
  label: string;
  bookmarks: Bookmark[];
}

export interface Bookmark {
  id: string;
  title: string;
  link: string;
  directoryName: string;
}
