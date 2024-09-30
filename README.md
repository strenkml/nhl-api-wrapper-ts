# nhl-api-wrapper-ts

A wrapper for the NHL API. Used https://github.com/Zmalski/NHL-API-Reference as a reference for the API.

There may be endpoints that are missing. If you find any, please open an issue or a PR.

## Installation

```bash
npm install nhl-api-wrapper-ts
```

## Usage

```typescript
import nhlApi from "nhl-api-wrapper-ts";

const playerInfo = await nhlApi.players.getPlayerInfo({ playerId: 8478402 });
console.log(playerGameLog);
```
