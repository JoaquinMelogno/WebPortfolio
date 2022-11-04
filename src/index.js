import ReactDOM  from "react-dom/client";
import App from './app.jsx'
import './index.css'


const container = document.getElementById('root')

const root = ReactDOM.createRoot(container);

root.render(<App name="Saeloun blog" />);