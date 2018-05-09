import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {LinearGradient} from 'expo';

const DestinationCard = (props) => {
		const item = props.data;
		return (
				<View style={styles.position}>
						<Image style={styles.image} source={{uri: item.imageUrl}}/>
						<Text style={styles.bounds}>{item.outboundId} - {item.inboundId}</Text>
						<Text style={styles.viewers}>{item.viewersCount} viewing this</Text>
						<LinearGradient colors={['#46b1f6', '#7188f4']} style={styles.startingPrice}>
								<Text style={styles.priceText}>
										Now from <Text style={styles.priceValue}> {item.currencySymbol}{item.startingPrice}</Text>
								</Text>
						</LinearGradient>
				</View>
		)
};

const styles = StyleSheet.create({
		position: {
				backgroundColor: '#fff',
				margin: 10,
				padding: 30,
				shadowColor: '#000',
				shadowOffset: {width: 0, height: 5},
				shadowOpacity: 0.2,
				shadowRadius: 15,
				elevation: 1,
				marginTop: 25
		},
		image: {
				flex: 1,
				height: 400,
				borderWidth: 2,
				borderColor: '#575757'
		},
		bounds: {
				fontSize: 34,
				paddingTop: 13,
				color: '#333',
				fontWeight: '400'
		},
		viewers: {
				paddingTop: 15,
				paddingBottom: 20,
				color: '#656565',
				fontSize: 18,
		},
		startingPrice: {
				padding: 25,
				borderRadius: 30,
				overflow: 'hidden',
				alignItems: 'center'
		},
		priceText: {
				color: '#cbe6f7',
				fontSize: 16
		},
		priceValue: {
				fontSize: 18,
				color: '#d6edff',
				fontWeight: '500'
		}
});

export default DestinationCard;