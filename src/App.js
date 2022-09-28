import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

const UselessTextInput = () => {
  // const [text, onChangeText] = React.useState("origin");
  // const [number, onChangeNumber] = React.useState(null);
  // const [value, setValue] = React.useState();
  const [isVisible, setIsVisible] = useState(true);
  //const onPress = () => setIsVisible(false)
  const [serviseList, setServiceList] = useState([{ service: "" }]);

  const handleServiceAdd = () => {
    setServiceList([...serviseList, { service: "" }]);
  };
  const handleServiceRemove = (index) => {
    const list = [...serviseList];
    list.splice(index, 1);
    setServiceList(list);
  };
  const onClick = () => {
    setIsVisible((isVisible) => !isVisible);
  };
  return (
    <SafeAreaView>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <Text style={{ fontSize: 20 }}>Services</Text>
        <Button
          onPress={onClick}
          title={!isVisible ? "Добавить точку" : "Не добавлять"}
        />
        {isVisible &&
          serviseList.map((singleService, index) => (
            <>
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  margin: 3
                }}
              >
                <TextInput
                  onFocus={() => console.log("onfocus")}
                  placeholder="enter text"
                  style={{ backgroundColor: "#ccc", padding: 2, margin: 10 }}
                ></TextInput>
                {serviseList.length > 1 && (
                  <View style={{ marginHorizontal: 5 }}>
                    <Button
                      onPress={() => {
                        handleServiceRemove(index);
                      }}
                      color="#232323"
                      title="Удалить"
                    ></Button>
                  </View>
                )}
                {serviseList.length - 1 === index && serviseList.length < 4 && (
                  <View style={{ marginHorizontal: 5 }}>
                    <Button
                      onPress={handleServiceAdd}
                      color="red"
                      style={{ margin: 5 }}
                      title="Добавить"
                    ></Button>
                  </View>
                )}
                {/* </View>

                <View style={{ margin: 5 }}> */}
              </View>
            </>
          ))}
      </View>

      {/* <View style={{ flex: 1 }}>
        <View style={{flexDirection:"row", backgroundColor:"#ccc" }}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
         <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={{backgroundColor:"red"}}>Добавь точку</Text>
      </TouchableOpacity>
        </View>
        {!isVisible ?<View style={{flexDirection:"row", backgroundColor:"#ccc" }}><TextInput
            style={styles.input}
            onChangeText={setValue}
            value={value}
            placeholder="Добавить точку"
            keyboardType="numeric"
          />
          <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={{backgroundColor:"red"}}>Удалить</Text>
      </TouchableOpacity>
          </View> : false}

        <View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="destination"
            keyboardType="numeric"
          />
        </View>
       
       <Text>{value}</Text>
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  button: {
    alignItems: "center",
    paddingVertical: 20
  }
});

export default UselessTextInput;
