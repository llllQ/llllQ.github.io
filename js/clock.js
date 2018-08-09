const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    function setDate(){
      const now = new Date();
      const seconds = now.getSeconds();
      const secondsDegree = ((seconds / 60) * 360) + 90;
      const minutes = now.getMinutes();
      const minuteDegree = ((minutes / 60) *360) + 90;
      const hours = now.getHours();
      const hourDegree = ((hours / 12) *360) + 90;
      console.log(minuteDegree);
      secondHand.style.transform = `rotate(${secondsDegree}deg)`;
      minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
      hourHand.style.transform = `rotate(${hourDegree}deg)`;

    }
    setInterval(setDate, 1000);