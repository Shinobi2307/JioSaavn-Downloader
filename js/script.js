source=document.getElementById("srcid");var getUrlParameter=function(t){var e,a,r=window.location.search.substring(1).split("&");for(a=0;a<r.length;a++)if((e=r[a].split("="))[0]===t)return void 0===e[1]||decodeURIComponent(e[1])},surl=getUrlParameter("url");if(null==surl)document.getElementById("status").innerHTML="<h5>Welcome to Shinobi Presents<br>JioSaavn Downloader</h5><a href='/?url=https://www.jiosaavn.com/song/meri-aashiqui/RV4pdS5obh4'><img src='https://c.saavncdn.com/952/Meri-Aashiqui-Hindi-2020-20200602234001-500x500.jpg' width='250px' height='250px'>",document.getElementById("input").innerHTML="<input type='text' id='srcid' name='url' placeholder='Enter Song Name or JioSaavn Link' value='' autocomplete='off' required><input type='submit' value='Search'>";else if(surl.startsWith("http://www.jiosaavn.com/song/")||surl.startsWith("https://www.jiosaavn.com/song/")||surl.startsWith("http://jiosaavn.com/song/")||surl.startsWith("https://jiosaavn.com/song/")||surl.startsWith("http://saavn.com/song/")||surl.startsWith("https://saavn.com/song/")||surl.startsWith("http://www.saavn.com/song/")||surl.startsWith("https://www.saavn.com/song/")){(xmlhttp=new XMLHttpRequest).onreadystatechange=function(){if(4==this.readyState&&200==this.status){var t=JSON.parse(this.responseText),e=t.url;if(null==e)document.getElementById("status").innerHTML="<h5>Please Enter JioSaavn Song Link</h5>",document.getElementById("input").innerHTML="<input type='text' id='srcid' name='url' placeholder='Enter Song Name or JioSaavn Link' value='' autocomplete='off' required><input type='submit' value='Search'>",null!=surl?(document.title="Failed - jiosaavn1.netlify.app",document.getElementById("download").innerHTML="Unable to Download from this Link",document.getElementById("input").innerHTML="<input type='text' id='srcid' name='url' placeholder='Enter Song Name or JioSaavn Link' value='' autocomplete='off' required><input type='submit' value='Search'>"):(document.getElementById("status").innerHTML="<h5>Welcome to Shinobi Presents<br>JioSaavn Downloader</h5><a href='/?url=https://www.jiosaavn.com/song/meri-aashiqui/RV4pdS5obh4'><img src='https://c.saavncdn.com/952/Meri-Aashiqui-Hindi-2020-20200602234001-500x500.jpg' width='250px' height='250px'>",document.getElementById("input").innerHTML="<input type='text' id='srcid' name='url' placeholder='Enter Song Name or JioSaavn Link' value='' autocomplete='off' required><input type='submit' value='Search'>");else if(!0===e.endsWith(".mp3")){var a=e.replace("http://h.saavncdn.com","/mp3"),r=e.replace("http://h.saavncdn.com","/mp3").replace("_320",""),n=e.replace("http://h.saavncdn.com","/mp4").replace(".mp3",".mp4");document.title=t.title+" - jiosaavn1.netlify.app",document.getElementById("input").innerHTML="<input type='text' id='srcid' name='url' placeholder='Enter Song Name or JioSaavn Link' value='"+t.title+" By "+t.singers+"' autocomplete='off' required><input type='submit' value='Search'>",document.getElementById("download").innerHTML="<table class='table table-striped'> <thead> <tr> <th scope='col'>Name</th> <td>"+t.title+"</td> </tr> </thead> <tbody> <tr> <th scope='row'>Singer</th> <td>"+t.singers+"</td> </tr> <tr> <th scope='row'>Album</th> <td><a href='/album/?url="+t.album_url+"'>"+t.album+"</a></td> </tr> <tr> <th scope='row'>Language</th> <td>"+t.language+"</td> </tr> <tr> <th scope='row'>Label</th> <td>"+t.label+"</td> </tr> </tbody> </table><a href='"+t.url+"' class='button7' style='background-color:#2979FF'>Download MP3 320kbps</a>",document.getElementById("status").innerHTML="<img src='"+t.image_url+"' width='250px' height='250px'><br><br><center><audio controls style='width: 100%; max-width:600px;'> <source src='"+a+"' type='audio/mp3'> <source src='"+r+"' type='audio/mpeg'> <source src='"+n+"' type='audio/mp4'> Your browser does not support the audio element. </audio></center>"}}else 4==this.readyState&&200!==this.status?(document.title="Server Offline - jiosaavn1.netlify.app",document.getElementById("status").innerHTML="<button type='button' class='btn btn-danger' disabled>Web Server Offline</button>"):(document.title="Processing - jiosaavn1.netlify.app",document.getElementById("status").innerHTML="<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='margin:auto;display:block;' width='150px' height='150px' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'> <g transform='translate(50,50)'><circle cx='0' cy='0' r='8.333333333333334' fill='none' stroke='#e15b64' stroke-width='3.9000000000000004' stroke-dasharray='26.179938779914945 26.179938779914945' transform='rotate(-217.309)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;-360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='0' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='16.666666666666668' fill='none' stroke='#f47e60' stroke-width='3.9000000000000004' stroke-dasharray='52.35987755982989 52.35987755982989' transform='rotate(302.078)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-0.273972602739726' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='25' fill='none' stroke='#f8b26a' stroke-width='3.9000000000000004' stroke-dasharray='78.53981633974483 78.53981633974483' transform='rotate(-359.247)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;-360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-0.547945205479452' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='33.333333333333336' fill='none' stroke='#abbd81' stroke-width='3.9000000000000004' stroke-dasharray='104.71975511965978 104.71975511965978' transform='rotate(45.1985)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-0.821917808219178' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='41.666666666666664' fill='none' stroke='#849b87' stroke-width='3.9000000000000004' stroke-dasharray='130.89969389957471 130.89969389957471' transform='rotate(-127.769)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;-360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-1.095890410958904' repeatCount='indefinite'></animateTransform> </circle></g> </svg>")},xmlhttp.open("GET","/api/?query="+surl,!0),xmlhttp.send()}else if(surl.startsWith("http://www.jiosaavn.com/album/")||surl.startsWith("https://www.jiosaavn.com/album/")||surl.startsWith("http://jiosaavn.com/album/")||surl.startsWith("https://jiosaavn.com/album/")||surl.startsWith("http://saavn.com/album/")||surl.startsWith("https://saavn.com/album/")||surl.startsWith("http://www.saavn.com/album/")||surl.startsWith("https://www.saavn.com/album/"))location.href="/album/?url="+surl;else{var obj,xmlhttp,myObj,x,txt="",fsurl=surl.replace(/\+/g," ");obj={table:"customers",limit:20},dbParam=JSON.stringify(obj),(xmlhttp=new XMLHttpRequest).onreadystatechange=function(){if(4==this.readyState&&200==this.status){for(x in myObj=JSON.parse(this.responseText),txt+="<table class='table table-striped table-bordered'><caption style='caption-side:top;word-break:break-all;'>Results for : "+fsurl+"</caption><thead><tr><th scope='col'>Name</th><th scope='col'>Album</th></tr></thead><tbody>",myObj)txt+="<tr><td><a href='/?url="+myObj[x].perma_url+"'>"+myObj[x].title+" By "+myObj[x].singers+"</a></td><td><a href='/?url="+myObj[x].album_url+"'>"+myObj[x].album+"</td></tr>";txt+="</tbody></table>",document.title="Albums - jiosaavn1.netlify.app",document.getElementById("input").innerHTML="<input type='text' id='srcid' name='url' placeholder='Enter Song Name or JioSaavn Link' value='"+fsurl+"' autocomplete='off' required><input type='submit' value='Search'>",document.getElementById("download").innerHTML=txt,document.getElementById("status").innerHTML=""}else 4==this.readyState&&200!==this.status?(document.title="Server Offline - jiosaavn1.netlify.app",document.getElementById("status").innerHTML="<button type='button' class='btn btn-danger' disabled>Web Server Offline</button>"):(document.title="Processing - jiosaavn1.netlify.app",document.getElementById("status").innerHTML="<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='margin:auto;display:block;' width='150px' height='150px' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'> <g transform='translate(50,50)'><circle cx='0' cy='0' r='8.333333333333334' fill='none' stroke='#e15b64' stroke-width='3.9000000000000004' stroke-dasharray='26.179938779914945 26.179938779914945' transform='rotate(-217.309)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;-360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='0' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='16.666666666666668' fill='none' stroke='#f47e60' stroke-width='3.9000000000000004' stroke-dasharray='52.35987755982989 52.35987755982989' transform='rotate(302.078)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-0.273972602739726' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='25' fill='none' stroke='#f8b26a' stroke-width='3.9000000000000004' stroke-dasharray='78.53981633974483 78.53981633974483' transform='rotate(-359.247)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;-360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-0.547945205479452' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='33.333333333333336' fill='none' stroke='#abbd81' stroke-width='3.9000000000000004' stroke-dasharray='104.71975511965978 104.71975511965978' transform='rotate(45.1985)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-0.821917808219178' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='41.666666666666664' fill='none' stroke='#849b87' stroke-width='3.9000000000000004' stroke-dasharray='130.89969389957471 130.89969389957471' transform='rotate(-127.769)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;-360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-1.095890410958904' repeatCount='indefinite'></animateTransform> </circle></g> </svg>")},xmlhttp.open("GET","/api/?query="+surl,!0),xmlhttp.send()}function switchfunc(){var t=document.getElementById("footer");"block"===t.style.display?t.style.display="none":t.style.display="block"}
