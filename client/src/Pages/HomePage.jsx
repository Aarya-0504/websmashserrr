// src/components/HomePage.js

import React, { useState } from 'react';
import Typist from 'typewriter-effect';
import './HomePage.css';
import sample from './pexels-pat-whelen-5738616 (1080p).mp4'
const HomePage = () => {
  const [email, setEmail] = useState('');
 

  const fetchQuotes = async () => {
   // e.preventDefault();
    //console.log('data :>> ', data);

    const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd2e3c557dbmsh69ff276fd1923b4p186570jsncd50810d213a',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
      },
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
    }
  };

//nodemailer req
const sendEmail=async (email,quoteData)=>{
    const dataToSend = {
        email,
        quoteData,
      };
      try{
        const response=fetch("http://localhost:8000/api/feedbacksystem",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify(dataToSend),
        })

        // if (!response.ok) {
        //     throw new Error('Failed to send data to the server');
        //   }
        return response;
      }catch (error) {
    //console.error(error);
    throw error;
  }
}
 // Handle form submission
 const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data: ', email);
  
    try {
      const quoteResult = await fetchQuotes();
      console.log('Quote data: ', quoteResult);
      
       const emailResult = await sendEmail(email, quoteResult);
    //    console.log('Email response: ', emailResult);
      // Handle the response data as needed
    } catch (error) {
      // Handle errors here
      console.error(error);
    }
  };
  return (
    <div className="homepage">
      <Typist Cursor
        options={{
          strings: [
            '<span class="quote" >"Two things are infinite: the universe and human stupidity; and I am not sure about the universe."</span>',
            '<span class="quote">"Be the change that you wish to see in the world."</span>',
            '<span class="quote">"“In three words I can sum up everything I have learned about life: it goes on.”"</span>',
            '<span class="quote">"If you tell the truth, you do not have to remember anything."</span>',
            '<span class="quote">"Be the change that you wish to see in the world."</span>',
          ],
          autoStart: true,
          loop: true,
          delay: 100,
          deleteSpeed: "natural",
        }}
      ></Typist>
      <div>
        <form onSubmit={handleFormSubmit} className="form">
          <label  htmlFor="email"></label>
          <input
            type="email"
            id="email"
            placeholder='       johndoe@gmail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send</button>
        </form>
        
      </div>
      <div>
      <Typist Cursor
        options={{
          strings: [
            '<span class="quote" >This is a Random Quotes Emailing Website.</span>',
            '<span class="quote">Enter your email id, and get Random email quotes sent in your inbox.</span>'
          ],
          autoStart: true,
          loop: true,
          delay: 200,
          deleteSpeed: "natural",
        }}
      ></Typist>
      </div>
      <video className="video-background"
  autoPlay
  muted
  loop
  playsInline>
        <source src={sample} type="video/mp4"/>
      </video>
    </div>
  );
};

export default HomePage;
