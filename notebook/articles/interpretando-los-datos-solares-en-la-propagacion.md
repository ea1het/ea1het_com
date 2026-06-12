# Interpretando los datos solares en la propagación [Spanish version]

[LIST OF ARTICLES](./)

- **Published:** 2025-06-18
- **Last update:** 2025-06-18
- **Categories:** Propagation, Spanish

[ [This article is also available in English](/notebook/articles/how-to-read-solar-data-fo-radio-propagation-english-version) ]

Cuando miras un parte solar-terrestre, seguramente te topas con diversos valores clave, como **A-Index** y **K-Index**, entro otros valores. Estos nos indican si el campo magnético de la Tierra está tranquilo o si está siendo alterado por tormentas solares.

Para aquellas personas que tienen prisa en obtener una respuesta breve en este tema, sin demasiados detalles, el resumen práctico es el siguiente:

## Resumen práctico para personas con prisa 🙂

- Si ves muchos valores **altos en SFI, SN, 304A** y **bajos en A, K, Bz y Solar Wind**, ¡es un gran día para operar en HF!
- Por el contrario, si hay **tormentas solares, viento solar elevado o llamaradas M/X**, la propagación puede volverse difícil.

## Interpretación completa de los valores de un parte solar-terrestre

### **K-Index**

Cambios rápidos en el campo magnético

- Se mide de 0 a 9.
- **K bajo (0–2)**: El campo geomagnético está **muy tranquilo**. Es el mejor momento para operar en HF (alta frecuencia), especialmente en bandas altas como 15, 12 y 10 metros. Las señales son estables y las condiciones ideales.
- **K moderado (3–4)**: Hay **ligeras perturbaciones**, pero la propagación sigue siendo buena. Puede haber algo de ruido o señales que suben y bajan.
- **K alto (5 o más)**: Hay una **tormenta geomagnética**. Esto puede causar bloqueos temporales, mucho ruido y propagación errática. Las bandas altas sufren más, pero las bandas bajas (80 m, 40 m) pueden aguantar mejor.

### **A-Index**

Estado general del campo magnético en las últimas 24 horas

- Se mide en una escala más amplia (de 0 hasta 400).
- **A bajo (0–7)**: El campo magnético está **estable**. Esto suele coincidir con condiciones de propagación excelentes.
- **A medio (8–15)**: Condiciones **activas**, pero aún operables. Ideal para observar cómo se comportan las bandas.
- **A alto (16 o más)**: Indica **tormentas mayores** o condiciones inestables durante el día. La propagación puede ser muy impredecible.

### **SFI (Solar Flux Index)**

El Índice de Flujo Solar mide la cantidad de radiación que emite el sol en una frecuencia concreta.

- **Más de 100:** Buenas condiciones en bandas altas (20 m, 17 m, 15 m, 12 m, 10 m).
- **Menos de 70:** Las bandas altas estarán cerradas o muy flojas.
**→ Cuanto más alto, mejor para DX en bandas altas.**

### **SN (Sunspot Number)**

Es el número de manchas solares visibles. Las manchas solares aumentan la ionización de la atmósfera, lo cual **mejora la propagación**.

- **Mayor de 50:** Muy buena señal para propagación en HF.
- **Bajo o 0:** Posiblemente mala propagación.
**→ Más manchas = mejor propagación.**

### **X-Ray (Rayos X solares)**

Indica el nivel de llamaradas solares. Se clasifican como:

- **A, B, C, M, X** (de menor a mayor intensidad).
- **C:** Llamarada moderada.
- **M o X:** Pueden causar apagones de HF (blackouts) en el lado diurno de la Tierra.
**→ Cuidado si ves M o X: puede haber bloqueos temporales en HF.**

### **304A (Flujo en 304 Angstroms)**

Mide la radiación ultravioleta extrema, que afecta a la ionosfera.

- **Más de 100:** Buena ionización, ideal para la propagación.
**→ Valor alto = buenas condiciones para saltos largos (DX).**

### **Proton Flux (Ptn Flx)**

Indica cuántos protones están llegando desde el sol.

- Valores altos indican **tormentas solares** que pueden causar interferencias en HF y daños a satélites.
**→ Si es alto, la propagación puede volverse muy errática.**

### **Electron Flux (Elc Flx)**

Es la cantidad de electrones energéticos en la magnetosfera.

- **Moderado-alto:** Ayuda a la propagación en bandas altas.
- **Demasiado alto:** Puede generar **ruido o absorción**.
**→ Bueno para la propagación si no se dispara.**

### **Aurora**

Mide la actividad auroral.

- **Por debajo de 5:** Condiciones normales.
- **Más de 5:** Auroras activas que **afectan negativamente a HF**, especialmente en latitudes altas.
**→ Mucha aurora = mala propagación.**

### **Bz (componente del campo magnético interplanetario)**

Este valor indica si el campo magnético solar se está conectando con el de la Tierra.

- **Negativo (–):** Puede permitir la entrada de partículas solares, activando auroras o perturbaciones.
- **Cerca de 0 o positivo (+):** Tranquilidad.
**→ Si está muy negativo, cuidado: puede haber tormenta geomagnética.**

### **Solar Wind (viento solar)**

Velocidad del viento solar.

- **Menos de 400 km/s:** Calma.
- **400–600 km/s:** Condiciones normales, algo agitadas.
- **Más de 600 km/s:** Posible tormenta geomagnética.
**→ Cuanto más rápido, más riesgo de inestabilidad.**

### **GeoMag Field**

**Indica el estado general del campo magnético terrestre.**
Puede leerse como: `Quiet`, `Unsettled`, `Active`, `Storm`, etc.
**→ Quiet = perfecto para radio.**

### **Sig Noise Level (ruido atmosférico)**

Es el ruido base en S-units que verías en tu receptor.

- **S1–S2:** Casi sin ruido, condiciones ideales.
- **S5 o más:** Mucho ruido, te costará escuchar señales débiles.
**→ Cuanto más bajo, mejor recepción.**
