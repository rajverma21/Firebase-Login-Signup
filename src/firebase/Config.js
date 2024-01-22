import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyANZxLXgDgOjGXU_he2Qu3kgejl4Df06vU',
  authDomain: 'login-signup-page-218df.firebaseapp.com',
  projectId: 'login-signup-page-218df',
  storageBucket: 'login-signup-page-218df.appspot.com',
  messagingSenderId: '317177001467',
  appId: '1:317177001467:web:b5e3a559c94b5da650075e',
  measurementId: 'G-2Z96DF99K1'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { app, auth }
export default auth
