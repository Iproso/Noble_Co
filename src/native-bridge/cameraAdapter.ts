export interface CameraAdapter {
  takePhoto(): Promise<File | null>;
  pickFromGallery(): Promise<File | null>;
}

export const cameraAdapter: CameraAdapter = {
  async takePhoto() {
    return new Promise((resolve) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.capture = 'environment';
      input.onchange = () => {
        const file = input.files?.[0] ?? null;
        resolve(file);
      };
      input.click();
    });
  },
  async pickFromGallery() {
    return new Promise((resolve) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = () => {
        const file = input.files?.[0] ?? null;
        resolve(file);
      };
      input.click();
    });
  },
};
