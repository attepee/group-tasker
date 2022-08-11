# group-tasker
### NOTE!
>Not yet completely functional

Web app made with Expo and React native that allows users to create random groups from a list of participants and assign tasks to the created groups. You can try it in [here](https://attepee.github.io/group-tasker/) 

The app uses [React Navigation](https://reactnavigation.org/), [React Native Async Storage](https://react-native-async-storage.github.io/async-storage/), [react-native-uuid](https://www.npmjs.com/package/react-native-uuid), [react-native-get-random-values](https://www.npmjs.com/package/react-native-get-random-values) and [Entypo pictograms by Daniel Bruce](http://entypo.com/) from [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons)

## Developing

1. Fork the repository and clone it with `git clone <repository-here>`
2. Navigate to `src` and run `npm install`
3. Run `expo start --web` to start the development server

## Deploying 

1. Open `package.json`and edit the  `"homepage": "http://{username}.github.io/{repo-name}"`to include correct information for you
2. run `npm run deploy`
3. Setup Github Pages from the repository's settings
