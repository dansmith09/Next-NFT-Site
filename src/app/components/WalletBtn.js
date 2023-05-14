'use client'
import React, { useState, useEffect, useRef } from 'react';

export default function WalletBtn() {
    
  const [walletConnected, setWalletConnected] = useState(false)
  const [connectedAddress, setConnectedAddress] = useState('')
  const [formattedConnectedAddress, setFormettedConnectedAddress] = useState('')
    
  return (
        <>
            {
                // connectedAddress ? 
                // <button className='connectWalletBtn'>{formattedConnectedAddress}</button> :
                <button className='connectWalletBtn'>Connect Wallet</button>
            }
        </>
    )
}
