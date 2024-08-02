import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import './QrCode.css'; 
import loadingGif from '/giphy.webp'; 

export const QrCode = () => {
    const [data, setData] = useState('');
    const [size, setSize] = useState(150);
    const [fgColor, setFgColor] = useState('#000000');
    const [bgColor, setBgColor] = useState('#ffffff');
    const [qrValue, setQrValue] = useState('');
    const [loading, setLoading] = useState(false); 
    const [logo, setLogo] = useState('');

    const handleGenerate = () => {
        setLoading(true);
        setTimeout(() => {
            setQrValue(data);
            setLoading(false);
        }, 2000);
    };

    const handleDownload = () => {
        const canvas = document.getElementById('qrCode');
        const pngUrl = canvas
            .toDataURL('image/png')
            .replace('image/png', 'image/octet-stream');
        let downloadLink = document.createElement('a'); 
        downloadLink.href = pngUrl;
        downloadLink.download = 'qr-code.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    const handleLogoUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setLogo(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSizeChange = (e) => {
        const newSize = parseInt(e.target.value, 10);
        if (newSize > 300) {
            alert('Maximum size reached (300).');
            setSize(300);
        } else {
            setSize(newSize);
        }
    };

    return (
        <div className="app-container">
            <img src="/vite.svg" alt="App Logo" className="app-logo" />
            <div className="form-container">
                <div className="form-left">
                    <label htmlFor="dataInput" className="input-label">Data for QR Code:</label>
                    <input
                        type="text"
                        id="dataInput"
                        placeholder="Enter a link"
                        className="input-field"
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                    />
                    <label htmlFor="dataSizeInput" className="input-label">Size of QR Code:</label>
                    <input
                        type="number"
                        id="dataSizeInput"
                        placeholder="Enter a size, e.g., 150"
                        className="input-field"
                        value={size}
                        onChange={handleSizeChange}
                    />
                    <div className="button-container">
                        <button
                            className="generate-btn"
                            onClick={handleGenerate}
                            disabled={loading}
                        >
                            {loading ? 'Generating...' : 'Generate QR Code'}
                        </button>
                        <button
                            className="download-btn"
                            onClick={handleDownload}
                            disabled={!qrValue || loading}
                        >
                            Download QR Code
                        </button>
                    </div>
                </div>
                <div className="form-right">
                    <div className="color-inputs">
                        <div className="color-input-container">
                            <label htmlFor="fgColorInput" className="input-label">Foreground Color:</label>
                            <input
                                type="color"
                                id="fgColorInput"
                                className="color-input"
                                value={fgColor}
                                onChange={(e) => setFgColor(e.target.value)}
                            />
                        </div>
                        <div className="color-input-container">
                            <label htmlFor="bgColorInput" className="input-label">Background Color:</label>
                            <input
                                type="color"
                                id="bgColorInput"
                                className="color-input"
                                value={bgColor}
                                onChange={(e) => setBgColor(e.target.value)}
                            />
                        </div>
                    </div>
                    <label htmlFor="logoInput" className="input-label">Logo (Optional):</label>
                    <input
                        type="file"
                        id="logoInput"
                        className="input-field"
                        accept="image/png, image/jpeg"
                        onChange={handleLogoUpload}
                    />
                    {loading && (      
                        <div className="loading-container">
                            <img src={loadingGif} alt="Loading" className="loading-gif" />
                        </div>
                    )}
                    {!loading && qrValue && (
                        <div className="qr-code-container">
                            <QRCodeCanvas
                                id="qrCode"
                                value={qrValue}
                                size={Math.min(size, 300)}
                                level={"H"}
                                bgColor={bgColor}
                                fgColor={fgColor}
                                imageSettings={logo ? {
                                    src: logo,
                                    x: null,
                                    y: null,
                                    height: Math.min(size * 0.25, 50),
                                    width: Math.min(size * 0.25, 50),
                                    excavate: true,
                                } : null}
                            />
                        </div>
                    )}
                </div>
            </div>
            <p className="footer-text">Designed And Developed by {"YOU KNOW THAT"}.</p>
        </div>
    );
};
