# Desiderium Landing

Landing page estática para Desiderium, una marca de velas aromáticas artesanales en Naucalpan.

## Archivos principales

- `index.html` — estructura y contenido de la landing.
- `styles.css` — estilos responsive y diseño visual.
- `script.js` — interacciones ligeras: menú móvil, tabs de aromas, modal de catálogo y reveal on scroll.
- `assets/images/` — logo, fotografías de producto y catálogos visuales.
- `assets/qr/qr-desiderium.svg` — código QR vectorial de la landing pública.
- `assets/qr/qr-desiderium.png` — código QR en imagen PNG.

## Uso local

Abre `index.html` directamente en el navegador o sirve la carpeta con cualquier servidor estático.

## QR

El QR apunta a:

```txt
https://desiderium.misitioweb.lat/
```

Archivo:

```txt
assets/qr/qr-desiderium.svg
assets/qr/qr-desiderium.png
```

Se generó con `qrencode`:

```bash
qrencode -t SVG -o assets/qr/qr-desiderium.svg -s 8 -m 2 'https://desiderium.misitioweb.lat/'
qrencode -t PNG -o assets/qr/qr-desiderium.png -s 12 -m 2 'https://desiderium.misitioweb.lat/'
```

## License

El código de este repositorio está licenciado bajo la licencia MIT. Consulta `LICENSE`.

Los assets de marca —logo, fotografías, catálogos, imágenes de producto e identidad de Desiderium— son propiedad de Desiderium y no están cubiertos por la licencia MIT.
