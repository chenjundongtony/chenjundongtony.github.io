//崩溃欺骗
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
//         $('[rel="icon"]').attr('href', "/img/TEP.ico");
         document.title = '有些人看看就走了~';
         clearTimeout(titleTime);
     }
     else {
//         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = '有些人又回来了~' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });