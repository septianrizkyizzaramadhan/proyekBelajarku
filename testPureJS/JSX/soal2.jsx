import { useState } from "react";

function App() {
    const [buka, setBuka] = useState(false);

    const handleToggleBuka = () => {
        setBuka(!buka)
    }

    return (
        <div> 
            <h2>Status buka dan tutup</h2>
            <p>
                status saat ini {''}
                <strong>
                    {buka ? 'bengkel buka' : 'bengkel tutup'}
                </strong>
            </p>

            <button onClick={handleToggleBuka}>
                {buka ? 'bengkel buka' : 'bengkel tutup'}
            </button>
        </div>
    )

}

export default App;