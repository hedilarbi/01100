import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as Notifications from "expo-notifications";
import useGetCameraPermissions from "./src/hooks/useGetCameraPermissions";
import useGetLocationPermission from "./src/hooks/useGetLocationPermission";
import useGetCookieConsent from "./src/hooks/useGetCookieConsent";
import CookieConsentModal from "./src/components/CookieConsentModal";
import WebViewComponent from "./src/components/WebViewComponent";
import usePushNotifications from "./src/hooks/usePushNotifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [userAcceptCookies, setUserAcceptCookies] = useState(null);
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);

  usePushNotifications(setExpoPushToken, setNotification);
  useGetCookieConsent(setShowModal);
  useGetLocationPermission();
  useGetCameraPermissions();

  const onMessage = (event) => {
    const message = event.nativeEvent.data;
    console.log("message from webview", message);
    if (message === "acceptCookies") {
      AsyncStorage.setItem("userAcceptCookies", "true");
      setUserAcceptCookies(true);
    } else if (message === "denyCookies") {
      AsyncStorage.setItem("userAcceptCookies", "false");
      setUserAcceptCookies(false);
    }

    setShowModal(false);
  };

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="black" />
      <SafeAreaView style={{ flex: 1 }}>
        <WebViewComponent webviewUrl="https://01100.fr" onMessage={onMessage} />
        <CookieConsentModal
          showModal={showModal}
          onAcceptCookies={() =>
            onMessage({ nativeEvent: { data: "acceptCookies" } })
          }
          onDenyCookies={() =>
            onMessage({ nativeEvent: { data: "denyCookies" } })
          }
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
