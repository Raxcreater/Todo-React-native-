import {
  Alert,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const Todo = () => {
  const create = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/todoTask', {
        newTask: newTask,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  const deleteApi = async () => {
    try {
      const response = await axios.delete('http://127.0.0.1:5000/deleteTask', {
        _id: newTask,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  const insert = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/todoTask', {
        newTask: newTask,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  const [task, setTask] = useState([]);
  const [newTask, setnewTask] = useState('');
  const [EditIndex, setEditIndex] = useState();
  const [isEdit, setisEdit] = useState(false);

  const createTwoButtonAlert = index =>
    Alert.alert('Delete', 'Are you sure you want to delete ?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Delete', onPress: () => Delete(index)},
    ]);

  const addTask = () => {
    setTask([...task, newTask]);
    setnewTask('');
    // insert();
  };
  const Delete = index => {
    const aa = [...task];
    console.log(task, 'dfdddddddddddddsdfffffff');
    aa.splice(index, 1);
    setTask(aa);
    // deleteApi();
  };
  const Edit = (item, index) => {
    setEditIndex(index);
    setisEdit(true);
    setnewTask(item);
  };
  const EditTask = () => {
    setTask(task.map((item, index) => (index == EditIndex ? newTask : item)));
    setnewTask('');
    setisEdit(false);
  };
  const list = ({item, index}: any) => {
    return (
      <View style={styles.listView}>
        <Text style={styles.tasksave}>{item}</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => Edit(item, index)}>
            <Image
              source={require('../../Assets/Images/writing.png')}
              style={styles.ehitIcon2}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => createTwoButtonAlert(index)}>
            <Image
              source={require('../../Assets/Images/trash.png')}
              style={styles.ehitIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  console.log(task, '.........');
  return (
    <View>
      <View style={styles.topView}>
        <TextInput
          placeholder="Add Task"
          style={styles.addtask}
          onChangeText={setnewTask}
          value={newTask}
        />
        <TouchableOpacity
          style={styles.touchPlus}
          onPress={() => addTask(task)}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>

      <View>
        <FlatList data={task} renderItem={list} />
      </View>

      <Modal visible={isEdit}>
        <View style={{flex: 1}}>
          <View style={styles.topView}>
            <TextInput
              placeholder="Add Task"
              style={styles.addtask}
              onChangeText={setnewTask}
              value={newTask}
            />
            <TouchableOpacity
              style={styles.touchPlus}
              onPress={isEdit ? EditTask : addTask}>
              <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },

  addtask: {
    borderBottomWidth: 1,
    fontSize: 22,
    flex: 1,
    marginRight: 16,
  },
  touchPlus: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus: {
    fontSize: 35,
    color: 'black',
  },
  listView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginHorizontal: 12,
    borderWidth: 0.7,
    borderRadius: 10,
    padding: 8,
  },
  tasksave: {
    fontSize: 23,
    color: 'grey',
    paddingLeft: 7,
  },
  ehitIcon: {
    height: 22,
    width: 22,
    marginRight: 8,
    marginTop: 3,
  },
  ehitIcon2: {
    height: 22,
    width: 22,
    marginRight: 18,
    marginTop: 3,
  },
});
