---
title: Spiderq devlog 1
date: 2026-03-17
author: LuisDavid01
---
Hace unos meses que empecé a trabajar en el proyecto SpiderQ, al principio era una idea para un proyecto de la universidad,
pero luego decidi que era algo que me gustaria desarrollar mas a fondo y que podría ser útil para otros.

## ¿Qué es SpiderQ?

SpiderQ es un agente de inteligencia artificial autonomo que se encarga de buscar información en internet sobre un target, su principal
objetivo es ayudar a pentesters web a encontrar vulnerabilidades en sus sistemas. Ese es mi objetivo, me pregunto si sera posible combinar 
buenas herramientas de ciberseguridad con inteligencia artificial con buenas practicas cutting edge.

## DEMO
La demo actual es la version de desarrollo que utiliza bun.
<video src="/example.webm" autoplay loop muted playsinline></video>

## ¿Qué hace hasta el momento?
Actualmente el agente funciona correctamente interpretando y analizando en tiempo real el output de FFuF, nmap decidiendo
de forma autonoma cambiar de approach y probando distintos angulos para descubrir información con el API de OpenAI en la fase de pruebas, 
tengo mis propias opiniones sobre la inteligencia artificial, por lo que
no confiaria en que las herramientas puedan ejecutar comandos de forma arbitraria (intente evitarlo lo mas que pude) 
o hacer busquedas en internet o poder leer archivos del sistema sin guias claras. Por simplicidad, tuve que recurrir 
a permitir correr comandos en el sistema operativo por lo que recomiendo usar la herramienta en un sandbox,
si alguno tiene alguna sugerencia para mejorar ese aspecto estoy muy feliz de recibirla.

### Caracteristicas
- Crea un wordlist para ser usado en FFuF la herramienta de reconocimiento escrita en Go.
- Integra FFuF como herramienta del agente.
- Integra Nmap para OSINT.
- Integra WhoIs.
- Estrategia de context window para mantener al agente enfocado.
- Integrar SQLite para persistir el agente 100% local.

## ¿Qué mas ha cambiado?
En la fase mas de pruebas, estoy usando [bun](https://bun.com/) y un monorepo con la interfaz separada en el cliente
anterior que usaba commander y era un cli muy sencillo, ahora estoy usando ink para crear la TUI siendo el mismo
framework que usa Codex y Claude Code. La razon de esto es que el manejar estado por medio de commander se me complico
demasiado debido a lo reactivo que debe ser la interfaz por lo que ink me facilito las cosas aunque aun estoy aprendiendo
a usarlo por ahora claude esta haciendo un buen trabajo 👍.


## ¿Para quien es útil?
Actualmente el agente esta en fase de pruebas, por lo que si alguien quiere usarlo y quiere ayudarme a mejorarlo con
feedback de algun profesional en ciberseguridad, contactame. Porfavor.

## ¿Como funciona el API del agente?
Basicamente el ejemplo que muestro lo simple que es la interfaz del agente,
el paquete no esta disponible en npm si se lo preguntan.

```typescript
import { runAgent, tools } from "@spiderq/core";
import type { AIMessage } from "@spiderq/core/types";
// el mensaje del usuario 
const message = 'Dame una estrategia de reconocimiento para x target';

// el agente ejecuta el workflow de forma autonoma
const response = await runAgent({message, tools});

// el agente se ejecuta en un bucle hasta contestar la pregunta del usuario
console.log(response);
```

## ¿Que hay para el futuro?
Tengo varias ideas como agregar subagentes, hacer una UI mas amigable,
agregar mas tools relevantes para OSINT y generar reportes profesionales,
multi modelo, soportar modelos locales son algunas de las ideas que tengo y estoy muy emocionado por
ver como avanza la inteligencia artificial en el futuro!!

cualquier feedback es bienvenido y si quieres colaborar puedes hacerlo en el repositorio del proyecto.
Si eres pentester y quieres probar la herramienta hablemos!! [spiderq.tech](https://spiderq.tech)

