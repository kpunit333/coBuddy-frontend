import axios from 'axios';
import StorageService from './StorageService';

const RefreshHandler = async () => {
    const refreshToken = StorageService.get("tokens")?.refreshToken;
    const response = await axios.post("http://localhost:8000/api/v1/auth/refresh", { refreshToken })
    const res = response.data.data;
    
    StorageService.set("tokens", res.tokens);
};

export default RefreshHandler;




