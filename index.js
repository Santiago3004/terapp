import { AppRegistry } from 'react-native';
import App from './src/navigation/App'; // Asegúrate de que esta ruta esté correcta y coincida con la ubicación de App.tsx
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
