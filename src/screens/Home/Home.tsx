import { Text, View, TextInput, TouchableOpacity, FlatList, Alert} from "react-native"
import { styles } from "./Home.Styles"
import { useState } from "react"

import { Participant } from "../../components/Participant/Participant"

export function Home() {
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('')
    
    function handleParticipantAdd() {
        if (participants.includes(participantName)) {
            return Alert.alert("Participante Existe", "Já existe um participante com esse nome!")
        }

        setParticipants(prevSate => [...prevSate, participantName])
        setParticipantName('')
    }

    function handleParticipantRemove(name: string) {
        Alert.alert("Remover", "Deseja realmente remover o participante " + name + "?", [
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
            },
            {
                text: 'Não',
                style: 'cancel',
            }
        ])
        console.log(`Voce removeu esse participante ${name}`)
    }

    return (  
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do Evento
            </Text>

            <Text style={styles.eventDate}>
                Sexta, 4 de Novembro de 2022.
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do Participante"
                    placeholderTextColor={'#6b6b6b'}
                    onChangeText={setParticipantName}
                    value={participantName}
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonTxt}>+</Text>
                </TouchableOpacity>
            </View>

            <FlatList 
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                <Participant 
                    key={item}
                    name={item}
                    onRemove={() => handleParticipantRemove(item)}
                />)}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.emptyList}>
                        Adicione os participantes à sua lista!
                    </Text>
                )}
            />
        </View>
  )
}