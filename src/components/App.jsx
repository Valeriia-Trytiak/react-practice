import { Component } from "react";
import { QuizList } from "./QuizList/QuizList";
import initialQuizItems from "../data.json"
import { SearchBar } from "./SearchBar/SearchBar";
import { QuizForm } from "./QuizForm/QuizForm";
import { prettyFormat } from "@testing-library/react";

export class App extends Component {

  state = {
    quizItems: initialQuizItems,
    filters: {
      topic:"",
      level:"all"
    }
  };

  deleteQuizItem = (quizId)=> {
  this.setState(prevState => ({
    quizItems:prevState.quizItems.filter(quiz => quiz.id !== quizId)
  }))
  }

  changeFilter = (key, value) => {
    this.setState(prevState =>({
      filters:
      {
        ...prevState.filters,
        [key]: value,
      },

    }));
  };
// Придумать еще один вариант реализации функционалa
  getVisibleItems = ()=> {
    const { quizItems, filters } = this.state;
    return quizItems.filter(quiz => {
      const topicFilter = filters.topic.toLowerCase();
      const resultTopic = quiz.topic.toLowerCase().includes(topicFilter);
      if (filters.level === "all") {
        return resultTopic
       }
       return resultTopic && quiz.level === filters.level;
    });
  }

  render() {
    const { filters } = this.state;
    const visibleItems= this.getVisibleItems();
    return <div>
    <QuizForm/>
    <SearchBar 
    filters={filters} 
    onChangeFilter ={this.changeFilter}/>
    <QuizList 
    items = {visibleItems}
    onDelete = {this.deleteQuizItem} />
    </div>
  }

};