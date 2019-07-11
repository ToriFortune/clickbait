import React, { Component } from "react";
import AnimalCard from "./component/animalcard/";
import Wrapper from "./component/wrapper";
import Title from "./component/title"
import fish from "./fish.json";



// To do: REFACTOR APP.JS STARTER CODE STARTING FROM BELOW COMMENTS, INCLUDE OTHER FILES TO BE IMPORTED CSS

class App extends Component{
  state={
    fish,
    currentScore: 0,
    topScore: 0
  };

  selectCard = (name) =>{
    let thisFish= this.state.fishes.filter(fish=>fish.name=== name)[0],
    currentScore=this.state.currentScore +1;
    if (thisFish.clicked)
    {
      this.gameOver(false, name)
    }
    else {
      if (!thisFish.clicked && currentScore===12) return this.gameOver(true);
      thisFish.clicked=true;
      this.setState(
        {
          currentScore: currentScore,
          topScore: (currentScore > this.state.topScore) ? currentScore : this.state.topScore,
          fishes: this.shuffle(this.state.fishes)
        }
      );
    }
  };

gameOver=(win,name)=>{
  var message = (win)? "Awesome job!": `Try again,${name}, has been picked already;`
alert (message);
this.state.fishes.filter(fish=>fish.clicked===true).map(fish=>fish.clicked =false);
this.setState(
  {
    currentScore:0,
    fishes: this.shuffle(this.state.fish)
  }
)

}

// to review https://javascript.info/task/shuffle look for shuffle script





































































//   handleSelect = id=>{
//     if(this.state.pick.indexOf() === -1){
//       this.state.pick.push (id)
//       this.setState({score: this.state.score +1, })
//     }
//   }
// }























// function App() {
//   return (
//     <Wrapper>
//       <Title>Fish List</Title>
//       <AnimalCard
//         name={fish[0].name}
//         image={fish[0].image}
//         tagline= {fish[0].tagline}
//               />
//       <AnimalCard
//         name={fish[1].name}
//         image={fish[1].image}
//         tagline= {fish[1].tagline}
//       />
//       <AnimalCard
//         name={fish[2].name}
//         image={fish[2].image}
//         tagline= {fish[2].tagline}
//       />
//         <AnimalCard
//         name={fish[3].name}
//         image={fish[3].image}
//         tagline= {fish[3].tagline} 
//       />
//         <AnimalCard
//         name={fish[4].name}
//         image={fish[4].image}
//         tagline= {fish[4].tagline}
//       />
//         <AnimalCard
//         name={fish[5].name}
//         image={fish[5].image}
//         tagline= {fish[5].tagline}

//       />
//         <AnimalCard
//         name={fish[6].name}
//         image={fish[6].image}
//         tagline= {fish[6].tagline}

//       />
//         <AnimalCard
//         name={fish[7].name}
//         image={fish[7].image}
//         tagline= {fish[7].tagline}
//       />
//         <AnimalCard
//         name={fish[8].name}
//         image={fish[8].image}
//         tagline= {fish[8].tagline}
//       />
//       <AnimalCard
//         name={fish[9].name}
//         image={fish[9].image}
//         tagline= {fish[9].tagline}
//       />
//         <AnimalCard
//         name={fish[10].name}
//         image={fish[10].image}
//         tagline= {fish[10].tagline}
//       />
//         <AnimalCard
//         name={fish[11].name}
//         image={fish[11].image}
//         tagline= {fish[11].tagline}
//       />



//     </Wrapper>
//   );
// }

// export default App;














































