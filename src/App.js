import React, { Component } from "react";
import AnimalCard from "./component/animalcard/";
import Navbar from "./component/navbar";
import fish from "./fishes.json";
import "./App.css";



// To do: REFACTOR APP.JS STARTER CODE STARTING FROM BELOW COMMENTS, INCLUDE OTHER FILES TO BE IMPORTED CSS

class App extends Component{
  state={
    fish,
    currentScore: 0,
    topScore: 0
  };

  selectFish = (name) =>{
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


// render(){
//   return <div> Hello World</div>
// }

shuffle = (array) => {
  let i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array;
};



render() {
  return (
    <div>
      <Navbar 
        currentScore={this.state.currentScore}
        topScore={this.state.topScore}
      />
      <div className="cardHolder row">
            {this.state.fishes.map(fish => (
                <AnimalCard
                  key={fish.name}
                  name={fish.name}
                  image={fish.image}            
                  clickCard={this.clickCard}
                />
            ))} 
      </div>
    </div>
  );
}
}

export default App;




// }

export default App;