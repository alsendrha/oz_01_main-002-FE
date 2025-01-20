import { ProductListType } from "@/type/ProductType";
import Link from "next/link";
import ProductItem from "../product/ProductItem";

type ProductItemProps = {
  data: {
    data: {
      id: number;
      product_id: number;
      product_name: string;
      product_grade: string;
      product_bid_price: number;
      category: string;
      start_time: string;
      end_time: string;
      charge: number;
      final_price: number;
      status: boolean;
      is_active: string;
      product_images: string[];
    }[];
  };
};

const ItemList = ({ data }: ProductItemProps) => {
  return (
    <>
      {data &&
        data?.data
          .filter((item: ProductListType) => item.is_active !== "결제대기")
          .filter((item: ProductListType) => item.is_active !== "경매종료")
          .slice(0, 2)
          .map((item: ProductListType) => (
            <Link
              key={item.id}
              href={{
                pathname: `/productList/detail`,
                query: {
                  id: item.id,
                  productId: item.product_id,
                },
              }}
            >
              <ProductItem item={item} />
            </Link>
          ))}
    </>
  );
};

export default ItemList;
