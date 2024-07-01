'use strict';

const currentTimeUTC = document.querySelector('.currentTimeUTC');
const currentDay = document.querySelector('.currentDay');

const UTCtimeFunc = () => {
  const now = new Date();
  const UTChour = now.getUTCHours();
  const UTCmins = now.getUTCMinutes();
  let UTCsecs = now.getUTCSeconds();

  currentTimeUTC.innerHTML = `${UTChour < 10 ? '0' + UTChour : UTChour} : ${
    UTCmins < 10 ? '0' + UTCmins : UTCmins
  } : ${UTCsecs < 10 ? '0' + UTCsecs : UTCsecs}`;

  today();
};

const today = () => {
  const now = new Date();

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
  ];

  const currentDayName = daysOfWeek[now.getDay()];

  currentDay.innerHTML = `${currentDayName}`;
};

setInterval(UTCtimeFunc, 1000);
