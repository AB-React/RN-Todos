import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Modal,
  Image,
  StyleSheet,
} from "react-native";

const TodoInputView = (props: TodoInputViewProps) => {
  const [enteredTodoText, setEnteredTodoText] = useState<string>("");

  const [isValid, setIsValid] = useState<boolean>(false);

  const handleTodoTextChange = (val: string): void => {
    setEnteredTodoText(val);
    setIsValid(!!val && val.length < 50);
  };

  function addTodoHandler() {
    props.onAddGoal(enteredTodoText);
    setEnteredTodoText("");
    // props.onClose();
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/goal.png")} />
        <TextInput
          placeholder="Enter a todo!"
          style={styles.textInput}
          onChangeText={handleTodoTextChange}
          value={enteredTodoText}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Close!" color="#f31282" onPress={props.onClose} />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Todo!"
              color={isValid ? "#cbcacc" : "#bc0acc"}
              onPress={isValid ? addTodoHandler : () => {}}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TodoInputView;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingTop: "20%",
    alignItems: "center",
    padding: "5%",
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "100%",
    alignContent: "center",
    padding: 16,
    borderRadius: 8,
  },
  buttonsContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "40%",
    alignContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

interface TodoInputViewProps {
  onAddGoal(todoText: string): void;
  visible: boolean;
  onClose(): void;
}
