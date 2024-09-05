// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import './QrCode.css';
import loadingGif from '/giphy.webp';

export const QrCode = () => {
    const [data, setData] = useState('');
    const [size, setSize] = useState(150);
    const [fgColor, setFgColor] = useState('#000000');
    const [bgColor, setBgColor] = useState('#ffffff');
    const [qrValue, setQrValue] = useState('');
    const [label, setLabel] = useState('');  // New state for label text
    const [loading, setLoading] = useState(false);
    const [logo, setLogo] = useState('');
    const qrCodeRef = useRef(null);

    const handleGenerate = () => {
        setLoading(true);
        setTimeout(() => {
            setQrValue(data);
            setLoading(false);
        }, 2000);
    };

    const handleDownload = () => {
        const qrCanvas = qrCodeRef.current.querySelector('canvas');
        if (qrCanvas) {
            const borderSize = 10; // Border size for the QR code
            const labelHeight = 30; // Height of the label area
            const scale = 4; // Increased scaling factor for HD quality
    
            // Create a larger canvas for HD quality
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
        
            // Set canvas dimensions with scaling factor
            canvas.width = (qrCanvas.width + borderSize * 2) * scale;
            canvas.height = (qrCanvas.height + borderSize * 2 + labelHeight) * scale;
        
            // Scale the context
            context.scale(scale, scale);
    
            // Fill the background
            context.fillStyle = '#ffffff';
            context.fillRect(0, 0, canvas.width / scale, canvas.height / scale);
        
            // Draw the QR code with scaling
            context.drawImage(qrCanvas, borderSize, borderSize);
        
            // Draw the label without border
            if (label) {
                context.fillStyle = '#000000'; // Label text color
                context.font = '24px Arial'; // Adjusted font size for HD quality
                context.textAlign = 'center';
                context.textBaseline = 'middle';
        
                // Calculate label position
                const labelX = canvas.width / scale / 2;
                const labelY = qrCanvas.height + borderSize + labelHeight / 2;
    
                // Draw the label text
                context.fillText(label, labelX, labelY);
            }
        
            // Convert canvas to downloadable PNG
            const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
            let downloadLink = document.createElement('a');
            downloadLink.href = pngUrl;
            downloadLink.download = 'qr-code.png';
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        }
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

    useEffect(() => {
        if (loading) {
            const timer = setTimeout(() => {
                setQrValue(data);
                setLoading(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [loading, data]);

    return (
        <div className="app-container">
            <img src="/public/qr (1).png" alt="App Logo" className="app-logo" />
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
                    <label htmlFor="labelInput" className="input-label">Label for QR Code:</label> {/* New label input */}
                    <input
                        type="text"
                        id="labelInput"
                        placeholder="Enter a label"
                        className="input-field"
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}  // Update the label state
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
                        <div className="qr-code-container" ref={qrCodeRef}>
    <QRCodeCanvas
        value={qrValue}
        size={Math.min(size, 300)}  // Adjust QR code size dynamically
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
    {/* Add label here */}
    {label && <div className="qr-label-container">
        <p className="qr-label">{label}</p>
    </div>}
</div>

              
                    )}
                </div>
            </div>
            <p className="footer-text">Designed And Developed by {"YOU KNOW THAT"}.</p>
        </div>
    );
};
