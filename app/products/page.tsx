export const dynamic = "force-dynamic";

import ProductsContainer from "@/components/products/ProductsContainer";

type SearchParamsType = {
  layout?: string;
  search?: string;
};

async function ProductsPage({
  searchParams
}: {
  searchParams: Promise<SearchParamsType>;
}) {
  const { layout = "grid", search = "" } = await searchParams;
  console.log(searchParams);

  return <ProductsContainer layout={layout} search={search} />;
}
export default ProductsPage;
