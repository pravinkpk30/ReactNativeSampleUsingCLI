This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Create the project using CLI

You can use React Native Community CLI to generate a new project. Let's create a new React Native project called 'ReactNativeSampleUsingCLI'

Refer - https://reactnative.dev/docs/getting-started-without-a-framework?package-manager=npm 

```bash
# using cli
npx @react-native-community/cli@latest init ReactNativeSampleUsingCLI
```

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

# When you work on the navigation concept please go through the given link to install the required dependency

- link https://reactnavigation.org/docs/getting-started/
- Please walkthrough the link to know more about navigation

## Installation

To Install the required packages in your React Native project:

```bash
npm install @react-navigation/native
```

## Installing dependencies into a bare React Native project

```bash
npm install react-native-screens react-native-safe-area-context
```

## If you're on a Mac and developing for iOS, you need to install the pods (via Cocoapods) to complete the linking.

```bash
npx pod-install ios
```

#  To install native navigation stack type install below dependency

- Above installation are mandatory to work with navigation link in iOS or Andriod. When it comes to the React native navigation stack type you can go with below dependency

```bash
npm install @react-navigation/native-stack
```

# To apply drawer navigation use below dependency

- Use this link for required dependency https://reactnavigation.org/docs/drawer-navigator/

```bash
npm install @react-navigation/drawer
```

- If you have a bare React Native project, in your project directory, run:

```bash
npm install react-native-gesture-handler react-native-reanimated
```

# Refer below link for bottom tab navigation

- https://reactnavigation.org/docs/bottom-tab-navigator

```bash
npm install @react-navigation/bottom-tabs
```

