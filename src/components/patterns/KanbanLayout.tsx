'use client';

import { ReactNode } from 'react';

interface KanbanColumn {
  id: string;
  title: string;
  count: number;
}

interface KanbanLayoutProps {
  locale: string;
  columns: KanbanColumn[];
  children: (columnId: string) => ReactNode;
}

export function KanbanLayout({
  locale,
  columns,
  children,
}: KanbanLayoutProps) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 h-full">
      {columns.map((column) => (
        <div
          key={column.id}
          className="flex-1 min-w-72 bg-soft-parchment rounded-xl p-4"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-deep-ink">{column.title}</h3>
            <span className="text-xs text-text-muted bg-warm-white px-2 py-0.5 rounded-full">
              {column.count}
            </span>
          </div>
          <div className="space-y-3">{children(column.id)}</div>
        </div>
      ))}
    </div>
  );
}
