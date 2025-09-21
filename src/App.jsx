import {useState} from 'react'
import PopupCreation from "./components/PopupCreation.jsx";

function App() {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    return (
        <>
            <div className={`bg-black w-full h-screen text-white flex justify-between`}>
                <div className={`w-1/5 border-r-2 border-white`}>
                    <button onClick={() => setIsPopupOpen(true) }>Nouveau dessin</button>
                    <form>
                        <label htmlFor="search">Recherche</label>
                        <input type="search" name="search" id="search"/>
                    </form>
                </div>
                <div className={`w-full grid grid-cols-12 gap-6 pt-10 pl-10`}>
                    <div className={`col-span-3`}>
                        <img src="" alt=""/>
                        <div><strong>Title</strong><p>Date de Création</p></div>
                    </div>
                    <div className={`col-span-3 h-60 border border-white rounded-lg p-3`}>
                        <img src="" alt=""/>
                        <div><strong>Title</strong><p>Date de Création</p></div>
                    </div>
                </div>
            </div>
            {isPopupOpen && <PopupCreation onClose={() => setIsPopupOpen(false)} />}
        </>
    )
}

export default App
