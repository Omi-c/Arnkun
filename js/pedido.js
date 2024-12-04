document.getElementById('btnEnviar').addEventListener('click', async function () {
    const tipo = document.getElementById('tipo').value;
    const tamaño = document.getElementById('tamaño').value;
    const observaciones = document.getElementById('observaciones').value;
    const fileInput = document.getElementById('imagen');
    const file = fileInput.files[0];

    if (!file || !tipo || !tamaño) {
        alert('Por favor, completa todos los campos y adjunta una imagen.');
        return;
    }

    const loadingModal = document.getElementById('loadingModal');
    loadingModal.style.display = 'flex';
    this.disabled = true;

    try {
        // ImgBB
        const formData = new FormData();
        formData.append('image', file);
        const apiKey = 'f086020aaa1928318605c0398f86eda1'; 
        const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            const imageUrl = data.data.url;

            // mensaje 
            const mensaje = `Hola, me gustaría hacer un pedido:
            - Tipo: ${tipo}
            - Tamaño: ${tamaño}
            - Observaciones: ${observaciones}
            - Imagen de referencia: ${imageUrl}`;

            const whatsappURL = `https://wa.me/584121571961?text=${encodeURIComponent(mensaje)}`;

            window.open(whatsappURL, '_blank');
        } else {
            alert('Hubo un problema al subir la imagen. Inténtalo de nuevo.');
        }
    } catch (error) {
        console.error('Error al subir la imagen:', error);
        alert('Ocurrió un error al subir la imagen. Por favor, inténtalo más tarde.');
    } finally {
        loadingModal.style.display = 'none';
        this.disabled = false;
    }
});











