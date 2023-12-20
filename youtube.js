import "./youtube.css"
const Videos=[
    {
    id: 1,

    title: "Front End Developer Roadmap",
  
    thumbnailUrl: "https://www.freecodecamp.org/news/content/images/size/w300/2023/10/frontendroadmap.png",
  
    likes: 1200,
  
    views: 18000,
  
    channelName: "Free Code Camp.Org",
  
    channelLogoUrl: "https://i1.feedspot.com/4744076.jpg",
  
   },
   {
    id: 2,

    title: "JAVA SIMPLIFIED",
  
    thumbnailUrl: "https://learnyst-user-assets.s3.ap-south-1.amazonaws.com/school-assets/schools/11771/courses/174846/1700638222875Hyder%20Course.png",
  
    likes: 1200,
  
    views: 18000,
  
    channelName: "TELUSUKO LEARNINGS ",
  
    channelLogoUrl: "https://i1.feedspot.com/4812415.jpg?t=1623159697",
  
   },
   {
    id: 3,

    title: "Advance Django and React",
  
    thumbnailUrl: "https://i.ytimg.com/vi/NtRa7i5Meb4/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA4-Xz4WEzoEIrGIX10-gclk011dA",
  
    likes: 1200,
  
    views: 18000,
  
    channelName: "THE NEW BOSTON",
  
    channelLogoUrl: "https://i1.feedspot.com/4481738.jpg",
  
   },
   {
    id: 4,

    title: " HTML & CSS CRASH COURSE",
  
    thumbnailUrl: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/1uCgossTRXqBImbdOwxo",
  
    likes: 1200,
  
    views: 18000,
  
    channelName: "THE NET NINJA",
  
    channelLogoUrl: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
  
   },
   {
    id: 5,

    title: "React18 For Begginers",
  
    thumbnailUrl: "https://codewithmosh.com/_next/image?url=https%3A%2F%2Fcdn.filestackcontent.com%2FbLy3JtIoQ8y8PDs4tFem&w=384&q=75",
  
    likes: 1300,
  
    views: 18500,
  
    channelName: "Programming with Mosh",
  
    channelLogoUrl: "https://i1.feedspot.com/4902663.jpg",
  
   },
   {
    id: 6,

    title: "Machine Learning Tutorial For Begginers",
  
    thumbnailUrl: "https://images.codebasics.io/filters:format(webp)/fit-in/480x480/images/1.1.419/courses/thumbnails/machine-learning-for-beginners.webp",
  
    likes: 1400,
  
    views: 19000,
  
    channelName: "CODE BASICS",
  
    channelLogoUrl: "https://i1.feedspot.com/5619761.jpg?t=1688710457",
  
   },
   {
    id: 7,

    title: "React Native Tutorial For Beginers",
  
    thumbnailUrl: "https://i.ytimg.com/vi/hzzCveeczSQ/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAJvBZnJXKzShtv8M-pUcJgXJnjKQ",
  
    likes: 1450,
  
    views: 19400,
  
    channelName: "Codevolution",
  
    channelLogoUrl: "https://i1.feedspot.com/5619744.jpg?t=1688709528",
  
   },
   {
    id: 8,

    title: "How To Build a Successful App",
  
    thumbnailUrl: "https://i.ytimg.com/vi/DeFY5F3pWPs/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAlDQx_urwWng_wEsu_CcqJpycwxg",
  
    likes: 1500,
  
    views: 20000,
  
    channelName: "Web Dev Simplified",
  
    channelLogoUrl: "https://i1.feedspot.com/5183407.jpg",
  
   },
   {
    id: 9,

    title: "Learn the MERN Stack",
  
    thumbnailUrl: "https://i.ytimg.com/vi/-0exw-9YJBo/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA4sC-6rSmJE7uEWanKanDK_An0qA",
  
    likes: 200,
  
    views: 8000,
  
    channelName: "Traversy Media",
  
    channelLogoUrl: "https://i1.feedspot.com/4744088.jpg",
  
   },
   {
    id:10 ,

    title: "MongoDB Tutorial for Begginers",
  
    thumbnailUrl: "https://i.ytimg.com/vi/6DoLxeMlVTI/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDbRWHqSPNo7MoaKl-px9YXPT6uYQ",
  
    likes: 1000,
  
    views: 18000,
  
    channelName: "Bro Code",
  
    channelLogoUrl: "https://i1.feedspot.com/5619690.jpg?t=1688708674",
  
   },
   {
    id:11 ,

    title: "Mini Python Project!!",
  
    thumbnailUrl: "https://i.ytimg.com/vi/XCIBOl3FTKo/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBmn-NPm8g2qJc8wNpr-Xs_nToyiQ",
  
    likes: 1500,
  
    views: 21000,
  
    channelName: "Tech With Tim",
  
    channelLogoUrl: "https://i1.feedspot.com/5407384.jpg?t=1686910408",
  
   },
   {
    id:12 ,

    title: "ChatGPT",
  
    thumbnailUrl: "https://i.ytimg.com/vi/8X_GXJtV4o0/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDXENcKa1hU_pkPN9Epy6Wq10KsXA",
  
    likes: 1550,
  
    views: 16000,
  
    channelName: "Eli the Computer Guy",
  
    channelLogoUrl: "https://i1.feedspot.com/702655.jpg",
  
   },
   {
    id: 13,

    title: "OPENAI API",
  
    thumbnailUrl: "https://i.ytimg.com/vi/CbpsDMwFG2g/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAYJhU1RMMu37hWZUvFMrMtIXMpYw",
  
    likes: 650,
  
    views: 10000,
  
    channelName: "Krish Naik",
  
    channelLogoUrl: "https://i1.feedspot.com/702655.jpg",
  
   },
   {
    id: 14,

    title: "Azure Tutorial For Beginners",
  
    thumbnailUrl: "https://i.ytimg.com/vi/-5NzEDnYMck/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAcyvZ4aLK0UwJqlFIXFnPO2qDrMA",
  
    likes: 1900,
  
    views: 11000,
  
    channelName: "kudvenkat",
  
    channelLogoUrl: "https://i1.feedspot.com/5127640.jpg",
  
   },
   {
    id: 15,

    title: "Pong,Python & Pygame",
  
    thumbnailUrl: "https://i.ytimg.com/vi/JRLdbt7vK-E/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBQnQ6thuvO8fK_-_TsJVYOcuK_KQ",
  
    likes: 2000,
  
    views: 5000,
  
    channelName: "Computerphile ",
  
    channelLogoUrl: "https://i1.feedspot.com/1027130.jpg",
  
   },
   {
    id:16 ,

    title: "How BlockChain Works",
  
    thumbnailUrl: "https://i.ytimg.com/vi/MjibPL4tGqo/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLADp1TVS4hK2GZhkxtet3siDRN7nA",
  
    likes: 2200,
  
    views: 20500,
  
    channelName: "CodeOrg",
  
    channelLogoUrl: "https://i1.feedspot.com/769125.jpg?t=1623066793",
  
   },
   {
    id:17 ,

    title: "Rust Programming",
  
    thumbnailUrl: "https://i.ytimg.com/vi/jAm7xrRxEUE/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBX1v42q284VHtj_J_r2HDeV9UjYQ",
  
    likes: 1250,
  
    views: 15000,
  
    channelName: "Caleb Curry",
  
    channelLogoUrl: "https://i1.feedspot.com/4610997.jpg",
  
   },
   {
    id: 18,

    title:"MySql Basics For Data Analytics",
  
    thumbnailUrl: "https://i.ytimg.com/vi/wgRwITQHszU/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA1ZOACa5gWKiYCVROIx2ipNrerzg",
  
    likes: 150,
  
    views: 1500,
  
    channelName: "Alex The Analyst",
  
    channelLogoUrl: "https://i1.feedspot.com/5325184.jpg?t=1688714510",
  
   },
   {
    id: 19,

    title: "Coding the Youtube LeaderBoard",
  
    thumbnailUrl: "https://i.ytimg.com/vi/OIY5scEOz70/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAte_kteqTom5ScyKNSnXBhCzxoOg",
  
    likes: 2000,
  
    views: 180000,
  
    channelName: "ForrestKnight",
  
    channelLogoUrl: "https://i1.feedspot.com/4970469.jpg",
  
   },
   {
    id: 20,

    title: "CSS Animated Poke`Ball ",
  
    thumbnailUrl: "https://i.ytimg.com/vi/AIcHVLdmVSY/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC_x0P21-fWP9ENNh3iBIYHFPXwIA",
  
    likes:10000,
  
    views:200000,
  
    channelName: "Codecourse",
  
    channelLogoUrl: "https://i1.feedspot.com/4481754.jpg",
  
   }
];

const Videocard=Videos.map((item,id)=>{
    return(
        <div className="card">
            <div className="chanelname">
                
                <img className="logo" src={item.channelLogoUrl} alt="channellogo"></img>
                <h3>{item.channelName}</h3>
 
            </div>
            <div>
                <div className="card1">
                <img className="thumbnail" src={item.thumbnailUrl} alt="Thumbnail"></img>
                <div className="users">
                <h5>Likes:{item.likes}</h5>
                <h5>Views:{item.views}</h5>
            </div>


                </div>
                <h3>{item.title}</h3>
            </div>
           

        </div>
    )

});

function Video(){
    return(
        <div>
        <div className="topbar">
    <img className="logo"src="https://media.istockphoto.com/id/1348212541/photo/red-play-icon-button-on-white-background-social-media-and-sign-concept-3d-illustration.webp?b=1&s=612x612&w=0&k=20&c=DWQqBuuxy9BKExCifmW2Hk8X5Z6DZR4sZKzK57iOWI8="></img>
    <h1>YOUTUBE</h1>
    <input className="input" type="textfield" placeholder="ENTER ANY TEXT TO SEARCH"></input>
    <img className="search" src="https://cdn-icons-png.flaticon.com/128/751/751463.png"></img>
    <img className="search" src="https://image.shutterstock.com/image-vector/microphone-icon-vector-flat-design-260nw-352036334.jpg"></img>
    <img className="profile"  src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"></img>
    <img className="bell" src="https://t4.ftcdn.net/jpg/01/08/24/99/240_F_108249947_UMBLfSCpTWU6AGiUz0F7a524koG3eO0z.jpg"></img>
    <img className="bell" src="https://cdn-icons-png.flaticon.com/128/12662/12662839.png"></img>
    </div>
    <div className="videos">
    {Videocard}
 
    </div>
    
    </div>
    );

}

export default Video