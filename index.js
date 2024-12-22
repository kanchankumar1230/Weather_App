const apiKey="20da423906ccf27bec8c2d81c8f4a2eb";
const kk1=document.querySelector(".img");
const kk2=document.querySelectorAll(".text-area");
const kk3=document.querySelector(".ent");
const kk4=document.querySelector(".btn");
const kk5=document.querySelector(".last");
const kk6=document.querySelector(".first");
const kk7=document.querySelector(".second");
const kk8=document.querySelector(".third");
const kk20=document.querySelector(".temp");
const kk21=document.querySelector(".temp1");
const iconImg=document.querySelector(".sun");

kk4.addEventListener("click",function(){
    // e.preventDefault();
    // console.log(kk3.value)
    const city=kk3.value
    getweatherdata(city)
})
async function getweatherdata(city)
{
    try
  {
     const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

     if(!response.ok){
        throw new Error("networking is not working")
     }

     const data= await response.json();
     console.log(data);
     const temperature=Math.floor(data.main.temp);
     const  descriptions=(data.weather[0]. description);
     const icons = (data.weather[0].icon);

     
    //  const hum=data.main.humidity;
    //  const feel=Math.floor(data.main.feels_like);
    //  const winds=Math.floor(data.wind.speed);

     
     
    kk6.textContent = `Feels Like: ${Math.floor(data.main.feels_like)}°C`,
    kk7.textContent = `Humidity: ${data.main.humidity}%`,
    kk8.textContent = `Wind Speed: ${data.wind.speed} m/s`
    




kk20.textContent = `${temperature}°C`
kk21.textContent = `${descriptions}`

iconImg.innerHTML = `<img src="https://openweathermap.org/img/wn/${icons}.png" alt="">`

}
catch(err)
{
    kk20.textContent="";
    kk21.textContent="not occured";
    iconImg.innerHTML=""


}
}

