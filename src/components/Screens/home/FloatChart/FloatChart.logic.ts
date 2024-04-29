import { useEffect, useState } from "react";
import { useStore } from "../../../../utils/store/store";
import { Animated, Keyboard } from "react-native";

export const useLogic = () => {
  const totalPrice = useStore((state: any) => state.CartPrice);
  const animateValue = useState(new Animated.Value(200))[0];

  const hiddenBar = () => {
    Animated.timing(animateValue, {
      toValue: 200,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const showBar = () => {
    Animated.timing(animateValue, {
      toValue: -70,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  // Show/Hide Component in Keyboard Actions
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => {
        hiddenBar()
    });
    Keyboard.addListener("keyboardDidHide", () => {
        if(totalPrice != 0.0) showBar();
    });
  });

  useEffect(() => {
    totalPrice != 0.0 ? showBar() : hiddenBar();
  }, [totalPrice]);

  return {
    data: {
      animateValue,
      totalPrice,
    },
  };
};
