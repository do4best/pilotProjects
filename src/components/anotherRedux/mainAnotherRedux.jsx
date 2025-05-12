import { Provider } from 'react-redux'
import {store} from './store'
import Counter from './Counter';
function MainAnotherRedux() {
    return (<>
    <Provider store={store}>
    <h1>Hello Redux</h1>
    <Counter/>
    </Provider>
    </>  );
}

export default MainAnotherRedux;