export interface CategoryTable {
  columnOptions?: CategoryTableColOptions[];
  headerTitle: string;
  dataList?: any;
  configReady?: boolean;
}

export interface CategoryTableColOptions {
  headerSubtitle: string;
  sizeOption?: string;
  customClass: string;
  headerOptions?: CategoryTableHeaderOptions;
  getValue?: (data: any, event?: Event) => any;
}

export interface CategoryTableHeaderOptions {
  title: string;
}
