import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/header";
import Main from "./component/main";
import FeatureSection from "./component/featureSection";
import Footer from "./component/footer";
import RegistrationPage from "./component/registrationPage";
import LoginPage from "./component/loginPage";
import Error from "./component/erroPage";
import About from "./component/about";
import Contact from "./component/contact";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router";
import CampusBuddy from "./component/campusBuddy";
 // window speaking function
 function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate=.8
    text_speak.pitch=1
    text_speak.volume=1
    let voices = window.speechSynthesis.getVoices();
  
    let female_voice = voices.find(voice =>voice.name.includes('Female')||voice.gender==='female')
  
    if(female_voice)
    {
        text_speak.voice=female_voice
    }
    window.speechSynthesis.speak(text_speak)
  }
  
  
  function greeting(){
    let day = new Date()
    let hours = day.getHours()
  
    if(hours>=0 && hours<12)
        speak("welcome to the online quizing platform")
    else if(hours>=12 && hours<18)
        speak("welcome to the online quizing platform")
    else
        speak("welcome to the online quizing platform")
    
  }

  
      window.addEventListener("load",()=>{
        // console.log(greeting())
            greeting()
      })

  
  // Speach recognition 
  
  let speachRec = window.SpeechRecognition || window.webkitSpeechRecognition
  let recognition = new speachRec()
  
  recognition.onresult=(event)=>{
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
   
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
  }




// PAGE LAYOUT
const PageLayout = ()=>(
    <>
        <Outlet/>
    </>
)

const routApp = createBrowserRouter([
    {
        path:"/",
        element:<PageLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:[<Header/>,<Main/>,<FeatureSection/>,<Footer/>,<CampusBuddy/>],
                errorElement:<Error/>,
            },
            {
                path:"/about",
                element:[<Header/>,<About/>,<Footer/>]
            },
            {
                path:"/feature",
                element:[<Header/>,<FeatureSection/>,<Footer/>]
            },
            {
                path:"/login",
                element:[<Header/>,<LoginPage/>]
            },
            {
                path:"/contact",
                element:[<Header/>,<Contact/>,<Footer/>]
            },
            {
                path:"/registration",
                element:[<Header/>,<RegistrationPage/>]
            },
            {
                path:"/campusBuddy",
                element:[<Header/>,<campusBuddy/>]
            }
        ]
    }
]
);



const main = ReactDOM.createRoot(document.getElementById("root"))

main.render(<RouterProvider router={routApp}/>)



