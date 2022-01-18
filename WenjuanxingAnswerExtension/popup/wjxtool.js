// Source: https://image.wjx.cn/joinnew/js/jqmobo2.js?v=1973:formatted L2836
function dataenc(a,ktimes) {
    var c, d, e, b = ktimes % 10;
    for (0 == b && (b = 1),
    c = [],
    d = 0; d < a.length; d++)
        e = a.charCodeAt(d) ^ b,
        c.push(String.fromCharCode(e));
    return c.join("")
}
document.get_kjx_jdata=function(shortid,ktimes,name){
    document.shortid=shortid
    document.ktimes=ktimes
    $.get("https://ks.wjx.top/vm/"+shortid+".aspx", function(data){
        document.rndnum=data.match(/var rndnum="([0-9]+.[0-9]+)"/)[1]
        document.activityId=data.match(/var activityId =([0-9]+)/)[1]
        document.jqnonce=data.match(/var jqnonce="(.+)"/)[1]
        document.jqsign=dataenc(document.jqnonce,ktimes)
        document.jcn=dataenc(name,ktimes)
        document.jqpram=document.get_jqParam(666)
        document.t=(new Date).valueOf()
    });
}
document.get_kjx_jdata("eFfw6Kh","25","米奇妙妙屋")

document.send_data=function(){
    var url="https://ks.wjx.top/joinnew/processjq.ashx?shortid="+document.shortid
    url+="&starttime="+document.starttime
    url+="&source=directphone"
    url+="&submittype=1"
    url+="&ktimes="+document.ktimes
    url+="&hlv=1"
    url+="&rn="+encodeURIComponent(document.rndnum)
    url+="&jqpram="+encodeURIComponent(document.jqpram)
    url+="&jcn="+encodeURIComponent(document.jcn)
    url+="&t="+encodeURIComponent((new Date).valueOf())
    url+="&jqnonce="+encodeURIComponent(document.jqnonce)
    url+="&jqsign="+encodeURIComponent(document.jqsign)
    console.log(url)
    $.ajax({
        url:url,
        type:"POST",
        header:{
            "Referer":"https://ks.wjx.top/vm/"+document.shortid+".aspx",
            "Origin":"https://ks.wjx.top"
        },
        data:{submitdata: '1$30}2$米奇妙妙屋}3$1}4$3}5$2}6$2}7$1}8$1}9$4}10$2}11$5}12…14$2}15$3}16$4}17$2}18$4}19$1}20$3}21$2}22$4}23$3'},
        dateType:"text",
        success:function(b){
            console.log(b)
        }
    })
}