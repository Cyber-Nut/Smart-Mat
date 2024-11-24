import { Pressable, StyleSheet } from "react-native";
import { View, Text, SafeAreaView, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";
import Feather from '@expo/vector-icons/Feather';
export default function HomeScreen(){
    const [isConnect, setIsConnect] = useState<boolean>(false);
    return(
        <SafeAreaView style={{flex:1, backgroundColor:'#000000'}}>
            <View style={styles.headerImageContainer}>
                <HeaderImage username="Divyash"/>
            </View>

            <View style={styles.matConnectContainer}>
                <MatConnect connectStatus={isConnect}/>
            </View>
            
        </SafeAreaView>
    );
}


function HeaderImage({username}:{username: string}){
    return(
        <View style={{flex: 1}}>
             <LinearGradient
                colors={['rgba(0, 0, 0, 0.9)', 'transparent']}
                style={styles.gradientTop}
            />
            <View style={styles.headerImageHeading}>
                <Text style={styles.greetingText}>Welcome {username}</Text>
            </View>
            <Image style={styles.headerImage} source={require('../../assets/images/yoga background extended.jpg')}/>
            <LinearGradient
                
                colors={['transparent','rgba(0,0,0,1)']}
                style={styles.gradientBottom}
            />
        </View>
    );
}


function MatButton({ text }: { text: string }) {
    return (
      <Pressable style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      </Pressable>
    );
  }

function MatConnect({connectStatus}:{connectStatus: boolean}){
    let connectColor = 'red';
    let connectText = 'Disconnected';
    let buttontext = 'Connect'
    if(connectStatus === false){
        connectColor = 'red';
        connectText='Disconnected';
        buttontext = 'Connect'
    }else{
        connectColor= 'green';
        connectText='Connected';
        buttontext='Disconnect';
    }
    return(
        <View>
            <View style={styles.matInfoContainer}>

                <View style={styles.matStatusContainer}>
                    
                        <Feather name="bluetooth" size={50} color={connectColor} />
                    
                        <Text style={{marginTop: 15, fontWeight: 600}}>{connectText}</Text>
                </View>

                <View style={styles.matModelContainer}>
                    <View style={styles.deviceInfo}>
                        <Text style={{fontWeight: 600, marginRight: 2}}>
                            Device: 
                        </Text>
                        <Text >
                            Smart Yoga Mat Pro
                        </Text>
                    </View>
                    <View style={styles.deviceInfo}>
                        <Text style={{fontWeight: 600, marginRight: 2}}>
                            Model:
                        </Text>
                        <Text >
                            SYMP2024
                        </Text>
                    </View>
                    <View style={styles.deviceInfo}>
                        <Text style={{fontWeight: 600, marginRight: 2}}>
                            Firmware Version: 
                        </Text>
                        <Text >
                            1.2.3
                        </Text>
                    </View>
                    <View style={styles.deviceInfo}>
                        <Text style={{fontWeight: 600, marginRight: 2}}>
                            Battery Level:  
                        </Text>
                        <Text >
                            75%
                        </Text>
                    </View>
                </View>

            </View>
            <View style={styles.matButtonContainer}>
                <MatButton text={buttontext}/>
                <MatButton text='Start Yoga'/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerImageContainer:{
        height: '30%',
        width: '100%',
        backgroundColor:'blue'
    },
    headerImage:{
        width: '100%',
        flex: 1,
        resizeMode:'cover',
    },
    headerImageHeading:{
        marginTop: 20,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        zIndex: 3, // Ensure text is above the image
    },
    greetingText:{
        color: 'white', 
        fontWeight: 600,
        fontSize: 24
    },
    gradientTop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '40%', // Adjust height as needed
        zIndex: 2
    },
    gradientBottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '40%', // Adjust height as needed
        zIndex: 2
    },
    
    matConnectContainer:{
        backgroundColor: 'grey',
        height: '25%',
        marginHorizontal: 10,
        marginTop: 20,
        borderRadius: 20,
        elevation: 10
    },
    matInfoContainer:{
        height:'70%',
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    matButtonContainer:{
        height: '25%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom:10,
    },
    matStatusContainer:{
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center'
        },
    matModelContainer:{
        width: '50%',
        justifyContent: 'center'
    },
    deviceInfo:{
        flexDirection: 'row',
        marginTop: 5
    },
    buttonContainer: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 4,
    width: '30%',
    },
    button: {
    width: '100%',
    backgroundColor: '#800080',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    elevation: 5, // Add elevation for a 3D effect
    },
    buttonText: {
    fontWeight: 600,
    color: 'white',
    textAlign: 'center',
    // Add responsive font size or adjust as needed
    fontSize: 16,
    },
    
});
