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
    salt: '加密盐',
    test: '/xiaochengxu',
    login: '/xiaochengxu/login',
    upload: '/upload'
}