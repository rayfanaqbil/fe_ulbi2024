//Mendapatkan parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const presensiId = urlParams.get("presensiId");

export let urlFetch = "https://ws-rayfan2024-7c90fe3029b2.herokuapp.com/presensi/" + presensiId;