export type EditorMode = 'visual' | 'html' | 'preview';
export type ContentStatus = 'draft' | 'review' | 'published';

export interface EditorState {
  mode: EditorMode;
  contentId: string | null;
  status: ContentStatus;
  locale: string;
  version: number;
}

export { CMSBlockEditor } from './CMSBlockEditor';

export const DEFAULT_EDITOR_STATE: EditorState = {
  mode: 'visual',
  contentId: null,
  status: 'draft',
  locale: 'en',
  version: 1,
};
