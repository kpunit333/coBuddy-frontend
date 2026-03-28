
const RefreshHandler = async () => {
    // const refreshToken = localStorage.getItem("refreshToken");
    //   const res = await axios.post("http://localhost:8080/auth/refresh", { refreshToken });
    const res = {
        tokens: {
            accessToken: "new_access_token"
        }
    }
    localStorage.setItem("tokens", JSON.stringify(res.tokens));
}

export default RefreshHandler;

