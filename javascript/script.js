{
const scrollingHeader = document.querySelector('.scrolling-header');
let lastScrollY = window.scrollY;

function updateHeaderPosition() {
    const scrollY = window.scrollY;

    if (scrollY > lastScrollY) {
        scrollingHeader.style.top = '-100px';
    } else {
        scrollingHeader.style.top = '0';
    }

    lastScrollY = scrollY;
}

window.addEventListener('scroll', updateHeaderPosition);
    }
{
    function MM_swapImgRestore() { //v3.0
      var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
    }
    function MM_preloadImages() { //v3.0
      var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
        var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
        if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
    }
    
    function MM_findObj(n, d) { //v4.01
      var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
        d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
      if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
      for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
      if(!x && d.getElementById) x=d.getElementById(n); return x;
    }
    
    function MM_swapImage() { //v3.0
      var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
       if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
    }
    }
{
const slider = document.querySelector('.slider');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
let isDragging = false;

slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    slider.classList.add('active');
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    slider.classList.remove('active');
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    
    const offsetX = e.clientX - image1.getBoundingClientRect().left;
    const percent = (offsetX / image1.clientWidth) * 100;

    slider.style.left = `${percent}%`;
    image1.style.width = `${percent}%`;
    image2.style.width = `${100 - percent}%`;
});

// สลับรูปภาพเมื่อคลิกที่ลูกศรทางซ้าย
document.querySelector('.left').addEventListener('click', () => {
    image1.style.width = '100%';
    image2.style.width = '0%';
});

// สลับรูปภาพเมื่อคลิกที่ลูกศรทางขวา
document.querySelector('.right').addEventListener('click', () => {
    image1.style.width = '0%';
    image2.style.width = '100%';
});
}