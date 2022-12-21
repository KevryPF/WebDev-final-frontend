import { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchEmployeeThunk, editEmployeeThunk } from '../../store/thunks';

const withRouter = Wrapped => props => {
  const params = useParams();
  return (
    <Wrapped
      {...props}
      params={params}
    />
  );
};

class EditEmployeeContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          firstname: "",
          lastname: "", 
          department: "",
          redirect: false, 
          redirectId: null,
          error: ""
        };
    }

    componentDidMount() {
        //get employee ID from url
        this.props.fetchEmployee(this.props.params.id);
        this.setState({
            firstname: this.props.employee.firstname, 
            lastname: this.props.employee.lastname,
            department: this.props.employee.department,
        });
      }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();
        if(this.state.firstname==="" || this.state.lastname==="" ){
          this.setState({error:"All fields are required"});
          return;
        }
        //Recreate the employee
        let employee = {
            id: this.props.employee.id,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            department: this.state.department,
        };
        await this.props.editEmployee(employee);
        this.setState({
          redirect: true, 
          redirectId: this.props.employee.id,
          error:""
        });
      }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
      //go to single employee view
        if(this.state.redirect) {
          return (<Navigate to={`/employee/${this.state.redirectId}`}/>)
        }

        return (
            <form style={{textAlign: 'center'}} onSubmit={(e) => this.handleSubmit(e)}>
            <h2 style={{fontWeight: 'bold', fontSize: '20px', color: 'white'}}>
              Employee Editor
            </h2> 
            <label style= {{color:'white', fontWeight: 'bold'}}>First name: </label>
            <input type="text" name="firstname" value={this.state.firstname} onChange ={(e) => this.handleChange(e)}/>
            <br/>

            <label style= {{color:'white', fontWeight: 'bold'}}>Last name: </label>
            <input type="text" name="lastname" value={this.state.lastname} onChange ={(e) => this.handleChange(e)}/>
            <br/>

            <label style= {{color:'white', fontWeight: 'bold'}}>Department: </label>
            <input type="text" name="department" value={this.state.department} onChange ={(e) => this.handleChange(e)}/>
            <br/>

            <button type="submit">
              Submit
            </button>
            {this.state.error!=="" && <p>{this.state.error}</p>}
          </form>

        )
    }
}

// map state to props
const mapState = (state) => {
    return {
      employee: state.employee,
    };
  };

const mapDispatch = (dispatch) => {
    return({
        editEmployee: (employee) => dispatch(editEmployeeThunk(employee)),
        fetchEmployee: (id) => dispatch(fetchEmployeeThunk(id)),
    })
}

export default withRouter(connect(mapState, mapDispatch)(EditEmployeeContainer));