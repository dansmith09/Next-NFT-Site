'use client'
import React, { useState } from 'react';

export default function AboutImage() {

    const [aboutNumber, setAboutNumber] = useState(1)

    const aboutNext = () => {
        const newNum = aboutNumber + 1
        setAboutNumber(newNum)
    }
    const aboutPrevious = () => {
        const newNum = aboutNumber - 1
        setAboutNumber(newNum)
    }

    return (
      <div className='AboutImageContainer'>
        <button disabled={aboutNumber < 2 ? 'disabled' : ''} onClick={aboutPrevious}> Prev </button>
        <div className={`AboutImage about${aboutNumber}`}></div>
        <button disabled={aboutNumber > 7 ? 'disabled' : ''} onClick={aboutNext}> Next </button>
      </div>
    )
  }
  