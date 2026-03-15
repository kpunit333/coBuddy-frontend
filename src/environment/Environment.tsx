const protocol = 'http';
const url = `localhost`;
const port = 8000;
const version = 'v1';


const environment = {
    baseURL: `${protocol}://${url}:${port}/${version}/api`
    // baseURL: `https://jsonplaceholder.typicode.com`
}

export default environment;