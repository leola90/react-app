import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import SearchForm from "./components/SearchForm";
import SearchContainer from "./components/SearchContainer"
import API from "./utils/API";

class App extends Component {
  
  state = {
    search: "",
    names: [],
    employees: [],
    searchName: "",
    searchData: [],
  };
  
  // When this component mounts, search the Random API for random employees
  componentDidMount() {
    API.getRandomUser()
    .then(res => {
      const employees = res.data.results;
      this.setState({ employees });
      console.log(employees);  
    })
    .catch(err => console.log(err));
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };


  
  searchEmployee() {
    //Map employees to names array
    const Names = this.state.employees.map(employee => employee.name.first) ;
    this.setState({ Names }); 
    console.log(Names);

    //Search the name array from the search input
    const searchName = Names.find(name => name.includes(this.state.search));
    this.setState({ searchName }); 
    console.log(searchName);

    //If the search input matches the name array, set results to that person 
    if (this.state.search === searchName) {
      const results = searchName;
      this.setState({ results });
    }
    // else {
    //   alert("Try Again!")
    // }
    this.displayResult();
  }
  
  displayResult() {
    //Get the searchData
    const searchData = this.state.employees.find(employee => employee.name.first.includes(this.state.search));
    this.setState({ searchData });
    console.log(searchData);

    const picture = searchData.picture.large;
    this.setState({ picture })

    const first = searchData.name.first;
    this.setState({ first });

    const last = searchData.name.last;
    this.setState({ last });
  };


  // When the form is submitted, search the Random API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployee();

  };

  // Map over this.state.employees and render a EmployeeCard component for each employee object
  render() {
    return (
      <Wrapper>
        <SearchForm
          names={this.state.names}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
         <SearchContainer 
          picture={this.state.picture}
          phone={this.state.searchData.phone} 
          email={this.state.searchData.email} 
          first={this.state.first}
          last={this.state.last}
         />
        <Title>Employees List</Title>
        {this.state.employees.map(employee => (
          <EmployeeCard
            id={employee.id.value}
            key={employee.login.uuid}
            image={employee.picture.large}
            firstName={employee.name.first}
            lastName={employee.name.last}
            phone={employee.phone}
            email={employee.email}
            dob={employee.dob.date}
          />
        ))}
      </Wrapper>
    );
  }

}

export default App;
