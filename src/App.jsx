import { Provider } from 'react-redux';
// import Todo from './component/todo/Todo';
// import Stores from './component/store/Store';
// import TodoList from './component/todo/TodoList';
import Post from './post/allPost/Post';
import store from './post/store/Store';
import CreatePost from './post/allPost/CreatePost';
import { Routes, Route } from 'react-router-dom';
import EditPost from './post/allPost/EditPost';
import EditSave from './post/allPost/EditSave';
import Layout from './post/route/Layout';

function App() {
  return (
    <div className="text-center">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Post />} />
            <Route path="editpost">
              <Route index element={<CreatePost />} />
              <Route path=":editId" element={<EditPost />} />
              <Route path="editsave/:editId" element={<EditSave />} />
            </Route>
          </Route>
        </Routes>
        {/* <Todo />
        <TodoList /> */}
      </Provider>
    </div>
  );
}

export default App;
