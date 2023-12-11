import axios from "axios";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useTokenControl = () => {
    const [status, setStatus] = useState(false);

    useEffect(() => {
        const getToken = async () => {
            try {
                const token = await AsyncStorage.getItem("token");
                if (token) {
                    let url = `https://safari-gps.live/func/fn_fleet.php?api=true&cmd=react_app_check_session&token=${token}`;

                    const response = await axios({
                        url: url,
                        method: "GET",
                    });

                    let status = response.data.status;

                    if(status === 1){
                        await AsyncStorage.setItem("isLogged", true.toString());
                        setStatus(true);
                        return true;
                    }
                    return false;
                }
                return false;
            } catch (error) {
                console.error(error);
                return false;
            }
        }

        getToken();
    }, []);

    return status;
};

export default useTokenControl;