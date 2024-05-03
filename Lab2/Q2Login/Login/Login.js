import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import style from '../style';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={style.container}>
                <Text style={style.header}>Welcome!</Text>
                <Text style={{paddingTop: 10, fontSize: 30}}>Sign in to continue</Text>
                <TextInput style={style.input} placeholder='Email or phone number' />
                <TextInput style={style.input} placeholder='Password' secureTextEntry />
                <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={{textAlign: 'center', paddingTop: 10, fontSize: 15}}>Forgot Password?</Text>
               <Text style={style.text} >Or you can also</Text>
               <TouchableOpacity style={style.bottomButton}>
                    <Text style={style.bottomText}>Sign in with Google</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default LoginScreen;