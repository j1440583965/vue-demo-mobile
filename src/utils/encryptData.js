//编码
export function encodeStorage(name, data) {
    window.sessionStorage.setItem(
        name,
        window.btoa(
            window.encodeURIComponent(JSON.stringify(data))
        )
    );
}
/*解码
 */
export function decodeStorage(name) {
    return JSON.parse(
        decodeURIComponent(window.atob(sessionStorage.getItem(name)))
    )
}