import React from "react";
import {View} from "react-native";
import ButtonComponent from "../components/Button";

const HomeScreen = () => {
    const handlePress = () => {
        console.log("Hello World");
    };
    return (
        <View
            style={[
                styles.container,
                {flexDirection: 'row'},
            ]}>
            <View style={{flex: 1, backgroundColor: 'powderblue'}}>
            <ButtonComponent onPress={handlePress} />
            <ButtonComponent onPress={handlePress} />
            <ButtonComponent onPress={handlePress} />
            </View>
            <View style={{flex: 1, backgroundColor: 'skyblue'}}>
            <ButtonComponent onPress={handlePress} />
            <ButtonComponent onPress={handlePress} />
            <ButtonComponent onPress={handlePress} />
            </View>
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        padding: 20,
    },
};

export default HomeScreen;
