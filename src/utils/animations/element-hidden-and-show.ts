import { useState } from "react";
import { Animated } from "react-native";

type PropsResponse = {
  show: () => void;
  hidden: () => void;
  value: any;
};

export function HideAndShowElement(inital: number): PropsResponse {
  const value = useState(new Animated.Value(inital))[0];

  const handleShow = () => {
    Animated.timing(value, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const handleHidden = () => {
    Animated.timing(value, {
      toValue: 200,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return {
    hidden: () => {
      handleHidden();
    },
    show: () => {
      handleShow();
    },
    value,
  };
}
