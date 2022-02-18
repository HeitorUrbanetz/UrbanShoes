import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Shoes from '../Shoes';

export default function Footer() {
    return (
        <View>
            <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>
            <View style={{flexDirection: 'row'}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{marginHorizontal: 10}}>
                        <Shoes img={require('../../assets/1.png')} cost='110,99'>
                            Nike Air Max Day
                        </Shoes>
                    </View>
                    <View style={{marginHorizontal: 10}}>
                        <Shoes img={require('../../assets/5.png')} cost='355,33'>
                            Nike Downshifter 10
                        </Shoes>
                    </View>
                    <View style={{marginHorizontal: 10}}>
                        <Shoes img={require('../../assets/4.png')} cost='898,50'>
                            Nike Air Max Day
                        </Shoes>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%'
    }
});