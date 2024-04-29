import { useStore } from "../../../../utils/store/store";
import { CartProductCardProps } from "./Card.types";

export const useLogic = ({ product }: CartProductCardProps) => {
  const incrementAmount = useStore((state: any) => state.incrementAmount );
  const decrementAmount = useStore((state: any) => state.decrementAmount );
  const refactorPrices = product.prices
    .map((item: any, index: number) => {
      if (item.quantity) {
        return { ...item, index };
      }
    })
    .filter((item: any) => item !== undefined);


  const incrementItem = (idItem: string | number, priceIndex: number) => incrementAmount(idItem, priceIndex)
  const decrementItem = (idItem: string | number, priceIndex: number) => decrementAmount(idItem, priceIndex)

  return {
    data: {
      refactorPrices,
    },
    methods: {
        incrementItem,
        decrementItem
    }
  };
};
