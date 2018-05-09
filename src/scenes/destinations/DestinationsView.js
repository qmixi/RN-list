import React, { Component } from 'react';
import { FlatList, StyleSheet, View, ActivityIndicator, Text } from 'react-native';

import { connect } from 'react-redux';

import * as actions from '../../actions';
import DestinationCard from './components/DestinationCard';

class DestinationsView extends Component {

	componentDidMount() {
		this.props.fetchDestinations();
	}

	prepareData() {
		this.props.destinations.forEach(item => item.key = item.id);
	}

	checkErrors() {
		if (this.props.error) {
			alert(this.props.error);
		}
	}

	render() {
		this.checkErrors();
		this.prepareData();
		return (
			<View style={styles.container}>
				{!this.props.loading ? <FlatList data={this.props.destinations} renderItem={({ item }) => <DestinationCard data={item} />}
				/> : <ActivityIndicator size="large" color="#46b1f6" />}
				{!this.props.loading && this.props.destinations.length === 0 && <Text style={styles.emptyList}>Destinations list is empty.</Text>}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 5,
		paddingTop: 22,
		justifyContent: 'center',
		backgroundColor: '#fafafa'
	},
	emptyList: {
		padding: 10,
		textAlign: 'center',
		color: '#46b1f6'
	}
});

function mapStateToProps(state) {
	return { ...state.destinations }
}

export default connect(mapStateToProps, actions)(DestinationsView);
