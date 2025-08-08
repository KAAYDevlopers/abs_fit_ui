import axios, { InternalAxiosRequestConfig, Method } from "axios";
import moment from "moment-timezone";

interface TokenData {
  accessToken: string;
  expiresAt: string;
}

interface TokenResponse {
  data: string;
}

const api = axios.create({
  baseURL: process.env.REACT_APP_PRODUCT_SERVICE_BASE_URL,
});

api.interceptors.request.use(
  async (
    config: InternalAxiosRequestConfig
  ): Promise<InternalAxiosRequestConfig> => {
    const storedToken: TokenData | null = JSON.parse(
      localStorage.getItem("accessToken") || "null"
    );
    const isValidToken =
      storedToken &&
      storedToken.expiresAt &&
      moment(storedToken.expiresAt, "DD-MM-YYYY HH:mm:ss").isAfter(moment());

    if (isValidToken && config.headers) {
      config.headers.Authorization = `Bearer ${storedToken.accessToken}`;
    } else {
      try {
        const response = await getToken();
        const newToken = response.data;
        const expiresAt = moment()
          .add(1, "hours")
          .format("DD-MM-YYYY HH:mm:ss");
        localStorage.setItem(
          "accessToken",
          JSON.stringify({ accessToken: newToken, expiresAt })
        );
        if (config.headers) {
          config.headers.Authorization = `Bearer ${newToken}`;
        }
      } catch (error) {
        throw error;
      }
    }
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

const getToken = async (): Promise<TokenResponse> => {
  const response = await axios
    .post(
      process.env.REACT_APP_AUTH_SERVICE_BASE_URL + "generateToken",
      {
        appID: "c856fcbb-8933-4e0b-85d1-80eb0586cd83",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      if (error.response) {
        // client received an error response (5xx, 4xx)
        if (error.response.data) {
          let reason = error.response.data.reason
            ? error.response.data.reason
            : error.response.data;
          throw new Error("Error while getting Token : " + reason);
        } else {
          throw new Error("Error while getting Token : " + error.message);
        }
      }
      throw error;
    });
  return response;
};

const makeApiCall = async (
  method: Method,
  url: string,
  data: any = null,
  auth: string = ""
): Promise<any> => {
  try {
    console.log(process.env.REACT_APP_PRODUCT_SERVICE_BASE_URL);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth}`,
    };
    const response = await api.request({
      method,
      url,
      data,
      headers,
    });
    return response.data;
  } catch (error: any) {
    throw error.response;
  }
};

export default makeApiCall;
