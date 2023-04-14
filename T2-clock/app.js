
const secHand=document.getElementById('sec');
const minHand=document.getElementById('min');
const hourHand=document.getElementById('hour');

function clock()
{

        const now=new Date();
        const sec=now.getSeconds();
        console.log(sec);
        let secDegrees=((sec/60)*360)+270;
        secHand.style.transform=`rotate(${secDegrees}deg)`;

        const min=now.getMinutes();
        let minDegrees=((min/60)*360)+270;
        minHand.style.transform=`rotate(${minDegrees}deg)`;

        const hour=now.getHours();
        let hourDegrees=((hour/12)*360)+270;
        hourHand.style.transform=`rotate(${hourDegrees}deg)`;


  
}



setInterval(clock, 1000);

clock();