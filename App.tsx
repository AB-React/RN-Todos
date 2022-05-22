import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, StyleSheet, Button, Image } from "react-native";
import TodoInputView from "./components/TodoInputView";
import TodoListView from "./components/TodoListView";

import { Todo } from "./types/todo";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const startAddTodoHandler = () => {
    setModalIsVisible(true);
  };

  const endAddTodoHandler = () => {
    setModalIsVisible(false);
  };

  const handleAddTodo = (todoText: string) => {
    setTodoList((state) => [
      ...state,
      { title: todoText, key: Math.floor(Date.now()) },
    ]);
  };

  const handleDeleteTodo = (todo: Todo) => {
    setTodoList((currentTodoList) =>
      currentTodoList.filter((t) => t.key !== todo.key)
    );
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new Todo"
          color="#a065ec"
          onPress={startAddTodoHandler}
        />
        <TodoInputView
          visible={modalIsVisible}
          onAddGoal={handleAddTodo}
          onClose={endAddTodoHandler}
        />
        <TodoListView todoList={todoList} onDelete={handleDeleteTodo} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
