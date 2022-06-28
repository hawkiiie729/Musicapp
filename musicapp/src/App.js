
import './index.css'
import {BiSkipPreviousCircle,BiPlayCircle,BiSkipNextCircle,BiFlag,BiHeartCircle,BiPauseCircle} from 'react-icons/bi'
import { useEffect, useState } from 'react';


function App() {

  const [songs] = useState([
    {
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "./images/song-1.jpg",
      src: "./music/on-n-on.mp3"
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      img_src: "./images/song-2.jpg",
      src: "./music/somebody-new.mp3"
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      img_src: "./images/song-3.jpg",
      src: "./music/on-n-on.mp3"
    },
    {
      title: "Song 4",
      artist: "Artist 4",
      img_src: "./images/song-4.jpg",
      src: "./music/somebody-new.mp3"
    }
  ]);

  const [click, setClick] = useState (false);
  const handleClick =() => setClick (!click)
  console.log(click);

 const [fav,setFav]=useState([])
 const [index,setIndex]=useState(0);

 const handlenext=()=>{
  let x=(index+1)%4;
  console.log('x',x);
  setIndex(x)
 }
 const handleprev=()=>{
  let x=((index-1)+4)%4;
  setIndex(x);
 }

 useEffect(()=>{

 },[index])

 console.log(index);

  return (
    <div className="app">
     < div className='container'>
      <h1 className='center font-bold text-3xl '>Musicplayer</h1>
      <div className='img-container'>
         <img src={songs[index].img_src} alt={songs[index].title}></img>
      </div>
      <div className='para-container'>
        <p>{songs[index].title}</p>
        <p style={{fontSize:'medium'}}>{songs[index].artist}</p>
      </div>
        <div>
          <ul>
          <li><BiHeartCircle size={30} /></li>   
         <li><BiSkipPreviousCircle size={50} onClick={handleprev}/></li> 
         {
          click ? <li><BiPauseCircle size={50} onClick={handleClick}/></li>
          :<li><BiPlayCircle size={50} onClick={handleClick}/></li> 
         }  
         
         <li><BiSkipNextCircle size={50} onClick={handlenext}/></li>
         <li><BiFlag size={30}/></li>
          </ul>
          
          
        </div>
     </div>
    </div>
  );
}

export default App;
