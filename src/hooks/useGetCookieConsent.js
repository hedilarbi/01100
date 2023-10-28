import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useGetCookieConsent = (setShowModal) => {
  useEffect(() => {
    AsyncStorage.getItem("userAcceptCookies").then((value) => {
      if (!value) {
        setShowModal(true);
      }
    });
  }, []);
};

export default useGetCookieConsent;
