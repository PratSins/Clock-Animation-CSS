var hr = document.querySelector('#hrs');
var mn = document.querySelector('#min');
var sc = document.querySelector('#sec');
    
setInterval(() => {
    var day = new Date(); 
    var hh = day.getHours() * 30;
    var mm = day.getMinutes() * 6;
    var ss = day.getSeconds() * 6;
    
    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
    
    // Digital Clock
    var hour = document.getElementById("hour");
    var min = document.getElementById("minutes");
    var sec = document.getElementById("seconds");
    var a = document.getElementById("ampm");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    if(h>12){
        h-=12;
    }

    a = h>=12 ? 'PM':'AM';

    h = (h<10)?"0"+h:h;
    m = (m<10)?"0"+m:m;
    s = (s<10)?"0"+s:s;

    hour.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
    a.innerHTML = a;
});