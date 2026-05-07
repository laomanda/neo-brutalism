import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { homepageCopy } from "../../data/homepageCopy.data";
import { uiCopy } from "../../data/uiCopy.data";
import type { Language } from "../../types/common.types";
import type { ProductService } from "../../types/product.types";
import { getList } from "../../utils/getList";
import { getText } from "../../utils/getText";
import { Badge } from "../ui/Badge";
import { buttonVariants } from "../ui/buttonVariants";
import { Card } from "../ui/Card";
import { FeatureList } from "./FeatureList";

type ProductCardProps = {
  product: ProductService;
  language: Language;
};

const productCardCopy = homepageCopy.products;

export function ProductCard({ product, language }: ProductCardProps) {
  const deliverables = getList(product.deliverables, language);

  return (
    <Card accent={product.accent} className="flex h-full flex-col justify-between gap-5 p-5" interactive>
      <div>
        <Badge variant="category">{getText(uiCopy.secondaryOffering, language)}</Badge>
        <h3 className="mt-4 text-2xl font-extrabold">{getText(product.title, language)}</h3>
        <p className="mt-4 text-sm font-semibold leading-6 text-[var(--foreground)]/80">
          {getText(product.description, language)}
        </p>
        <FeatureList items={deliverables} maxItems={4} variant="check" className="mt-5" />
      </div>
      <Link className={buttonVariants("secondary", "sm", "w-fit")} to={product.route}>
        {getText(productCardCopy.detailCta, language)}
        <ArrowUpRight size={17} strokeWidth={3} />
      </Link>
    </Card>
  );
}
