export interface FileUploadAdapter {
  upload(url: string, file: File, fieldName?: string): Promise<{ url: string }>;
}

export const fileUploadAdapter: FileUploadAdapter = {
  async upload(url: string, file: File, fieldName = 'file') {
    const formData = new FormData();
    formData.append(fieldName, file);
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) throw new Error('Upload failed');
    return response.json() as Promise<{ url: string }>;
  },
};
