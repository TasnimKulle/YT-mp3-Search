document
  .querySelector("#search-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    // console.log("search form.....")
    const query = document.querySelector("#search-input").value;
    // console.log("query is" ,query)
    const url = `https://youtube-v3-alternative.p.rapidapi.com/search?query=${query}&type=video`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "c52554a1d6mshca06cffbbef74a0p172932jsn29ccd0d52c71",
        "x-rapidapi-host": "youtube-v3-alternative.p.rapidapi.com",
      },
    };

    try {
      const reponse = await fetch(url, options);
      const result = await reponse.json();
    //   console.log(result);
      displayVideo(result.data);
    } catch (error) {
      console.error("error fetching result searching.....");
    }
  });
function displayVideo(videos) {
  const videoList = document.querySelector(".video-list");
  videoList.innerHTML = "";
  videos.forEach(video => {
    const videoItem = document.createElement("div");
    videoItem.className = "video-item";
    videoItem.innerHTML = `
        <div class="video-thambnail" style="background-image:url('${video.thumbnail[0].url}'); width: 320px; height: 300px;"></div>
        <div class="video-info">
            <div class="video-title">${video.title}</div>
            <div class="video-channel">${video.channelTitle}</div>
        </div>
        `;
        videoItem.addEventListener("click",()=> openModel(video.videoId))
    videoList.appendChild(videoItem);
  });
}

function openModel(videoId){
    const model=document.querySelector("#video-model");
    const videoPlayer= document.querySelector("#video-player")
    const videoUrl=`https://www.youtube.com/embed/${videoId}`;
    videoPlayer.src=videoUrl;
    model.style.display = "block"


    document .querySelector("#download-mp3").addEventListener("click", async function(){
        const url=`https://youtube-mp3-download1.p.rapidapi.com/dl?id=${videoId}`
        const options={
            method: "GET",
            headers: {
              'x-rapidapi-key': 'c52554a1d6mshca06cffbbef74a0p172932jsn29ccd0d52c71',
		'x-rapidapi-host': 'youtube-mp3-download1.p.rapidapi.com'
            },
        }
       try{
        const reponse = await fetch(url,options);
        const result = await reponse.json();
        console.log(result)
        if(result.status === "ok"){
            window.location.href = result.link
        }else{
            alert("downloading fellied")
        }
       }catch(error){
        console.error("error",error)
       }
    })
}
document.querySelector("#close-model").addEventListener("click",closeModel);
function closeModel(){
    const model=document.querySelector("#video-model")
    const videoPlayer=document.querySelector("#video-player")
    videoPlayer.src="";
    model.style.display="none"
}
window.onclick=function(event){
    const model=document.querySelector("#video-model") 
    if(event.target==model){
   closeModel()
 }
}