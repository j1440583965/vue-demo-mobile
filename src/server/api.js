var baseUrl;

if (process.env.NODE_ENV === 'development') {
    baseUrl = 'http://localhost:3000'
} else if (process.env.NODE_ENV === 'devtest') {
    baseUrl = ''
} else {
    baseUrl = ''
}
export default {
    baseUrl: baseUrl,
    test: '/xiaochengxu',
    login: '/xiaochengxu/login'
}