import { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import NewEmployeeView from '../views/NewEmployeeView';
import { addEmployeeThunk } from '../../store/thunks';

class NewEmployeeContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          lastname: "", 
          firstname: "",
          department: "",
          redirect: false, 
          redirectId: null,
          error:""
        };
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
      event.preventDefault();
        if(this.state.description==="" || this.state.prioritylevel==="" ){
          this.setState({error:"Description and Priority Level fields are required"});
          return;
        }
        let employee = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            department: this.state.department,
        };
        let newEmployee = await this.props.addEmployee(employee);
        this.setState({
          redirect: true, 
          redirectId: newEmployee.id,
          error: ""
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
      //go to single task view
        if(this.state.redirect) {
          return (<Navigate to={`/employee/${this.state.redirectId}`}/>)
        }
        return (
          <NewEmployeeView 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit}     
            error={this.state.error} 
          />
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        addEmployee: (employee) => dispatch(addEmployeeThunk(employee)),
    })
}

export default connect(null, mapDispatch)(NewEmployeeContainer);