import { useEffect } from "react";
import * as Location from "expo-location";

const useGetLocationPermission = () => {
  useEffect(() => {
    const getLocationPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        // Handle permission denied
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
    };

    getLocationPermissions();
  }, []);

  return null;
};

export default useGetLocationPermission;
