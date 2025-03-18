# DirectCodes - Interfaz de Registro

Este proyecto implementa una interfaz de registro con modo oscuro/claro, notificaciones toast, selección de idioma y menús desplegables, siguiendo fielmente un diseño de referencia.

## Características

- **Layout exacto al diseño de referencia**
- **Modo Oscuro/Claro** con toggle personalizado
- **Notificaciones Toast** que aparecen en la esquina superior izquierda
- **Selector de Idiomas** con banderas en formato circular
- **Menú desplegable** para "Product page"
- **Formulario de registro** completo con validación
- **Componentes reutilizables** de alta calidad
- **Diseño completamente responsive**

## Instalación

1. Clona este repositorio
2. Instala las dependencias:

```bash
npm install
```

3. Para las banderas de los países, instala:

```bash
npm install react-country-flag
```

4. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

## Estructura de componentes

- **ui/** - Componentes de interfaz reutilizables

  - `Button.tsx` - Botón con múltiples variantes
  - `Input.tsx` - Campo de entrada con soporte para iconos y errores
  - `ThemeToggle.tsx` - Toggle para cambiar entre modo oscuro/claro
  - `LanguageSelector.tsx` - Selector de idioma con banderas
  - `Toast.tsx` - Componente de notificación
  - `Divider.tsx` - Separador de contenido
  - `DropdownMenu.tsx` - Menú desplegable

- **auth/** - Componentes de autenticación

  - `SignUpForm.tsx` - Formulario de registro completo

- **context/** - Proveedores de contexto
  - `ThemeContext.tsx` - Contexto para gestionar el tema
  - `ToastContext.tsx` - Contexto para gestionar notificaciones

## Personalización

### Temas

El modo oscuro/claro está implementado usando Tailwind CSS. Puedes personalizar los colores editando el archivo `tailwind.config.js`.

### Notificaciones

Las notificaciones toast están implementadas a través del `ToastContext`. Puedes mostrar una notificación desde cualquier componente importando el hook `useToast`:

```jsx
import { useToast } from "../context/ToastContext";

function MyComponent() {
  const { showToast } = useToast();

  const handleAction = () => {
    showToast("success", "Acción completada exitosamente", "Éxito");
  };

  return <button onClick={handleAction}>Mostrar Notificación</button>;
}
```

## Licencia

MIT
