import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://ws-rayfan2024-7c90fe3029b2.herokuapp.com/presensi";
get(urlAPI,isiTablePresensi);
function isiTablePresensi(results){
    console.log(results);
}