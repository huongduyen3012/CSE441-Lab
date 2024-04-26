import { Text, View } from "react-native";

export default function Sumdigit(props) {
    number = props.number;

    if (!number || number.length === 0) {
        return (
            <View>
                <Text style={{ fontSize: 20, color: "blue" }}>Sum: N/A</Text>
            </View>
        );
    }
    var firstDigit = parseInt(number.charAt(0));
    var lastDigit = parseInt(number.charAt(number.length - 1));
    var sum = firstDigit + lastDigit;

    return (
        <View>
            <Text style={{ fontSize: 20, color: "blue" }}>The sum of last and first digit : {sum} </Text>
        </View>
    )
}