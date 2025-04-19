import React, {useState} from 'react'

const campusBuddy = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIframe = () => {
        setIsOpen(!isOpen);
    };
  return (
    <div>
       {/* Floating Mic Button */}
       <button
        onClick={toggleIframe}
        style={{
            position: 'fixed',
            bottom: '0.5rem',
            right: '1rem',
            zIndex: 9999,
            backgroundColor: '#00bcd4',
            borderRadius: '50%',
            width: '3.4rem',
            height: '3.4rem',
            color: 'white',
            fontSize: '1.5rem',
            border: 'none',
            cursor: 'pointer',
        }
        }
      >
        🎤
      </button>

      {/* Lisa Iframe */}
      {isOpen && (
        <iframe
          src="https://campusbuddy.vercel.app/"
          allow="microphone"
          style={{
            position: 'fixed',
            bottom: '4rem',
            right: '1rem',
            width: '19rem',
            height: '35rem',
            borderRadius: '1rem',
            border: 'none',
            zIndex: 9999,
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          }}
          title="Campus Buddy"
        ></iframe>
      )}
    </div>
  )
}

export default campusBuddy;
