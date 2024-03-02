// pages/page.tsx
import React from 'react';

const Page = () => {
  const welcomeTextStyle = {
    fontFamily: 'Malayalam Sangam MN, sans-serif', // Fallback auf generische Sans-Serif-Schriftart
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-4xl" style={welcomeTextStyle}>
          Welcome to{' '}
          <img
            src="/chat4frnds.svg" // Stelle sicher, dass du das korrekte SVG-Bildpfad angibst
            alt="Chat4Friends"
            className="inline-block w-auto h-19" // Passe die Breite und Höhe nach Bedarf an
          />
        </h1>
        <p className="text-lg my-4">Where people connect around the world</p>
        <div className="space-x-4">
          <button className="bg-[#0A6B49] text-white px-4 py-2 rounded-full">Register</button>
          <p className="text-lg my-3 text-[#0A6B4D]">Already got an account?</p>
          <button className="text-white hover:underline">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Page;
