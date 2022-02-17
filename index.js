import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { useWeb3React} from '@web3-react/core'
//import { walletconnect } from '../components/wallet/connectors'
import Modal from '../components/Modal'
import {  walletconnect } from '../components/wallet/connectors'


const customStyle = {
  position: 'fixed',
  height: '63vh',
  width: '50%',
  backgroundColor: '#ffffff',
  borderRadius: '35px',
  zIndex: '0',
  minWidth: '200px',
  top: '16vh',
  overflowY: 'hidden',
  margin: '30px 30px 30px 290px',
  padding: '30px, 0',
  overflowY: 'scroll',
  scrollpaddingBottom: '2px'
  
}



const ebu ={
  float: 'left',
  fontWeight: 'bold',
  margin: '20px 0 0 0',
  textAlign: 'left',
  padding: '34px 24px',
  color: 'black'
}

const abu = {
  width: '100%',
  height: '2rem',
  display: 'flex',
  cursor: 'pointer',
  border: 'rgba(0, 0, 0, .1) 1px solid',
  padding: '1.5em 0.4em ',
  borderRadius: '0.6em',
  justifyContent: 'space-between',
  alignItems: 'center'
}

const alloy = {
  WebkitFilter: 'initial',
  filter: 'initial',
  width: '2rem',
  height: '2rem',
  borderRadius: 'initial',

}

const ano = {
  color: 'rgb(88, 112, 135)',
  fontSize: '16px',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

}
export default function Home() {
  const { active, account, library, connector,  activate, deactivate} = useWeb3React()
  async function connect () {
    try {
      await activate(walletconnect)
    } catch (ex) {
      console.log(ex)
    }

  }


  const  [openModel, setOpenModal] = useState(false)
  return (
    <div>
      
    <div >
      <h3 style={ebu}>Defi Callab</h3>
    </div>
    <div style={customStyle} 
    >
      <h5 style={ebu}> Connect To A Wallet</h5>
      
      <ul  style={abu}>
        
        <li onClick={connect} style={ano} 
        onClick={() =>{
          setOpenModal(true)
        }}>
        
          
        {active ? <img src='blob:https://web.whatsapp.com/9cdece00-b31b-4639-b7c3-d36d05f781a3' /> : <span>Not connected</span>}
          Metamask

          </li>
         
          
         {openModel && <Modal closeModal={setOpenModal} />}
        <img style={alloy} src='https://dapp-collab.land/static/metamask-69ce6b56bbc9953dfb4aecebdf88729b.png' alt='img' />
        
      </ul>
{/*       
      <ul style={abu}>
      <li className='kit' onClick={connect} style={ano}
         onClick={() =>{
          setOpenModal(true)
        }}>
         {active ? <img src='blob:https://web.whatsapp.com/9cdece00-b31b-4639-b7c3-d36d05f781a3' /> : <span>Not connected</span>}
      TrustWallet</li>
      {openModel && <Modal closeModal={setOpenModal} />}
      <img style={alloy} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxKyfqaYLMyCqFclHLhwLrChOXsT8waDP-xQ&usqp=CAU' alt='img' />
        
      </ul>
      <ul style={abu}>
      <li onClick={connect}  style={ano}
         onClick={() =>{
          setOpenModal(true)
        }}>
            {active ? <img src='blob:https://web.whatsapp.com/9cdece00-b31b-4639-b7c3-d36d05f781a3' /> : <span>Not connected</span>} Coinbase</li>
            {openModel && <Modal closeModal={setOpenModal} />}
      <img style={alloy} src='https://www.blocksocial.com/wp-content/uploads/2019/07/coinbase-logo.jpg' alt='img' />
        
      </ul>
      <ul style={abu}>
      <li onClick={connect} style={ano}
         onClick={() =>{
          setOpenModal(true)
        }}>
             {active ? <img src='blob:https://web.whatsapp.com/9cdece00-b31b-4639-b7c3-d36d05f781a3' /> : <span>Not connected</span>} 
              Bitcoin</li>
              {openModel && <Modal closeModal={setOpenModal} />}
      <img style={alloy} src='https://dapp-collab.land/static/metamask-69ce6b56bbc9953dfb4aecebdf88729b.png' alt='img' />
        
      </ul>
      <ul style={abu}>
      <li onClick={connect}  style={ano}
         onClick={() =>{
          setOpenModal(true)
        }}>
             {active ? <img src='blob:https://web.whatsapp.com/9cdece00-b31b-4639-b7c3-d36d05f781a3' /> : <span>Not connected</span>} 
             Other Wallet</li>
             {openModel && <Modal closeModal={setOpenModal} />}
      <img style={alloy} src='https://dapp-collab.land/static/metamask-69ce6b56bbc9953dfb4aecebdf88729b.png' alt='img' />
        
      </ul> */}





      













      {/* <ul style={abu}>
      <li onClick={connect}   style={ano}
        onClick={() =>{
          setOpenModal(true)
        }}>
            {active ? <img src='blob:https://web.whatsapp.com/9cdece00-b31b-4639-b7c3-d36d05f781a3' /> : <span>Not connected</span>} 
             Metamask</li>
      <img style={alloy} src='https://dapp-collab.land/static/metamask-69ce6b56bbc9953dfb4aecebdf88729b.png' alt='img' />
      {openModel && <Modal closeModal={setOpenModal} />}
      </ul>
       */}
    </div>
    
    </div>
    
  )
} 




