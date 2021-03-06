import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import _ from 'lodash';
import { getUsers, contains } from './api/index';
import SupportScreen from '../screens/SupportScreen'
export class FlatListItem extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        loading: false,
        data: [],
        error: null,
        query: "",
        fullData: [],
      };
    }
  
    componentDidMount() {
      this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
      this.setState({ loading: true });
  
      getUsers(20, this.state.query)
        .then(users => {
          this.setState({
            loading: false,
            data: users,
            fullData: users
          });
        })
        .catch(error => {
          this.setState({ error, loading: false });
        });
    };

    searchSkill = skill => {
      const formatQuery = skill.toLowerCase();
      const data = _.filter(this.state.fullData, user => {
        return contains(user, formatQuery);
      });
      this.setState({query: formatQuery, data});
    };

    
    renderSeparator = () => {
      return (
        <View
          style={{
            height: 1,
            width: "86%",
            backgroundColor: "#CED0CE",
            marginLeft: "14%"
          }}
        />
      );
    };
  

    renderHeader = () => {
      return <SearchBar placeholder="Search Skill Here..." lightTheme round onChangeText={this.searchSkill}/>;
    };
  
    renderFooter = () => {
      if (!this.state.loading) return null;


      return (
        <View
          style={{
            paddingVertical: 20,
            borderTopWidth: 1,
            borderColor: "#CED0CE"
          }}
        >
          <ActivityIndicator animating size="large" />
        </View>
      );
    };

    
    //gonext() {
    //  this.props.navigation.navigate('SupportScreen');
    //}

    render() {
/*
      const Flat = (props) => {
        const { naivgate } = props.navigation;
        goToNextScreen = () => {
          return navigate('Supp');
        }
      }

      
*/
      //const { navigate } = this.props.navigation;
      return (
        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <ListItem
                roundAvatar
                title={`${item.name}`}
                subtitle={item.contact}
                //avatar={{ uri: item.picture.thumbnail }}
                containerStyle={{ borderBottomWidth: 0 }}
              />
            )}
            keyExtractor={item => item.contact}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}
           // onRefresh={this.handleRefresh}
           // refreshing={this.state.refreshing}
            //onEndReached={this.handleLoadMore}
            //onEndReachedThreshold={50}
          />
        </List>
      );
    }
  }
/*
const Detail = (props) =>{
  const { navigate } = props.navigation;
  return(
    <View><Text>Detail Screen</Text></View>
  );
}*/
/*
const App = StackNavigator({
  Flats: {screen: FlatList},
  Supp: {screen: Support},
})

  export default createSwitchNavigator({
    main: FlatListItem,
    secondscreen: stack,
  });*/
  
  export default FlatListItem;
  