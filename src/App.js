import React, { Component } from "react";
import Wrapper from "./component/Wrapper"
import Card from "./component/Card"
import Header from "./component/Header";
import cards from "./cards.json";
import "./App.css";



// To do: REFACTOR APP.JS STARTER CODE STARTING FROM BELOW COMMENTS, INCLUDE OTHER FILES TO BE IMPORTED CSS

// class App extends Component{
//   state={
//     cards,
//     currentScore: 0,
//     topScore: 0
//   };

  class App extends Component {
    // Setting this.state.cards to the cards json array
    state = {
      cards,
      score: 0,
      topScore: 0
    };
  
    gameOver = () => {
      if (this.state.score > this.state.topScore) {
        this.setState({topScore: this.state.score}, function() {
          console.log(this.state.topScore);
        });
      }
      this.state.cards.forEach(card => {
        card.count = 0;
      });
      const msg = (`Nice attempt, try again! :( \nscore: ${this.state.score}`);
      alert(msg);
      this.setState({score: 0});
      return true;
    }
  
    clickCount = id => {
      this.state.cards.find((o, i) => {
        if (o.id === id) {
          if(cards[i].count === 0){
            cards[i].count = cards[i].count + 1;
            this.setState({score : this.state.score + 1}, function(){
              console.log(this.state.score);
            });
            this.state.cards.sort(() => Math.random() - 0.5)
            return true; 
          } else {
            this.gameOver();
          }
        }
      });
    }
  // Map over this.state.cards and render a fishCard component for each fish object
    render() {
      return (
        <Wrapper>
          <Header score={this.state.score} topScore={this.state.topScore}>Click Bait</Header>
          {this.state.cards.map(card => (
            <Card
              clickCount={this.clickCount}
              id={card.id}
              key={card.id}
              image={card.image}
            />
          ))}
        </Wrapper>
      );
    }
  }
  
  export default App;
  





  
// gameOver=(win,name)=>{
//   var message = (win)? "Awesome job!": `Try again,${name}, has been picked already;`
// alert (message);
// this.state.cards.filter(fish=>fish.clicked===true).map(fish=>fish.clicked =false);
// this.setState(
//   {
//     currentScore:0,
//     cards: this.shuffle(this.state.fish)
//   }
// )

// }


// //   gameOver = ()=>{
// //     if (this.state.currentScore>this.state.topScore){
// //       this.setState({topScore:this.state.currentScore}, function(){

// //       });
// //     }
// //   }
// // this.state.cards.forEach(card=>{
// //   card.count=0;
// // });












//   selectFish = (name) =>{
//     let thisFish= this.state.cards.filter(fish=>fish.name=== name)[0],
//     currentScore=this.state.currentScore +1;
//     if (thisFish.clicked)
//     {
//       this.gameOver(false, name)
//     }
//     else {
//       if (!thisFish.clicked && currentScore===12) return this.gameOver(true);
//       thisFish.clicked=true;
//       this.setState(
//         {
//           currentScore: currentScore,
//           topScore: (currentScore > this.state.topScore) ? currentScore : this.state.topScore,
//           cards: this.shuffle(this.state.cards)
//         }
//       );
//     }
//   };

// // to review https://javascript.info/task/shuffle look for shuffle script


// // render(){
// //   return <div> Hello World</div>
// // }

// shuffle = (array) => {
//   let i = 0
//     , j = 0
//     , temp = null

//   for (i = array.length - 1; i > 0; i -= 1) {
//     j = Math.floor(Math.random() * (i + 1))
//     temp = array[i]
//     array[i] = array[j]
//     array[j] = temp
//   }
//   return array;
// };







// render() {
//   return (
//     <Wrapper>
//       <Header score={this.state.score} highscore={this.state.highscore}>Click Bait</Header>
//       {this.state.cards.map(card => (
//         <AnimalCard
//           clickCount={this.clickCount}
//           id={fishcards.id}
//           key={fishcards.id}
//           image={fishcards.image}
//         />
//       ))}
//     </Wrapper>
//   );
// }
// }

// export default App;










// // render() {
// //   return (
// //     <div>
// //       <Navbar 
// //         currentScore={this.state.currentScore}
// //         topScore={this.state.topScore}
// //       />
// //       <div className="cardHolder row">
// //             {this.state.cards.map(fish => (
// //                 <AnimalCard
// //                   key={fish.name}
// //                   name={fish.name}
// //                   image={fish.image}            
// //                   clickCard={this.clickCard}
// //                 />
// //             ))} 
// //       </div>
// //     </div>
// //   );
// // }
// // }

// // export default App;




// // // }

