import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./Participant.Styles";

type Props = {
    name: string;
    onRemove: () => void;
}

export function Participant(props: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>

            <TouchableOpacity style={styles.button} onPress={props.onRemove}>
                <Text style={styles.buttonTxt}>-</Text>
            </TouchableOpacity>
        </View>
    )
}