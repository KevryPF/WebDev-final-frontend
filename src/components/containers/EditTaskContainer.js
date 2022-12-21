import { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchTaskThunk, editTaskThunk } from '../../store/thunks';

const withRouter = Wrapped => props => {
  const params = useParams();
  return (
    <Wrapped
      {...props}
      params={params}
    />
  );
};

class EditTaskContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          description: "", 
          prioritylevel: "",
          completionstatus: false,
          employeeId: null, 
          redirect: false, 
          redirectId: null,
          error: ""
        };
    }

    componentDidMount() {
        //get task ID from url
        this.props.fetchTask(this.props.params.id);
        this.setState({
            description: this.props.task.description, 
            prioritylevel: this.props.task.prioritylevel,
            completionstatus: this.props.task.completionstatus,
            employeeId: this.props.task.employeeId, 
        });
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
        //Recreate the task
        let task = {
            id: this.props.task.id,
            description: this.state.description,
            prioritylevel: this.state.prioritylevel,
            completionstatus: this.state.completionstatus,
            employeeId: this.state.employeeId
        };
        await this.props.editTask(task);//Madee this await so fetchTask occurs after the task is updated
        this.setState({
          redirect: true, 
          redirectId: this.props.task.id,
          error:""
        });
      }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
      //go to single task view
        if(this.state.redirect) {
          return (<Navigate to={`/task/${this.state.redirectId}`}/>)
        }

        return (
            <form style={{textAlign: 'center'}} onSubmit={(e) => this.handleSubmit(e)}>
            <h2 style={{fontWeight: 'bold', fontSize: '20px', color: 'white'}}>
              Task Editor
            </h2>
            <label style= {{color:'white', fontWeight: 'bold'}}>Description: </label>
            <input type="text" name="description" value={this.state.description} onChange ={(e) => this.handleChange(e)}/>
            <br/>

            <label style={{color:'white', fontWeight: 'bold'}}>Priority Level: </label>
            <input type="text" name="prioritylevel" value={this.state.prioritylevel} onChange={(e) => this.handleChange(e)}/>
            <br/>
  
            <label style={{color:'white', fontWeight: 'bold'}}>Completion Status: </label>
            <input type="text" name="completionstatus" value={this.state.completionstatus} onChange={(e) => this.handleChange(e)} />
            <br/>

            <label style={{color:'white', fontWeight: 'bold',}}>Assigned EmployeeID: </label>
            <input type="text" name="employeeId" value={this.state.employeeId} onChange={(e) => this.handleChange(e)} />
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
      task: state.task,
    };
  };

const mapDispatch = (dispatch) => {
    return({
        editTask: (task) => dispatch(editTaskThunk(task)),
        fetchTask: (id) => dispatch(fetchTaskThunk(id)),
    })
}

export default withRouter(connect(mapState, mapDispatch)(EditTaskContainer));