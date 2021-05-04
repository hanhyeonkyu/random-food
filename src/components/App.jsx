import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const foodList = [
  "금정(문정)",
  "남원추어탕(문정)",
  "니트포",
  "더집밥",
  "돈마루김치찌개",
  "땡큐꼬마김밥(문정법조단지점)",
  "만날",
  "몰리노 커피",
  "문정한방삼계탕",
  "바스버거(문정점)",
  "백체김치찌개(문정점)",
  "버거킹(문정역점)",
  "부산아지매국밥(문정테라타워점)",
  "북창동순두부(문정점)",
  "빠네빠네",
  "삼돈이(문정법조타운점)",
  "섬맛의공방,제주이야기",
  "소소반167(문정)",
  "송가네국수(문정)",
  "송강",
  "수유리혼밥왕",
  "순남시래기(문정테라타워점)",
  "슈퍼커피(문정점)",
  "신기소",
  "신동보성",
  "아리아리국수",
  "얌샘김밥(문정역점)",
  "엘티육오(LT65)",
  "연안식당(문정점)",
  "열둘칼국수",
  "옐로우팟",
  "요기뎅",
  "우주라이크(문정)",
  "육전면사무소(문정점)",
  "이디야커피(문정테라타워점)",
  "이태리부대찌개(문정법조타운점)",
  "이화수전통육개장(문정법조타운점)",
  "일방통행국물떡볶이화덕피자",
  "잇쇼니본점",
  "장수본가해장국(문정)",
  "촨치마라탕",
  "카츠젠(문정법조타운점)",
  "키친사이",
  "탄탄면공방(문정역점)",
  "파리바게트(문정컬처밸리점)",
  "포온스 수제버거",
  "호미정",
  "흥도식당",
  "CAFE하비비",
];

function RandomFood({ idx, title }) {
  return (
    <fieldset>
      <p>{`후보 ${idx}`}</p>
      <h2>{title}</h2>
      <p></p>
    </fieldset>
  );
}

function randint(x, y) {
  let rand = Math.random() * (y - x + 1);
  return Math.floor(rand) + x;
}

let tmp = foodList;
const rnd1 = randint(0, tmp.length - 1);
tmp.splice(rnd1, 1);
const rnd2 = randint(0, tmp.length - 1);
tmp.splice(rnd2, 1);
const rnd3 = randint(0, tmp.length - 1);

function Landing() {
  const [titles, setTitles] = React.useState([
    foodList[rnd1],
    foodList[rnd2],
    foodList[rnd3],
  ]);
  function rndFood() {
    let tmp = foodList;
    const rd1 = randint(0, tmp.length - 1);
    tmp.splice(rnd1, 1);
    const rd2 = randint(0, tmp.length - 1);
    tmp.splice(rnd2, 1);
    const rd3 = randint(0, tmp.length - 1);
    setTitles([foodList[rd1], foodList[rd2], foodList[rd3]]);
  }

  return (
    <>
      <h1>식권대장 랜덤음식</h1>
      <div style={{ margin: 10 }}>
        <button onClick={rndFood}>랜덤 돌리기</button>
      </div>
      {titles &&
        titles.map((row, idx) => {
          return <RandomFood idx={idx + 1} title={row} />;
        })}
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/random-food">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
