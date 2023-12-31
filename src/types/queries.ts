export interface PageInfo {
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  pageCount: number;
}

export interface EdgeInfo<T> {
  node: T;
}

export interface AllQueryResponse<T> {
  edges: EdgeInfo<T>[];
  pageInfo: PageInfo;
  totalCount: number;
}
