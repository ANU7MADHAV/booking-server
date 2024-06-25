## How to setup this project Express Typescript Project

1.

```
 npm init -y
```

2.

```
npm i -D typescript
npm i concurrently
```

3.

```
 tsc --init
```

4.

```
 Add following scripts in package.json

"scripts": {
    "build": "npx tsc",
    "watch": "npx tsc -w",
    "prestart": "npm run build",
    "start": "nodemon dist/index.js",
    "dev": "concurrently --kill-others \"npm run watch\" \"npm start\"",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

```
5. npm run dev
```
