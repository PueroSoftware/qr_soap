import QRCode from 'qrcode';

async function generar() {
    const url = 'https://puerosoftware.github.io/qr_soap/';
    try {
        await QRCode.toFile('./qr_definitivo_jabones.png', url, {
            color: { dark: '#465A56', light: '#FFFFFF' },
            width: 1000
        });
        console.log('✅ ¡QR generado exitosamente!');
    } catch (err) {
        console.error('❌ Error:', err);
    }
}

generar();