import http from './http'

export function test(data) {
    return http({ url: "test", method: "get", data })
}
export function login(data) {
    return http({ url: "login", data })
}