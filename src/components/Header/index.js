import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { MotiView, MotiText } from 'moti'

//Aqui vou manipular minha status Bar

//CurrenteHight só é reconhecido se estiver no android e ios nao,
//entao faço a verificação, se receber é porque estou no android e dou um 22
//e se não eu estou no ios e vai ser 64

const statusBarHight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ name }) {
    return (
        <View style={styles.container}>

            <MotiView
                style={styles.content}
                from={{
                    translateY: -150,
                    opacity: 0,
                }}
                animate={{
                    translateY: 0,
                    opacity: 1,
                }}
                transition={{   //tempo que  texto vai descer na tela
                    type: 'timing',
                    duration: 800,
                    delay: 300
                }}
            >
                <MotiText
                    style={styles.username}
                    from={{
                        translateX: -300
                    }}
                    animate={{
                        translateX: 0
                    }}
                    transition={{
                        type:"timing",
                        duration:800,
                        delay:800
                    }}
                >
                    {name}
                </MotiText>

                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                    <Feather name='user' size={27} color="#FFF" />
                </TouchableOpacity>
            </MotiView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8000ff',
        paddingTop: statusBarHight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44
    },
    content: {
        flex: 1,  //pego  o tamanho inteiro da tela
        alignItems: 'center',   //meio da tela
        flexDirection: 'row',    //um ao lado do outro
        justifyContent: 'space-between', ////espaçamento entre eles
    },
    username: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    },
    buttonUser: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255,0.55)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2
    }
})
