export interface ApiResponse<T> {
  isSuccess: boolean;
  value?: T;
  errorCode?: string;
  errorMessage?: string;
}

export interface PagedRequest {
  pageIndex?: number;
  pageSize?: number;
  searchTerm?: string;
  sortBy?: string;
  isDescending?: boolean;
}

export interface PagedList<T> {
  items: T[];
  pageIndex: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}