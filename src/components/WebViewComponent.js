import React, { useRef } from "react";
import { WebView } from "react-native-webview";

const WebViewComponent = ({ webviewUrl }) => {
  const webViewRef = useRef(null);

  const cookieScript = `
    console.log('Attempting to retrieve cookie');
    window.ReactNativeWebView.postMessage(document.cookie);
  `;

  const handleMessage = (event) => {
    const data = event.nativeEvent.data;
    console.log("Received message:", data);
  };

  const handleLoad = () => {
    if (webViewRef.current) {
      webViewRef.current.injectJavaScript(cookieScript);
    }
  };

  return (
    <WebView
      ref={webViewRef}
      source={{ uri: webviewUrl }}
      javaScriptEnabled={true}
      onMessage={handleMessage}
      onLoad={handleLoad}
    />
  );
};

export default WebViewComponent;
