import {
  View,
  Text,
  StyleSheet,
  ListRenderItemInfo,
  Pressable,
} from "react-native";
import { Todo } from "../types/todo";

const TodoItemView = (props: TodoItemViewProps) => {
  const handleTodoItemPress = () => {
    props.onDelete(props.todoItemData.item);
  };
  return (
    <View style={styles.todoItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={handleTodoItemPress}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.todoItemText}>
          {props.todoItemData.item.title} - {props.todoItemData.item.key}
        </Text>
      </Pressable>
    </View>
  );
};

export default TodoItemView;

const styles = StyleSheet.create({
  todoItem: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  todoItemText: {
    color: "white",
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
});

interface TodoItemViewProps {
  todoItemData: ListRenderItemInfo<Todo>;
  onDelete(todo: Todo): void;
}
