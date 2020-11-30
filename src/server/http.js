import axios from 'axios'
import Vue from 'vue'
import { Toast } from 'vant'
import api from './api'
Vue.use(Toast)
axios.defaults.timeout = 15 * 1000;
// axios.defaults.baseURL = api.baseUrl
const showToast = msg => {
        Toast.loading({
            duration: 0, // 持续展示 toast
            forbidClick: true,
            message: msg,
        });
    }
    /**
     * @param {string} url api的key值 当多域名时直接传于完整链接
     * @param {object} data 请求参数 get与post写法一致
     * @param {string} msg toast提示信息 非必填  传入false时不显示
     * @param {string} method 请求方法 get post 默认post非必填
     * @param {string} headers 请求头 非必填
     */
export default function http({ url, data, msg = '请求中,请稍候', method = 'post', headers = "application/x-www-form-urlencoded" }) {
    if (msg !== false) {
        showToast(msg)
    }
    // application/x-www-form-urlencoded  默认格式
    // application/json;charset=UTF-8  
    return new Promise((resolve, reject) => {
        var httpUrl
            // 接口多域名处理
        if (!url.includes('http')) {
            httpUrl = api.baseUrl + api[url]
        } else {
            httpUrl = api[url]
        }
        if (method === 'get') {
            httpUrl += '?'
            for (var key in data) {
                httpUrl += key + '=' + data[key]
            }
        }
        axios({
                headers: { "Content-Type": headers, 'authorization': sessionStorage.getItem('token') },
                url: httpUrl,
                method,
                data
            }).then(res => {
                Toast.clear();
                // 根据实际后端返回去判断
                if (res.data.code === 0) {
                    resolve(res.data.data)
                } else {
                    Toast.fail(res.data.msg || '请求错误！');
                    reject(res.data.msg || '请求错误！')
                }
            })
            .catch(err => {
                Toast.clear();
                if (typeof err === 'string') {
                    Toast.fail(err);
                    reject(err)
                } else {
                    Toast.fail(JSON.stringify(err));
                    reject(JSON.stringify(err))
                }
            })
    })
}