import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { SIZES } from '../../../constants'
import styles from './tabs.style'

const TabButton = (props) => (
  <TouchableOpacity 
    style={styles.btn(props.name, props.activeTab)}
    onPress={props.onHandleSearchType}
  >

    <Text style={styles.btnText(props.name, props.activeTab)}>{props.name}</Text>
  </TouchableOpacity>
);

const Tabs = ({tabs, activeTab, setActiveTab}) => {
  return (
    <View style={styles.container }>
      <FlatList 
        data={tabs}
        renderItem={({item}) => (
          <TabButton 
            name={item}
            activeTab = {activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        contentContainerStyle={{columnGap: SIZES.small/2}}
      />
    </View>
  )
}

export default Tabs