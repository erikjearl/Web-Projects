import { useState, useEffect } from 'react';

function ZoomableImage({ src, zoomOut, zoom }) {
    
    const [scale, setScale] = useState(5)


    useEffect( () => {
        if(zoomOut){
            setScale(1);
        }else{
            setScale(zoom);
        }
    },[zoomOut])


    return (
    <>
        <div style={{ overflow: 'hidden' }}>
            <div
                style={{
                transform: `scale(${scale})`,
                transformOrigin: `${Math.floor(Math.random() * 650)}px ${Math.floor(Math.random() * 650)}px`,
                width: `${100 / scale}%`,
                height: `${100 / scale}%`,
                transition: '0.4s ease-out',
                }}
            >
                <img 
                    src={src} 
                    alt="zoomed image"
                    height="650px"
                    width="650px"
                />
            </div>
        </div>
    </>
    );
}

export default ZoomableImage;
