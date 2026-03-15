
const RefreshHandler = async () => {
    // const refreshToken = localStorage.getItem("refreshToken");
    //   const res = await axios.post("http://localhost:8080/auth/refresh", { refreshToken });
    const res = {
        data: {
            accessToken: "new access token"
        }
    }
    const newAccessToken = res.data.accessToken;
    localStorage.setItem("accessToken", newAccessToken);
}

export default RefreshHandler;

