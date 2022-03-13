# Colyseus Playground

This repository tries to reproduce a bug reported in https://github.com/colyseus/colyseus/issues/510.

## Setup

Run `yarn` in project's root folder.

### Running

#### with TypeScript Node

Run `yarn start:ts-node`

#### with Vite Node

Run `yarn start:vite-node`

Open `localhost:2567` in your browser.

## Bug description

**[Colyseus #510](https://github.com/colyseus/colyseus/issues/510)**

When declaring default values for properties in a state definition class, these properties are not synced with clients properly.
This repository shows similar problem when using `@type` decorator. Here's a demo without TypeScript: https://codesandbox.io/s/dazzling-mountain-hwzfxh.

### Correct behaviour

After opening `localhost:2567` in your browser. You should see `State` heading, and a state preview which should look like:

```json
{ "property": "2022-03-13T11:34:33.362Z", "number": 1647171273362 }
```

### Current behaviour

After opening `localhost:2567` in your browser. You should see `State` text ands an empty state preview, which means server state is not synced with client.
