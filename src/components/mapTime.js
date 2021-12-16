import App from './App'

export const mapTime = (timestamp) => {

  
  const newsApiDate = (api-creation-date-prop);
  const timestamp = new Date(newsApiDate).getTime();
  console.log(timestamp); // 1639484238000
  const Day = new Date(timestamp).getDate();
  const Month = new Date(timestamp).getMonth() + 1;
  const Year = new Date(timestamp).getFullYear();
  const OurNewDateFormat = `${Day}/${Month}/${Year}`;


    const seconds = Math.floor((new Date() - timestamp * 1000) / 1000);
  
    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return ${interval} years;
    }
    interval = Math.floor(seconds / 2592000);
  
    if (interval > 1) {
      return ${interval} months;
    }
    interval = Math.floor(seconds / 86400);
  
    if (interval > 1) {
      return ${interval} days;
    }
    interval = Math.floor(seconds / 3600);
  
    if (interval > 1) {
      return ${interval} hours;
    }
    interval = Math.floor(seconds / 60);
  
    if (interval > 1) {
      return ${interval} minutes;
    }
  
    return ${Math.floor(seconds)} seconds;
  };