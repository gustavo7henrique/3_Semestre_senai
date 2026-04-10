import { ScrollView } from "react-native-web";
import Aula01 from "./src/components/Aula01";
import Aula02 from "./src/components/Aula02";

export default function App() {
  return (
    <ScrollView style={{ flex: 1, width: '100%', backgroundColor: '#fff' }}>
      <Aula01 />
      <Aula02 />
    </ScrollView>
  )
}
