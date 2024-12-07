import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

const WebViewWrapper = () => {
  return (
    <View style={{ flex: 1 }}>
    <ExpoStatusBar style='dark' />
    <View style={{flex:1, paddingTop: 40}}>
      <WebView
        source={{ uri: 'https://logic-gate-simulator-31edb.web.app/' }}
        style={{ flex: 1 }}
      />
    </View>
    </View>
  );
}

export default WebViewWrapper;
