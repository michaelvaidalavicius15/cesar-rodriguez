# Ayuda para Cesar - Página de Donaciones

Página web desarrollada en Next.js para ayudar a Cesar Maicol Rodriguez Salvia a recaudar fondos para su tratamiento de neuroestimulación.

## Características

- 🌍 **Detección automática de país**: Detecta si el usuario está en Brasil, Uruguay u otros países
- 🇧🇷 **Soporte multiidioma**: Español para Uruguay y otros países, Portugués para Brasil
- 💳 **Información bancaria localizada**: Diferentes cuentas bancarias según el país del usuario
- 📱 **Diseño responsivo**: Optimizado para móviles, tablets y desktop
- 📋 **Función copiar**: Botones para copiar información bancaria fácilmente
- 📊 **Barra de progreso**: Seguimiento visual de las donaciones
- 🎯 **Call-to-actions**: Botones para donar y compartir
- 🔒 **Privacidad**: No usa almacenamiento local, todo en memoria

## Tecnologías utilizadas

- **Next.js 14** con App Router
- **TypeScript** para type safety
- **Tailwind CSS** para estilos
- **Lucide React** para iconos
- **Geolocation API** para detección de ubicación
- **Web Share API** para compartir en redes sociales

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales
├── components/
│   ├── DonationCard.tsx    # Tarjeta de información bancaria
│   ├── ProgressBar.tsx     # Barra de progreso
│   └── CountryDetector.tsx # Detector de país
├── data/
│   └── texts.json          # Textos en español y portugués
└── hooks/
    └── useCountryDetection.ts # Hook para detectar país
```

## Instalación y configuración

1. **Clonar el repositorio**:
   ```bash
   git clone <tu-repositorio>
   cd <nombre-del-proyecto>
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**: `http://localhost:3000`

## Configuración

### Actualizar información bancaria

Edita el archivo `src/data/texts.json` para actualizar:
- Información bancaria de Uruguay
- Información bancaria de Brasil
- Información bancaria internacional
- Textos en español y portugués

### Actualizar progreso de donaciones

En `src/app/page.tsx`, modifica las variables:
```typescript
const currentRaised = 5420; // Cantidad actual recaudada
const goalAmount = 30000;   // Objetivo total
```

### Agregar imágenes

1. Coloca las imágenes en la carpeta `public/`
2. Reemplaza los placeholders en el componente principal
3. Actualiza las rutas de las imágenes

## Detección de país

El sistema detecta el país del usuario mediante:

1. **Geolocalización**: Si el usuario permite acceso a ubicación
2. **Zona horaria**: Como fallback principal
3. **Idioma del navegador**: Como último recurso

### Países soportados:
- 🇺🇾 **Uruguay**: Muestra español + cuenta BROU
- 🇧🇷 **Brasil**: Muestra portugués + cuenta Banco do Brasil  
- 🌍 **Otros**: Muestra español + cuenta internacional

## Personalización

### Colores y estilos
Modifica los colores en las clases de Tailwind CSS en los componentes.

### Textos
Todos los textos están centralizados en `src/data/texts.json` para fácil traducción.

### Funcionalidades adicionales
- Agregar más idiomas modificando el JSON y el hook de detección
- Integrar pasarelas de pago (PayPal, Stripe, etc.)
- Agregar analytics para seguimiento
- Implementar sistema de comentarios

## Deployment

### Vercel (recomendado)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Subir carpeta .next a Netlify
```

### Hosting tradicional
```bash
npm run build
npm run start
```

## Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Soporte

Si necesitas ayuda o tienes preguntas:
- Abre un issue en GitHub
- Contacta directamente a Cesar

## Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE.md](LICENSE.md) para detalles.

---

**Hecho con ❤️ para ayudar a Cesar a recuperar su movilidad**