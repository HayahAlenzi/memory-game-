import React, { useState } from "react";
import "./game.css";
import imge from "../Compenents/spc.jpg"
import audio from "../Compenents/aod.mp3"
import audioh8 from "../Compenents/sryh.mp3"
import audioa1 from "../Compenents/sally.m4a"
import k10 from "../Compenents/la7n.m4a"
import j9 from "../Compenents/batman.m4a"


export default function Game() {

// const [dd, setdd] = useState(new Audio())
  const [obj, setobj] = useState( null);
  const [desiton, setdesiton] = useState("");
  //    const [compare, setcompare] = useState()
  const [arrG, setarrG] = useState([
    {
      name: "a",
            id:1,

      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ygSZS17JhYqrq3mCwL7ZlKodVcAlDT6lEg&usqp=CAU",
      show: false,
    },
    {
      name: "b",
            id:2,

      url: "https://i.pinimg.com/236x/a2/e0/a4/a2e0a4688400dc593e4c2b6ec2eba4a4.jpg",
      show: false,
    },
    {
      name: "c",
            id:3,

      url: "https://i.pinimg.com/564x/d1/65/3a/d1653afd9581e98abdce85318223f1f7.jpg",
      show: false,
    },
    {
      name: "d",
            id:4,

      url: "https://i.pinimg.com/236x/4b/c5/78/4bc578184a12203719a5fe07b9551cd2.jpg",
      show: false,
    },
    {
      name: "e",
            id:5,

      url: "https://i.pinimg.com/236x/c2/6b/24/c26b2451296cc355889d32f2538becad.jpg",
      show: false,
    },
    {
      name: "f",
            id:6,

      url: "https://i.pinimg.com/236x/8f/eb/25/8feb25e8a8676c88cb042a6bcaa86fd2.jpg",
      show: false,
    },
    {name: "g",
    id:7,

url: "https://i.pinimg.com/236x/60/62/c4/6062c4383b3bd47d45886a3761662ade.jpg",
show: false,
},
{name: "h",
id:8,

url: "https://i.pinimg.com/236x/13/f6/61/13f66189b62722b4e385441de211629f.jpg",
show: false,
},
{name: "j",
id:9,

url: "https://i.pinimg.com/236x/49/70/28/4970285283070e2c12034786843848af.jpg",
show: false,
},{name: "k",
id:10,

url: "https://i.pinimg.com/236x/33/0d/0a/330d0a4b1ec15e84ffafa1968a0eb857.jpg",
show: false,
},
{name: "a",
id:11,

url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ygSZS17JhYqrq3mCwL7ZlKodVcAlDT6lEg&usqp=CAU",
show: false,
},
{
name: "b",
id:12,

url: "https://i.pinimg.com/236x/a2/e0/a4/a2e0a4688400dc593e4c2b6ec2eba4a4.jpg",
show: false,
},
{
name: "c",
id:13,

url: "https://i.pinimg.com/564x/d1/65/3a/d1653afd9581e98abdce85318223f1f7.jpg",
show: false,
},
{
name: "d",
id:14,

url: "https://i.pinimg.com/236x/4b/c5/78/4bc578184a12203719a5fe07b9551cd2.jpg",
show: false,
},
{
name: "e",
id:15,

url: "https://i.pinimg.com/236x/c2/6b/24/c26b2451296cc355889d32f2538becad.jpg",
show: false,
},
{
name: "f",
id:16,

url: "https://i.pinimg.com/236x/8f/eb/25/8feb25e8a8676c88cb042a6bcaa86fd2.jpg",
show: false,
},
{name: "g",
id:17,

url: "https://i.pinimg.com/236x/60/62/c4/6062c4383b3bd47d45886a3761662ade.jpg",
show: false,
},
{name: "h",
id:18,

url: "https://i.pinimg.com/236x/13/f6/61/13f66189b62722b4e385441de211629f.jpg",
show: false,
},
{name: "j",
id:19,

url: "https://i.pinimg.com/236x/49/70/28/4970285283070e2c12034786843848af.jpg",
show: false,
},{name: "k",
id:20,

url: "https://i.pinimg.com/236x/33/0d/0a/330d0a4b1ec15e84ffafa1968a0eb857.jpg",
show: false,
}
  ]);


  const aa = new Audio(audio) 
  const audih8 = new Audio(audioh8)
  const audio1=new Audio(audioa1)
  const audiok=new Audio(k10)
  const audioj=new Audio(j9)

// const toggele=()=>{

// }


const reset = ()=>{
  window.location.reload();
  }

  // const start = () => {
  //   aa.play()
  // }

const copiedArr=[...arrG]

  const handelclick = (elem,i) => {


    if(elem.show==false){

      const copiedArr=[...arrG]
      copiedArr[i].show=true
      setarrG(copiedArr)

    }

    if(!obj){
    
    console.log(elem.show,"it`s show");
//  }

// else{
    setdesiton("");
    // if (!obj) {
      setobj(elem);
      console.log("it`s seved !!", obj);



    } else {



      if (elem.name === obj.name) {
        
     
        setdesiton("Pravo!");

        if(elem.name=="a"&&obj.name=== "a"){
          audio1.play()}
          else if(elem.name=="h"&&obj.name=== "h"){
            audih8.play()}
            else if(elem.name=="k"&&obj.name=== "k"){
              audiok.play()} else if(elem.name=="j"&&obj.name=== "j"){
                audioj.play()}
    

        console.log(true);
        setobj(null);
      } else  {
       
        // if(elem.name != obj.name &&){
        setdesiton("Try agin!");
        // console.log("false");
        // if(elem.name !== obj.name){
          // console.log(i);
          // console.log(arrG);
          setTimeout(()=>{
            setarrG(arrG.map((elem,index)=>{
              if(i===index ||elem.id === obj.id  ){
                return {...elem , show:false}
              }else{
                return elem
              }
            }))

          },300)

        // copiedArr[i].show=false
        // setarrG(copiedArr)
        setobj(null);
      
      }
    }
  
  };
  

  return (
    <div>
      <h1 className="title">Spacetoon Memories ❤<img className="imgTitle" src="https://i.pinimg.com/236x/d6/54/47/d654472c1f77f2ea6c1a116f228a91a9.jpg"></img> </h1>
      {/* <audio> */}

      <div>
        <div className="divcss">
          {arrG.map((elem, i) => {
           if(elem.show){
            return (
                <div>
                  <img
                    onClick={() => {  handelclick(elem,i)  } }
                    className="immg"
                    src={elem.url}
                  />
                </div>
              );
           }else{
            return (
                <div>
                  <img
                    onClick={() => {
                      handelclick(elem,i);
                    }}
                    className="immg"
                    src={imge}
                  />
                </div>
              );
           }
          })}

         
        </div>
        <div >
        <h2 className="title">{desiton}</h2>
      <div >  <button className="btn btn-white btn-animate" onClick={()=>{reset()}}>New Game</button>
      </div></div></div>
    </div>
  );
        }
