import { Alert, View, SectionList } from "react-native"
import { Feather } from '@expo/vector-icons'
import * as Contacts from 'expo-contacts'
import { styles } from './styles'
import { Input } from "@/app/components/input"
import { theme } from "@/theme"
import { useState, useEffect } from "react"
import { Contact, ContactProps } from "@/app/components/contact"

type SectionListDataProps = {
    title: string
    data: ContactProps
}

const [contact, setContacts] = useState<SectionListDataProps[]>([])

export function Home(){
    const [contacts, setContacts] = useState([])

    async function fetchContacts() {
        try {
            const { status } = await Contacts.requestPermissionsAsync()
            if (status === Contacts.PermissionStatus.GRANTED){
                const { data } = await Contacts.getContactsAsync()
                console.log(data)
            }

        } catch(error) {
            console.log(error)
            Alert.alert("Contatos", "Não foi possível carregar os contatos...")
        }
    }

    useEffect(() => {
        fetchContacts()
    },[])
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Input style={styles.input}>
                    <Feather name="search" size={16} color={theme.colors.gray_300}>
                    </Feather>
                    <Input.Field 
                    placeholder="Pesquisar pelo nome..." onChangeText={setName} value={name}
                    />
                    <Feather name="x" size={16}color={theme.colors.gray_300} 
                    onPress={() => setName("")}>
                    </Feather>
                </Input>
            </View>
            <SectionList
                sections={[{title: "R", data: [{id: "1", name: "Heloísa"}] }]}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Contact contact={{
                        name: "Roberto",
                        image: require("@/assets/avatar.jpeg")
                    }} />    
                )}
                renderSectionHeader = {({ section }) => (<Text style={styles.section}>{section.title}</Text>)}
                contentContainerStyle = {styles.contentList}
            />
        </View>
    )
}