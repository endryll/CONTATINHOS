import {
  useFonts,
  Ubuntu_700Bold,
  Ubuntu_500Medium,
  Ubuntu_400Regular
} from '@expo-google-fonts/ubuntu'

import { Home } from '@/app/home';

export default function App() {
  useFonts({
    Ubuntu_700Bold,
    Ubuntu_500Medium,
    Ubuntu_400Regular
  })

  if(!fontsLoaded){
    return
  }
  
  return <Home />
}
