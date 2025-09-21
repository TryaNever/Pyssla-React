import React, {useState} from "react";

export default function PopupCreation({onClose}) {
    const [sizeX, setSizeX] = useState(256)
    const [sizeY, setSizeY] = useState(256)

    return (
        <div className={`fixed top-0 w-screen h-screen bg-black/50 text-white`}>
            <form
                className={`w-1/2 h-2/3 py-20 px-20 bg-zinc-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl flex flex-col justify-between items-center`}>
                <div className={`flex items-center gap-5`}>
                    <label htmlFor="nameCanva">Nom du dessin :</label>
                    <input type="text" name="nameCanva" id="nameCanva" placeholder={`Nom de votre dessin`} maxLength={30} minLength={2} className={`outline outline-white rounded-lg px-3 py-1`}/>
                </div>
                <div>
                    <div>
                        <label htmlFor="SizeCanvaX">Largeur du dessin</label>
                        <input type="range" name="SizeCanvaX" id="SizeCanvaX" max={512} min={8} value={sizeX} onChange={(e) => setSizeX(Number(e.target.value))}/>
                    </div>
                    <div>
                        <label htmlFor="SizeCanvaY">Hauteur du dessin</label>
                        <input type="range" name="SizeCanvaY" id="SizeCanvaX" max={512} min={8} value={sizeY} onChange={(e) => setSizeY(Number(e.target.value))}/>
                    </div>
                    <p>Taille du dessin : {sizeX} * {sizeY}</p>
                </div>

                <div className={`text-black`}>
                        <input type="radio" name="typeShape" id="circle" defaultChecked={true} className={`peer/circle hidden`}/>
                    <label htmlFor="circle"
                           className={`py-2 px-6 outline-2 outline-white bg-blue-700 rounded-xl peer-checked/circle:bg-white peer-checked/circle:outline-blue-700`}>Cercle</label>

                    <input type="radio" name="typeShape" id="square" className={`peer hidden`}/>
                    <label htmlFor="square"
                           className={`py-2 px-6 outline-2 outline-white bg-blue-700 rounded-xl peer-checked:bg-white peer-checked:outline-blue-700`}>Carré</label>
                </div>
                <button className={`px-3 py-2 border rounded-xl`} type="submit">Crée le dessin</button>
            </form>
        </div>
    )

}