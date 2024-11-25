import { Pressable, StyleSheet } from "react-native";
import { View, Text, SafeAreaView, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";
import Feather from '@expo/vector-icons/Feather';
import Yoga from "./yoga";
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

            <View style={styles.yogaSessionContainer}>
                <RecentYogaSession/>
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
                        <Image tintColor={connectColor} style={{height: '40%', width: '40%'}} source={require('../../assets/images/yoga-mat.png')}></Image>

                        {/* <Feather name="bluetooth" size={50} color={connectColor} /> */}
                    
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

function RecentYogaSession(){
    return(
        <View >
            <Text style={{textAlign: 'center', marginTop: 10, fontWeight: 800, fontSize: 20}}>Recent Yoga Session</Text>
            <View>
                <YogaSessionCard/>
                <YogaSessionCard/>
            </View>
        </View>
    );
}

function YogaSessionCard(){
    return(
        <View style={styles.sessionCard}>
            <View style={styles.sessionCardText}>
                <Text style={{fontSize: 20, fontWeight: 600, color: 'white', letterSpacing: 1}}>Relaxation Yoga</Text>
                <Text style={{color: 'white'}}>Date: 2024-11-24</Text>
                <Text style={{color: 'white'}}>Duration: 30 min</Text>
            </View>
            <View style={styles.sessionCardButton}>
                <Pressable style={styles.viewDetailButton}>
                        <Text style={{textAlign: 'center', color: 'white'}}>View Details</Text>
                </Pressable>
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
        backgroundColor: '#ECDFCC',
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
    backgroundColor: '#3C3D37',
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
    yogaSessionContainer:{
        backgroundColor: '#ECDFCC',
        height: '36.5%',
        marginHorizontal: 10,
        marginTop: 20,
        borderRadius: 20,
        elevation: 10
    },
    sessionCard:{
        height:'40%',
        marginTop: 10,
        backgroundColor:'#3C3D37',
        flexDirection: 'row',
        marginHorizontal:10
    },
    sessionCardText:{
        width: '50%',
        marginVertical: '5%',
        justifyContent: 'center',
        marginLeft: 10
    },
    sessionCardButton:{
        width: '30%',
        marginVertical: '5%',
        marginRight: 10,
        justifyContent: 'center',
        marginLeft: 30

    },
    viewDetailButton:{
        height:'90%',
        alignItems:'center',
        justifyContent: 'center',
        paddingHorizontal: 5,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'white'
    }
    
});
