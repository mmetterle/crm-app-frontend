import React from 'react';
import './crmForm.css';
import { Button, Form, FormControl, FormGroup, ButtonToolbar, Table, Panel, Accordion} from 'react-bootstrap';

export default class CRMForm extends React.Component {

   constructor(props) {
      super(props);
		
      this.state = {
         data: 'React Form'
      }

      this.updateState = this.updateState.bind(this);
   };

   updateState(e) {
      this.setState({data: e.target.value});
   }
   
   handleSubmit(e) {
	  e.preventDefault();
	  var author = React.findDOMNode(this.refs.author).value.trim();
	  var text = React.findDOMNode(this.refs.text).value.trim();g
	  if (!text || !author) {
		  return;
	  }
	  this.props.onCommentSubmit({author: author, text: text});
	  React.findDOMNode(this.refs.author).value = '';
	  React.findDOMNode(this.refs.text).value = '';
	  return;
   }
   
   render() {
	  var isLogin = true;
	  
      return (
         <div className="center2">
			<Form horizontal bordered bsSize="small" onSubmit={this.handleSubmit} responsive>			
					<Logo className="center" src="http://goo.gl/fx5Zwn"/>
					<Content className="center"/>
					<FormGroup validationState="success" width="100px">
						<FormControl placeholder="Enter User Name" onChange={this.updateState} />
						<FormControl.Feedback />
					</FormGroup>
					<FormGroup>
						<FormControl placeholder="Enter password" onChange={this.updateState} />
						<FormControl.Feedback />
					</FormGroup>
						<FormGroup validationState="error">
							<FormControl placeholder="Enter your first name" onChange={this.updateState} />	
							<FormControl.Feedback />
						</FormGroup>
						<FormGroup validationState="success">
							<FormControl placeholder="Enter your last name" onChange={this.updateState} />	
							<FormControl.Feedback />
						</FormGroup>
					<ButtonToolbar>
						<Button bsSize="small">Login</Button>
						<Button bsSize="small">Register</Button>
					</ButtonToolbar>			
			</Form>
         </div>

      );
   }
}

class Logo extends React.Component {
    render(){
        return <img className="center" {...this.props} />;
    }
}

Logo.propTypes = {
	src: React.PropTypes.string.isRequired
};

class Input extends React.Component {
    render() {
        return <input className="default-input" {...this.props} type="text" />;
    }
}

class Content extends React.Component {

   render() {
      return <h3 className="center1">CRM Login Form</h3>
   }
}

class Example extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: true
    };
  }

  render() {
    return (
      <div>
		<Accordion>
			<Panel collapsible eventKey="1" header="Panel heading">
				<Table responsive>
					<thead>
					<tr>
						<th>#</th>
						<th>Table heading</th>
						<th>Table heading</th>
						<th>Table heading</th>
						<th>Table heading</th>
						<th>Table heading</th>
						<th>Table heading</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
					</tr>
				</tbody>
			</Table>
        </Panel>
		</Accordion>
      </div>
    );
  }
}