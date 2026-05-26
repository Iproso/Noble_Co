'use client';

import { useState, useCallback } from 'react';
import type { NobleCMSBlock, CMSContentBody } from '../blocks';

interface CMSBlockEditorProps {
  locale: string;
  initialBody?: CMSContentBody;
  onChange?: (body: CMSContentBody) => void;
}

type BlockType = NobleCMSBlock['type'];

const BLOCK_TYPES: { type: BlockType; labelEn: string; labelAr: string }[] = [
  { type: 'heading', labelEn: 'Heading', labelAr: 'عنوان' },
  { type: 'paragraph', labelEn: 'Paragraph', labelAr: 'فقرة' },
  { type: 'image', labelEn: 'Image', labelAr: 'صورة' },
  { type: 'cta', labelEn: 'CTA Button', labelAr: 'زر إجراء' },
  { type: 'card_grid', labelEn: 'Card Grid', labelAr: 'شبكة بطاقات' },
];

function createEmptyBlock(type: BlockType): NobleCMSBlock {
  switch (type) {
    case 'heading': return { type, props: { level: 2, textEn: '', textAr: '' } };
    case 'paragraph': return { type, props: { textEn: '', textAr: '' } };
    case 'image': return { type, props: { src: '', altEn: '', altAr: '' } };
    case 'cta': return { type, props: { labelEn: '', labelAr: '', href: '', variant: 'primary' } };
    case 'card_grid': return { type, props: { cards: [] } };
  }
}

function BlockEditor({ block, locale, onChange }: { block: NobleCMSBlock; locale: string; onChange: (b: NobleCMSBlock) => void }) {
  const isRtl = locale === 'ar';

  const setProp = (key: string, value: unknown) => {
    onChange({ ...block, props: { ...block.props, [key]: value } } as NobleCMSBlock);
  };

  switch (block.type) {
    case 'heading':
      return (
        <div className="space-y-2 p-3 bg-bg-card rounded-lg border border-border-light card-metallic">
          <select value={(block.props.level as number) || 2} onChange={(e) => setProp('level', parseInt(e.target.value))} className="w-full text-sm border rounded p-1">
            <option value={1}>H1</option><option value={2}>H2</option><option value={3}>H3</option><option value={4}>H4</option>
          </select>
          <input value={(block.props.textEn as string) || ''} onChange={(e) => setProp('textEn', e.target.value)} placeholder="English text" className="w-full text-sm border rounded p-2" />
          <input value={(block.props.textAr as string) || ''} onChange={(e) => setProp('textAr', e.target.value)} placeholder="النص العربي" className="w-full text-sm border rounded p-2" dir="rtl" />
        </div>
      );
    case 'paragraph':
      return (
        <div className="space-y-2 p-3 bg-bg-card rounded-lg border border-border-light card-metallic">
          <textarea value={(block.props.textEn as string) || ''} onChange={(e) => setProp('textEn', e.target.value)} placeholder="English text" className="w-full text-sm border rounded p-2 h-20" />
          <textarea value={(block.props.textAr as string) || ''} onChange={(e) => setProp('textAr', e.target.value)} placeholder="النص العربي" className="w-full text-sm border rounded p-2 h-20" dir="rtl" />
        </div>
      );
    case 'image':
      return (
        <div className="space-y-2 p-3 bg-bg-card rounded-lg border border-border-light card-metallic">
          <input value={(block.props.src as string) || ''} onChange={(e) => setProp('src', e.target.value)} placeholder="Image URL" className="w-full text-sm border rounded p-2" />
          <input value={(block.props.altEn as string) || ''} onChange={(e) => setProp('altEn', e.target.value)} placeholder="Alt text (English)" className="w-full text-sm border rounded p-2" />
          <input value={(block.props.altAr as string) || ''} onChange={(e) => setProp('altAr', e.target.value)} placeholder="النص البديل (عربي)" className="w-full text-sm border rounded p-2" dir="rtl" />
        </div>
      );
    case 'cta':
      return (
        <div className="space-y-2 p-3 bg-bg-card rounded-lg border border-border-light card-metallic">
          <input value={(block.props.labelEn as string) || ''} onChange={(e) => setProp('labelEn', e.target.value)} placeholder="Button label (English)" className="w-full text-sm border rounded p-2" />
          <input value={(block.props.labelAr as string) || ''} onChange={(e) => setProp('labelAr', e.target.value)} placeholder="نص الزر (عربي)" className="w-full text-sm border rounded p-2" dir="rtl" />
          <input value={(block.props.href as string) || ''} onChange={(e) => setProp('href', e.target.value)} placeholder="Link URL" className="w-full text-sm border rounded p-2" />
        </div>
      );
    case 'card_grid':
      return (
        <div className="space-y-2 p-3 bg-bg-card rounded-lg border border-border-light card-metallic">
          <p className="text-xs text-text-muted">{isRtl ? 'يتم تحرير البطاقات في واجهة منفصلة' : 'Cards edited in separate interface'}</p>
        </div>
      );
    default:
      return null;
  }
}

export function CMSBlockEditor({ locale, initialBody, onChange }: CMSBlockEditorProps) {
  const isRtl = locale === 'ar';
  const [blocks, setBlocks] = useState<NobleCMSBlock[]>(initialBody?.blocks || []);

  const handleChange = useCallback((index: number, block: NobleCMSBlock) => {
    const next = [...blocks];
    next[index] = block;
    setBlocks(next);
    onChange?.({ blocks: next });
  }, [blocks, onChange]);

  const addBlock = (type: BlockType) => {
    const next = [...blocks, createEmptyBlock(type)];
    setBlocks(next);
    onChange?.({ blocks: next });
  };

  const removeBlock = (index: number) => {
    const next = blocks.filter((_, i) => i !== index);
    setBlocks(next);
    onChange?.({ blocks: next });
  };

  const moveBlock = (index: number, direction: -1 | 1) => {
    const target = index + direction;
    if (target < 0 || target >= blocks.length) return;
    const next = [...blocks];
    [next[index], next[target]] = [next[target], next[index]];
    setBlocks(next);
    onChange?.({ blocks: next });
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {BLOCK_TYPES.map((bt) => (
          <button
            key={bt.type}
            onClick={() => addBlock(bt.type)}
            className="px-3 py-1.5 text-xs bg-charcoal text-warm-white rounded-lg hover:bg-surface-hover transition-colors"
          >
            + {isRtl ? bt.labelAr : bt.labelEn}
          </button>
        ))}
      </div>
      {blocks.length === 0 && (
        <p className="text-sm text-text-muted text-center py-8">
          {isRtl ? 'انقر فوق زر نوع المحتوى لإضافة كتلة' : 'Click a block type button above to add content'}
        </p>
      )}
      {blocks.map((block, index) => (
        <div key={index} className="relative group">
          <div className="absolute -top-2 -right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <button onClick={() => moveBlock(index, -1)} disabled={index === 0} className="p-1 bg-bg-card border rounded text-xs hover:bg-soft-parchment disabled:opacity-30">↑</button>
            <button onClick={() => moveBlock(index, 1)} disabled={index === blocks.length - 1} className="p-1 bg-bg-card border rounded text-xs hover:bg-soft-parchment disabled:opacity-30">↓</button>
            <button onClick={() => removeBlock(index)} className="p-1 bg-error/10 border border-error/30 rounded text-xs text-error hover:bg-error/20">✕</button>
          </div>
          <BlockEditor block={block} locale={locale} onChange={(b) => handleChange(index, b)} />
        </div>
      ))}
    </div>
  );
}
