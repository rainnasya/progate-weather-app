import React, { useState } from "react";
import CustomTextInput from "./customTextInput";
import { View, StyleSheet, Button } from "react-native";


const WeatherSearch = ({searchWeather}) => {
    const [location, setLocation] = useState('')

    return (
        <View style={styles.buttonWrapper}>
            <CustomTextInput
                placeholder="Search the weather of your city"
                numberOfLines={1}
                Text={location}
                onChange={setLocation}
            />
            <View>
                <Button 
                    title="Search"
                    onPress={() => searchWeather(location)}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    buttonWrapper: {
      marginTop: 20,
    },
})

export default WeatherSearch