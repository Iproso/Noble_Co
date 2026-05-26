import type { CMSContentBody } from '../blocks';

export interface CMSTemplate {
  id: string;
  nameEn: string;
  nameAr: string;
  contentType: string;
  defaultBody: CMSContentBody;
}

export const PAGE_TEMPLATE: CMSTemplate = {
  id: 'page-default',
  nameEn: 'Default Page',
  nameAr: 'صفحة افتراضية',
  contentType: 'page',
  defaultBody: { blocks: [] },
};

export const LEGAL_TEMPLATE: CMSTemplate = {
  id: 'legal-default',
  nameEn: 'Legal Policy Page',
  nameAr: 'صفحة سياسة قانونية',
  contentType: 'legal_policy',
  defaultBody: { blocks: [] },
};

export const JOURNAL_TEMPLATE: CMSTemplate = {
  id: 'journal-default',
  nameEn: 'Journal Article',
  nameAr: 'مقال في المجلة',
  contentType: 'journal_article',
  defaultBody: { blocks: [] },
};
