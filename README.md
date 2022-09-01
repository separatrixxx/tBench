# Децентрализованная социальная сеть tBench

## Cначала нужно задеплойить проект на своём кошельке, а то по дефолту мой стоит

- Для начала удалите папку `./out` и `./neardev`
- Потом в `./src/config.js` в строке `const CONTRACT_NAME = process.env.CONTRACT_NAME || 'contract.separatrix.testnet';` измените адрес кошелька NEAR
- Установите NEAR API `npm i near-api-js`
- Далее введите `near dev-deploy` - ключи будут храниться в папке `./neardev`
- `near deploy [accountId] [wasmFile] [initFunction] [initArgs] [initGas] [initDeposit]` - первым аргументов укажите свой адрес, вторым файл `./out/main.wasm`
- Ну и `yarn start`

**В принципе, этого можно не делать, а просто запустить проект командой `yarn start`**
b
