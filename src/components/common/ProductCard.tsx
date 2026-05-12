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
import { cn } from "../../utils/cn";

type ProductCardProps = {
  product: ProductService;
  language: Language;
  className?: string;
};

const productCardCopy = homepageCopy.products;

export function ProductCard({ product, language, className }: ProductCardProps) {
  const deliverables = getList(product.deliverables, language);

  return (
    <Card 
      accent={product.accent} 
      className={cn("group flex h-full flex-col justify-between gap-6 p-6 sm:p-8", className)} 
      interactive
      data-cursor="build"
    >
      <div>
        <Badge variant="category" className="mb-2">{getText(uiCopy.secondaryOffering, language)}</Badge>
        
        <h3 className="mt-5 font-heading text-2xl font-black leading-tight sm:text-3xl">
          {getText(product.title, language)}
        </h3>
        
        <p className="mt-4 text-base font-medium leading-relaxed text-[var(--muted-foreground)]">
          {getText(product.description, language)}
        </p>
        
        <div className="mt-6 border-t-[3px] border-dashed border-[var(--border)] pt-6">
          <FeatureList items={deliverables} maxItems={4} variant="check" />
        </div>
      </div>
      
      <Link 
        className={cn(buttonVariants("secondary", "md", "w-full sm:w-fit"), "mt-4 transition-transform duration-300 active:scale-95")} 
        to={product.route}
      >
        <span className="font-bold">{getText(productCardCopy.detailCta, language)}</span>
        <ArrowUpRight size={18} strokeWidth={3} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Link>
    </Card>
  );
}
