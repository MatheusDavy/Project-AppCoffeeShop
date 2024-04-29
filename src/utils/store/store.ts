import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CoffeeData from "../data/CoffeeData";
import BeansData from "../data/BeansData";
import { produce } from "immer";

export const useStore = create(
  persist(
    (_set, _get) => ({
      CoffeeList: CoffeeData,
      BeansList: BeansData,
      CartPrice: 0,
      FavoriteList: [],
      CartList: [],
      OrderHistoryList: [],
      addToCart: (product: any, indexPrice: number) => {
        _set(
          produce((state) => {
            const existingItemIndex = state.CartList.findIndex(
              (item: any) => item.id === product.id
            );
            if (existingItemIndex !== -1) {
              const {quantity} = state.CartList[existingItemIndex].prices[indexPrice]
              if (quantity){
                state.CartList[existingItemIndex].prices[indexPrice].quantity += 1;
              }else {
                state.CartList[existingItemIndex].prices[indexPrice].quantity = 1;
              }
            } else {
              const newProduct = JSON.parse(JSON.stringify(product));
              newProduct.prices[indexPrice].quantity = 1;
              console.log(newProduct.prices[indexPrice])
              state.CartList.push(newProduct);
            }

            // Calculate Price Final
            state.CartPrice = state.calculatorCartPrice(state.CartList);
          })
        );
      },
      clearCartList: () => {
        _set(
          produce((state) => {
            state.CartList = [];
          })
        );
      },
      calculatorCartPrice: (cartList: any) => {
        let total = 0;
        _set(
          produce((state) => {
            cartList.forEach((data: any) => {
              for (let i = 0; i < data.prices.length; i++) {
                if (data.prices[i].quantity) {
                  total += data.prices[i].price * data.prices[i].quantity;
                }
              }
            });
          })
        );
        const formattedDollar = total.toLocaleString("en-US");
        return formattedDollar;
      },
      addOrRemoveToFavotiteList: (id: string | number) => {
        _set(
          produce((state) => {
            const list = state.FavoriteList;
            if (!list.includes(id)) {
              list.push(id);
            } else {
              const index = list.indexOf(id);
              list.splice(index, 1);
            }
            state.FavoriteList = list;
          })
        );
      },
      incrementAmount: (idItem: number | string, priceIndex: number) => {
        _set(
          produce((state) => {
            const itemIndex = state.CartList.findIndex(
              (item: any) => item.id === idItem
            );
            state.CartList[itemIndex].prices[priceIndex].quantity += 1;

            // Calculate Price Final
            state.CartPrice = state.calculatorCartPrice(state.CartList);
          })
        );
      },
      decrementAmount: (idItem: number | string, priceIndex: number) => {
        _set(
          produce((state) => {
            const itemIndex = state.CartList.findIndex(
              (item: any) => item.id === idItem
            );
            if (state.CartList[itemIndex].prices[priceIndex].quantity == 1) {
              // Remove propertie {quantity: } when quantity === 0
              const { quantity, ...rest } =
                state.CartList[itemIndex].prices[priceIndex];
              state.CartList[itemIndex].prices[priceIndex] = rest;
            } else {
              state.CartList[itemIndex].prices[priceIndex].quantity -= 1;
            }

            // Calculate Price Final
            state.CartPrice = state.calculatorCartPrice(state.CartList);
          })
        );
      },
    }),
    {
      name: "coffe-application-v0.21",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
