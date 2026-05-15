# 🎉 Caseta Vecinal — Carta y Calculadora de Precios

Web para la caseta de la Asociación de Vecinos. Muestra la carta por categorías y permite calcular el total de un pedido en segundos.

**Demo en vivo:** [tu-asociacion.netlify.app](https://tu-asociacion.netlify.app)

---

## ✨ Funcionalidades

- 📋 **Carta completa** organizada por categorías con emojis
- 🧮 **Calculadora de pedidos** — botones +/− por producto, total en tiempo real
- 🧾 **Ticket en pantalla** — resumen siempre visible en la barra inferior
- 🔄 **Botón reiniciar** siempre accesible para pasar al siguiente cliente
- 📱 **PWA** — se puede instalar en el móvil y funciona **sin internet**
- ⚙️ **Panel de administración** — accesible en `/admin.html` para editar productos y precios

---

## 📁 Estructura de archivos

```
/
├── index.html       ← Carta pública con calculadora
├── style.css        ← Estilos
├── script.js        ← Lógica de la calculadora
├── admin.html       ← Panel de administración (acceso privado)
├── manifest.json    ← Configuración PWA (offline)
└── README.md        ← Este archivo
```

---

## 🛒 Categorías y productos

| Categoría      | Productos                                                   |
|----------------|-------------------------------------------------------------|
| 🥖 Montados    | Chorizo, Lomo, Panceta, Tortilla · + Queso                 |
| 🥪 Bocadillos  | Chorizo, Lomo, Panceta, Tortilla · + Queso                 |
| 🍔 Otros       | Hamburguesa, Hamburguesa Vegana, Pincho Moruno · + Queso   |
| 🥤 Refrescos   | Coca-Cola, Coca-Cola Zero, Fanta, Aquarius                 |
| 🍷 Vinos       | Mini Tinto de Verano, Mini Calimocho                       |
| 🍺 Cerveza     | Sin Alcohol, Doble, Mini Cerveza                           |
| 👕 Merchandising | Palestina, Camiseta Vecinal, Camiseta Sindicato           |

---

## ⚙️ Panel de Administración

Accede a `/admin.html` (no está enlazado desde la carta).

**Contraseña por defecto:** `caseta2025`

> ⚠️ Cambia la contraseña editando la línea `const ADMIN_PASSWORD = 'caseta2025';`
> en el archivo `admin.html`.

Desde el panel puedes:
- Cambiar nombres y precios de cualquier producto
- Añadir o eliminar productos
- Exportar el nuevo código HTML para actualizar `index.html`

---

## 🚀 Publicar en Netlify (paso a paso)

1. Sube todos los archivos a un repositorio de GitHub
2. Entra en [netlify.com](https://netlify.com) y haz clic en **"Add new site → Import from Git"**
3. Conecta tu repositorio
4. Deja la configuración por defecto y pulsa **"Deploy site"**
5. ¡Listo! Netlify te dará una URL pública

Para actualizar la web en el futuro: haz un `git push` y Netlify redesplegará automáticamente.

---

## 📱 Instalar como app en el móvil (sin internet)

1. Abre la web en Chrome (Android) o Safari (iPhone)
2. **Android:** menú ⋮ → *"Añadir a pantalla de inicio"*
3. **iPhone:** botón compartir → *"Añadir a pantalla de inicio"*

Una vez instalada funciona aunque no haya cobertura en la caseta.

---

## 🛠️ Personalización rápida

**Cambiar un precio** → Abre `index.html`, busca `data-id="m-chorizo"` (por ejemplo) y modifica `data-price="4.00"` y el texto visible `4,00 €`.

**Cambiar contraseña del admin** → Abre `admin.html` y busca:
```js
const ADMIN_PASSWORD = 'caseta2025';
```

---

*Hecho con ❤️ para el barrio*
