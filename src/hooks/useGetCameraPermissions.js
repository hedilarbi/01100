import { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";

const useGetCameraPermissions = () => {
  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await ImagePicker.getCameraPermissionsAsync();
      if (status !== "granted") {
        await ImagePicker.requestCameraPermissionsAsync();
        return;
      }
    };

    getCameraPermissions();
  }, []);

  return null;
};

export default useGetCameraPermissions;
