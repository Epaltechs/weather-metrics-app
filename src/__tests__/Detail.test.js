import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { screen } from '@testing-library/react';
import Detail from '../Components/Detail/Detail';
import store from '../Redux/configureStore';

test('Home should render correctly', () => {
  const body = document.createElement('body');
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Detail />
      </BrowserRouter>
    </Provider>,
    body,
  );
  expect(screen).toMatchSnapshot();
});
