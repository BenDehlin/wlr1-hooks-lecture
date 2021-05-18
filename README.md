## What I did to set up this project
1. ran `npx create-react-app wlr1-hooks-lecture` and cd'd into it
2. ran `npm i axios react-router-dom`
3. created a `./src/routes.js` file to take care of our routing (and imported it to `./src/App.js`)
4. Created 4 pages do demonstrate hooks with, `./src/components/Counter.js`, `./src/components/Form.js`, `./src/components/List.js`, `./src/components/Pokemon.js`
5. Created a Header that would route us to the various example components

## What order should I view these files?
1. `./src/components/Counter.js`
2. `./src/components/Form.js`
3. `./src/components/List.js`
4. `./src/components/Pokemon.js`
5. if you want to see an example of a custom hook `./src/hooks/useAxios.js` and `./src/components/ListUsingCustomHooks.js`

## What is the ClassComponents folder?
ClassComponents is a folder that has a class version of each of the files we created using hooks so you can compare them side by side.