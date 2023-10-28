import React, { useRef, useEffect } from "react";
import { WebView } from "react-native-webview";

const WebViewComponent = ({ webviewUrl, onMessage }) => {
  let webViewRef = useRef(null);
  const cookieScript = `
  document.cookie = "myCookie=cookieValue";
  var cookieValue = document.cookie;
  window.ReactNativeWebView.postMessage(cookieValue);
 `;
  useEffect(() => {
    if (webViewRef && webViewRef.current) {
      webViewRef.current.injectJavaScript(cookieScript);
    }
  }, [cookieScript]);

  return (
    <WebView
      source={{ uri: webviewUrl }}
      ref={webViewRef}
      javaScriptEnabled={true}
      onMessage={onMessage}
      injectedJavaScript={cookieScript}
    />
  );
};

export default WebViewComponent;
