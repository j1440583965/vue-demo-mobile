import axios from 'axios'
import Vue from 'vue'
import { Toast } from 'vant'
import api from './api'
Vue.use(Toast)
axios.defaults.timeout = 15 * 1000;
axios.defaults.baseURL = api.baseUrl
const showToast = msg => {
        Toast.loading({
            duration: 0, // 持续展示 toast
            forbidClick: true,
            message: msg,
        });
    }
    /**
     * 
     * @param {*} url api的key值
     * @param {*} method 请求方法 get post
     * @param {*} data 请求参数 get与post写法一致
     * @param {*} headers 请求头 非必填
     * @param {*} msg toast提示信息 非必填 
     */
export default function http({ url, data, msg, method = 'post', headers = "application/x-www-form-urlencoded" }) {
    msg ? showToast(msg) : showToast('请求中,请稍候')
        // application/x-www-form-urlencoded  默认格式
        // application/json;charset=UTF-8  
    return new Promise((resolve, reject) => {

        console.log(data)
        var httpUrl = api[url]
        if (method === 'get') {
            httpUrl += '?'
            for (var key in data) {
                httpUrl += key + '=' + data[key]
            }
        }

        axios({
                headers: { "Content-Type": headers },
                url: httpUrl,
                method,
                data: method === 'get' ? {} : data
            }).then(res => {
                Toast.clear();
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