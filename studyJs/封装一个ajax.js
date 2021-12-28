const ajax=(path,method,data,success,fail)=>{
    const request=new XMLHttpRequest()
    request.open(method,path)
    request.send(data)
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200&&request.status<=300){
                success.call(undefined,JSON.parse(request.responseText))
            }else if(request.status>=400){
                fail.call(undefined,request)
            }
        }
    }
}
function newAxios(url,token){
    var dou=document.getElementsByClassName('')
    const apiClient = axios.create({
    baseURL: url,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
        Authorization: token,
    },
    });
    return apiClient
}
