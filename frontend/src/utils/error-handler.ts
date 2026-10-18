import { AxiosError } from 'axios';
import type { ApiResponse } from '@/types/api';

export const getErrorMessage = (error: unknown): string => {
  if (error instanceof AxiosError) {
    const apiError = error.response?.data as ApiResponse<null>;
    if (apiError?.errorMessage) {
      return apiError.errorMessage;
    }
    if (error.response?.status === 403) {
      return 'Bạn không có quyền thực hiện thao tác này.';
    }
    if (error.response?.status === 404) {
      return 'Không tìm thấy dữ liệu yêu cầu.';
    }
  }
  if (error instanceof Error) {
    return error.message;
  }
  return 'Đã xảy ra lỗi không xác định. Vui lòng thử lại sau.';
};