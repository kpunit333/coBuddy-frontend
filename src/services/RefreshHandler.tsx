import StorageService from './StorageService';

const RefreshHandler = async () => {
    // const refreshToken = StorageService.getLocal("refreshToken");
    // const res = await axios.post("http://localhost:8080/auth/refresh", { refreshToken });
    const res = {
        tokens: {
            accessToken: "new_access_token"
        }
    }
    StorageService.set("tokens", res.tokens);
};

export default RefreshHandler;




