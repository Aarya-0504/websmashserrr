// src/components/HomePage.js

import React, { useState } from 'react';
import Typist from 'typewriter-effect';
import './HomePage.css';
import sample from './pexels-pat-whelen-5738616 (1080p).mp4'
const HomePage = () => {
  const [email, setEmail] = useState('');
  const [data, setData] = useState({
    State: '',
    Offset: 10,
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log('data :>> ', data);

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
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="homepage">
      <Typist
        options={{
          strings: [
            '<span class="quote" >"Tit For Tat!"</span>',
            '<span class="quote">"Time and Tide Waits for NONE!"</span>',
          ],
          autoStart: true,
          loop: true,
          delay: 100,
          deleteSpeed: "natural",
        }}
      ></Typist>
      <div>
        <form onSubmit={handleFormSubmit} className="form">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send</button>
        </form>
        
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
