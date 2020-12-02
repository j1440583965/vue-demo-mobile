import http from './http'
/**
 * 
 * @param {Object} obj 对象，将对象转换成formData 省去每次文件上传手动创建FormData实例的麻烦 返回 对象，将对象转换成formData
 */
function parseData(obj) {
    const formData = new FormData()

    for (var key in obj) {
        formData.append(key, obj[key])
    }
    return formData
}

export function test(data) {
    return http({ url: "test", method: "get", data })
}
export function login(data) {
    return http({ url: "login", data })
}
export function upload(data) {
    data = parseData(data)
    return http({ url: "upload", data })
}