import { PublicCategoryDTO } from '@/dto';
import { CategoryCard } from '@/components/ui';

interface CategoryGridProps {
  locale: string;
  categories: PublicCategoryDTO[];
}

export function CategoryGrid({ locale, categories }: CategoryGridProps) {
  if (categories.length === 0) return null;

  return (
    <section className="container-noble py-16">
      <div className="card-grid">
        {categories.map((cat) => (
          <CategoryCard
            key={cat.id}
            locale={locale}
            slug={cat.slug}
            title={cat.nameEn}
            titleAr={cat.nameAr ?? cat.nameEn}
            description={cat.summaryEn ?? ''}
            descriptionAr={cat.summaryAr ?? ''}
            count={cat.artifactCount}
          />
        ))}
      </div>
    </section>
  );
}
