export interface FileUploadedDto {
  fileName: string;
  fileUrl: string;
  thumbnailUrl?: string;
  contentType: string;
  sizeInBytes: number;
}