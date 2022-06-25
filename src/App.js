import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import style from "./index.scss"
const App = (props) => {
    return (
        <div className={style.container}>
            <Header/>
            <Content/>
        </div>
    )
};

export default App;
