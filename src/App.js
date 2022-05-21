import styles from "./styles/main.module.scss";
import CardItem from "./components/Card/CardItem";
import NavBar from "./components/NavBar/NavBar";
import { Fragment } from "react";
import MainContainer from "./components/UI/SubContainer/SubContainer";
import SubContainerRight from "./components/UI/SubContainer/SubContainerRight";
import SubContainerLeft from "./components/UI/SubContainer/SubContainerLeft";
import CardList from "./components/Card/CardList";
import CardList2 from "./components/Card/CardList2";
import GrowingDiv from "./components/UI/Card/GrowingDiv";
import Slideshow from "./components/UI/slideShow/SlideShow";
import Card from "./components/UI/Card2/Card";
import TopLoader from "./components/loaders/topLoader";
import { useState } from "react";
import BottumLoader from "./components/loaders/BottumLoader";
import react from "react";
import { DUMMY_DATA } from "./components/Card/CardList";
import RoundedSlider from "./components/UI/RoundedSlider/RoundedSlider";
function App() {
  const [newList, setNewList] = useState(DUMMY_DATA);
  const getNewList = (cards) => {
    setNewList([...cards]);
    return newList;
  };

  console.log(newList);
  return (
    <Fragment>
      {/* <Slideshow /> */}
      {/* <CardList /> */}
      {/* <RoundedSlider /> */}

      <div className={styles.container}>
        <TopLoader />
        <NavBar />
        <MainContainer>
          <SubContainerLeft
            mainHeader={newList[0].mainHeader}
            subHeader={newList[0].subHeader}
          />

          <SubContainerRight>
            <CardList onListChange={getNewList} />
            <BottumLoader listLength={newList.length} index={newList[0].id} />
            {/* <BottumLoader onClick={openFSM} /> */}
          </SubContainerRight>
        </MainContainer>
      </div>
    </Fragment>
  );
}

export default App;
