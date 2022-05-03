import React,{useState,useRef} from 'react'
import user from "./user.jpg"
import Image from "next/image"
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadString } from "@firebase/storage";
// import { signOut, useSession } from "next-auth/react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "@firebase/firestore";
import {CalendarIcon, ChartBarIcon, EmojiHappyIcon, GiftIcon, LocationMarkerIcon, PhotographIcon, XIcon} from "@heroicons/react/outline"
const WhatsHappening = () => {
    const [input,setInput]=useState("");
    const [selectedFile,setSelectedFile]=useState(null);
    const filePickerRef = useRef(null);
    const [showEmojis, setShowEmojis] = useState(false);
    const [loading, setLoading] = useState(false);

    const addEmoji = (e) => {
      let sym = e.unified.split("-");
      let codesArray = [];
      sym.forEach((el) => codesArray.push("0x" + el));
      let emoji = String.fromCodePoint(...codesArray);
      setInput(input + emoji);
    };
    const sendPost=async()=>{
      if (loading) return;
      setLoading(true);
      const docRef = await addDoc(collection(db, "posts"), {
        // id: session.user.uid,
        // username: session.user.name,
        // userImg: session.user.image,
        // tag: session.user.tag,
        text: input,
        timestamp: serverTimestamp(),
      });
    
    
      const imageRef = ref(storage, `posts/${docRef.id}/image`);
  
    //   if (selectedFile) {
    //     await uploadString(imageRef, selectedFile, "data_url").then(async () => {
    //       const downloadURL = await getDownloadURL(imageRef);
    //       await updateDoc(doc(db, "posts", docRef.id), {
    //         image: downloadURL,
    //       });
    //     });
    //   }
  
    //   setLoading(false);
    //   setInput("");
    //   setSelectedFile(null);
    //   setShowEmojis(false);
    // };
    }

    const addImageToPost = (e) => {
      const reader = new FileReader();
      if (e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0]);
      }
  
      reader.onload = (readerEvent) => {
        setSelectedFile(readerEvent.target.result);
      };
    };

  return (
    <div>
        <div className='flex ml-8'>
          <div className='h-14 w-14'>
            <Image src={user} width={55} height={55} className="rounded-full object-contain" alt="user"/>
            </div>
            <div className="divide-y divide-gray-700 w-full ml-4">

            <div className={` {${selectedFile && "pb-7 pr-7"} ${input && "space-y-2.5"}`}>
                <textarea placeholder="What's happening?" className='bg-transparent font-semibold text-xl tracking-wide outline-none placeholder-gray-500 w-full min-h-[50px]' value={input} onChange={(e)=>setInput(e.target.value)}/>
                </div>
            </div>    
               

              {selectedFile && (
            <div className='relative'>
              <div className='absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex
              items-center justify-center top-1 left-1 cursor-pointer'>
                <XIcon className='text-white h-5' onClick={()=>setSelectedFile(null)}/>
              </div>
              <img src={selectedFile} alt="file" className="rounded-2xl max-h-80 object-contain"/>
             
          
           </div>
            )
}
            </div>
            <div className='flex items-center ml-[100px] justify-between pt-2.5'>
              <div className='flex items-center text-white space-x-2 '>
                <div className='iicon-container'  onClick={() => filePickerRef.current.click()}>
                <PhotographIcon className='input-icon'/>
                <input
                  type="file"
                  ref={filePickerRef}
                  hidden
                   onChange={addImageToPost}
                />
                </div>
                <div  className='iicon-container'>
                <GiftIcon className='input-icon' />
                </div>
                <div  className='iicon-container'>
                <ChartBarIcon className='rotate-90 input-icon'/>
                </div>
                <div  className='iicon-container' onClick={()=>setShowEmojis(!showEmojis)}>
                <EmojiHappyIcon className='input-icon'/>
                </div>
                < div  className='iicon-container'>
                <CalendarIcon className='input-icon'/>
                </div>
                <div  className='iicon-container'>
                <LocationMarkerIcon className='input-icon'/>
                </div>
                {
                  showEmojis && (
                    <Picker
                onSelect={addEmoji}
                  style={{
                    position: "absolute",
                    marginTop: "465px",
                    marginLeft: -40,
                    maxWidth: "320px",
                    borderRadius: "20px",
                  }}
                  theme="dark"
                />
                  )
                }
              </div>
              <button className= 'bg-blue-400 font-semibold text-white h-12 w-24 rounded-3xl px-4 py-2 text-xl disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default'
               disabled={!input.trim() && !selectedFile}
       
             onClick={sendPost}
             >
            
             Tweet
</button>              
    </div>
  
    
  </div>
  )}

export default WhatsHappening
