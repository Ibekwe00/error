 import { WalletConnectConnector } from  '@web3-react/walletconnect-connector'



// export const walletconnect = new WalletConnectConnector({
//     rpc: {
//         1: `https://${INFURA_PREFIXES[1]}.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
//       },
//       bridge: 'https://bridge.walletconnect.org',
// })

// import { WalletConnectConnector} from '@web3-react/walletconnect-connector'

 export const walletconnect = new WalletConnectConnector({
   rpc: { 1: process.env.REACT_APP_NETWORK_URL },
   infuraId: '05ebdf97dd28de92b487757af1563747',
   bridge: 'https://bridge.walletconnect.org',
   qrcode: false,
   pollingInterval: 1000,
 });