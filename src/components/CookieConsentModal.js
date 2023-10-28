import React from "react";
import { Modal, View, Text, TouchableOpacity, Dimensions } from "react-native";

const CookieConsentModal = ({ showModal, onAcceptCookies, onDenyCookies }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={showModal}>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <View
          style={{
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            height: Dimensions.get("window").height * 0.3,
            backgroundColor: "white",
            padding: 16,
          }}
        >
          <Text>
            Nous utilisons des cookies pour vous garantir la meilleure
            expérience sur notre site. En poursuivant votre navigation, vous
            acceptez notre utilisation des cookies. Pour en savoir plus,
            veuillez consulter notre Politique de confidentialité.
          </Text>
          <TouchableOpacity
            onPress={onAcceptCookies}
            style={{
              backgroundColor: "#223557",
              marginTop: 26,
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 12,
            }}
          >
            <Text style={{ color: "white" }}>Accepter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onDenyCookies}
            style={{
              backgroundColor: "white",
              borderWidth: 1,
              borderColor: "#223557",
              marginTop: 16,
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 12,
            }}
          >
            <Text>Refuser</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CookieConsentModal;
