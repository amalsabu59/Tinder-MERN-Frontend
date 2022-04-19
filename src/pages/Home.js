import Navbar from '../components/Navbar'
import {useState} from 'react'
import AuthModel from '../components/AuthModel'


const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true)
    const authToken = false

    const handleClick = () => {
     setShowModal(true)
     setIsSignUp(true)
    }
     
    return (
        <div className="overlay">
            <Navbar setIsSignUp={setIsSignUp} minimal={false} setShowModal={setShowModal}/>
            <div className="home">
                <h1 className="primary-title">Start Something Epic.</h1>
                <button className="primary-button" onClick={handleClick}>
                    {authToken ? 'Signout' : 'Create Account'}
                </button>
                {showModal && (
                    <AuthModel setShowModal={setShowModal} setIsSignUp={setIsSignUp} isSignUp={isSignUp}/>
                )}
            </div>
        </div>
    )
}
export default Home