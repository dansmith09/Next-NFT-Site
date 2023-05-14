'use client'
import React, { useState, useEffect } from 'react';
import { BsArrowLeftCircle } from 'react-icons/bs'
import { BsArrowRightCircle } from 'react-icons/bs'

export default function AboutImage() {

    const [aboutNumber, setAboutNumber] = useState(1)

    const aboutNext = () => {
        if(aboutNumber == 8) {
            return
        }
        const newNum = aboutNumber + 1
        setAboutNumber(newNum)
    }
    const aboutPrevious = () => {
        if(aboutNumber == 1) {
            return
        }
        const newNum = aboutNumber - 1
        setAboutNumber(newNum)
    }

    useEffect(() => {
        document.addEventListener('keydown', detectKeyDown, true)
    })

    const detectKeyDown = (e) => {
        if(e.key === " ") {
            aboutNext()
        }
        if(e.key === "ArrowRight") {
            aboutNext()
        }
        if(e.key === "ArrowLeft") {
            aboutPrevious()
        }
        if(e.key === "Backspace") {
            aboutPrevious()
        }
    }

    return (
      <div className='AboutImageContainer'>
        <div className={`AboutImage about${aboutNumber}`}>
            <button
                className={`aboutBtn aboutBtnLeft ${aboutNumber == 1 ? 'hide' : ''}`}
                onClick={aboutPrevious}> <BsArrowLeftCircle /> </button>
            <button 
                className={`aboutBtn aboutBtnRight ${aboutNumber == 8 ? 'hide' : ''}`}
                onClick={aboutNext}> <BsArrowRightCircle /> </button>    
        </div>
      </div>
    )
  }
  