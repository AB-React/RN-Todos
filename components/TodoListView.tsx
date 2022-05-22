import { View, FlatList, StyleSheet } from "react-native";
import { Todo } from "../types/todo";
import TodoItemView from "./TodoItemView";

const TodoListView = (props: TodoListViewProps) => {
  return (
    <View style={styles.todoListContainer}>
      <FlatList
        alwaysBounceVertical={false}
        data={props.todoList}
        renderItem={(itemData) => {
          return (
            <TodoItemView todoItemData={itemData} onDelete={props.onDelete} />
          );
        }}
      />
    </View>
  );
};

export default TodoListView;

const styles = StyleSheet.create({
  todoListContainer: {
    flex: 8,
  },
});

interface TodoListViewProps {
  todoList: Todo[];
  onDelete(todo: Todo): void;
}
