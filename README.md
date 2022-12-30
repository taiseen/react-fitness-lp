> 29 - Dec - 2022

# React Fitness - Landing Page

## Technology Used :
* Vite
* React 
* TypeScript
* Tailwind CSS


yarn add -D tailwindcss postcss autoprefixer


## Configuration tasks :

1. go to ==> `vite.config.ts` file & past this...
    * for convenient to import files

```js
import path from 'path';

resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
},
```

2. go to ==> `tsconfig.json` file & past this...
    * for convenient to import files

```js
"paths" : {
    "@/*" : ["./src/*"],
},
```


## Learning Context :
1. tailwind documentation extension (`ctrl + alt + t`)
2. vit & ts config for shot file name import 
3. config tailwind for custom colors, fonts, scree sizes & images...