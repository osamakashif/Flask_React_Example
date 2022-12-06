# Flask_React_Example
Basic Application showing how to use React with Flask - with both web and mobile versions.

## Backend/Servers

There is one main server: `server.py`

This is accessed by `react_web_localhost_server.py` for the web/ReactJS version of the application, and by `react_native_server.py` for the mobile/React Native (Expo) version of the application. The `ip_addr` variable in `react_native_server.py` may need to be specified as the IP address given when running `npm start` in the React Native directory.

The web version utilisises the proxy being set to localhost in the web version's `package.json` file.

The mobile version has to adjust to the IP address to accomodate how the network works for connecting using Expo.

## Frontend

For the web version, go to the `flask_tester` directory and run `npm start`.

For the mobile version, go to the `FlaskReactNativeApp` directory and run `npm start`, then scan the QR code on the Expo app. If you are using an emulator, then instead of `npm start` run `npm run android` for an Android emulator, with the emulator already running.

## Running

### Node modules

1. Go to the `flask_tester` directory and run `npm install`.
2. Go to the `FlaskReactNativeApp` directory and run `npm install`.

### Running servers and applications:

Assuming all the setup is correct and the IP is set up in the mobile server file.

1. Go to the `flask_server` directory and run `python server.py` or `python3 server.py` (whichever is applicable).
2. Go to the `flask_server` directory and run `python react_web_localhost_server.py` or `python3 react_web_localhost_server.py` (whichever is applicable) (for web version).
3. Go to the `flask_server` directory and run `python react_native_server.py` or `python3 react_native_server.py` (whichever is applicable) (for mobile version).
4. Go to the `flask_tester` directory and run `npm start` (for the web version).
5. Go to the `FlaskReactNativeApp` directory and run `npm start`, then scan the QR code on the Expo app. If you are using an emulator, run `npm run android` for an Android emulator, with the emulator already running (for the mobile version).


## Screenshots

Web (ReactJS):
![image](https://user-images.githubusercontent.com/63721736/205909567-d497906b-5a69-4b9a-af9a-77cb17b19113.png)

Mobile (React Native):
![Screenshot_1670328940](https://user-images.githubusercontent.com/63721736/205910223-a1886845-34a0-40a5-9c6f-ee1664799cb5.png)
