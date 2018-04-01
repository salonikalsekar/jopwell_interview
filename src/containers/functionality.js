import React from 'react';

import { licenses } from '../github_api/licenses';

import Input_Text from '../components/Input_Text';
import Input_CheckBox from '../components/Input_CheckBox';
import Input_DropDown from '../components/Input_DropDown';
import Results from './results';


class Search extends React.Component {
  constructor() {
    super();

    this.inputText = this.inputText.bind(this);
    this.submitInput = this.submitInput.bind(this);
    this.checkBoxInput = this.checkBoxInput.bind(this);
    this.starInput = this.starInput.bind(this);
    this.undoForm = this.undoForm.bind(this);
    this.state = {
      
                    data: '',
                    license: '',
                    starData: '',
                    inc_forked: false,
                    submitted: false,
                    inText: false,
                    licenses: [],
                    err_msg: ''
                  }

  }

  componentDidMount() {
    licenses()
      .then(data => this.setState({
        licenses: data
        }))
      .catch(err => console.error('ERROR'))
  }

//resetting the form
  undoForm() {
    this.setState({
      data: '',
      starData: null,
      license: '',
      inText: false
    })
  }

//input function for text
  inputText(key) {
    return (e) => {
      const state = {}
      state[key] = e.target.value
      this.setState(state)
    }
  }

//input function for checkbox
  checkBoxInput(e) {
    this.setState({
      inc_forked: !this.state.inc_forked
    })
  }

//input function for star which also checks (usign regex) whether the input 
//is a number and throws an error accordingly

  starInput(e) {
    if (!this.state.starData.match(/^(\s*|\d+)$/g))
    this.setState({
      err_msg: 'Please provide a number'
    })
    else this.setState({
      err_msg: ''
    })
  }

//After clicking the submit button
  submitInput(e) {
    this.setState({
      submitted: true,
      inText: true
    })
    e.preventDefault()
  }


//retrieving the data
  retrieveData() {
    return <Results {...this.state} undoForm={this.undoForm}/>
  }

  render() {
    const { 
      
            inputText,
            submitInput,
            checkBoxInput,
            starInput } = this

    const { 
            data,
            starData,
            license,
            inc_forked,
            submitted,
            licenses,
            err_msg 
          } = this.state


    return (
      <div style={{width: '100%'}}>
        <div className="search_wrapper">
          <form onSubmit={submitInput}>
            <Input_Text label="Text" onChange={inputText('data')} value={data}/>
            <Input_Text label="Stars" onChange={inputText('starData')} starD={starInput} value={starData}/>
            <Input_DropDown label="License" onChange={inputText('license')} value={license} licenses={licenses}/>
            <Input_CheckBox label="Include Forked" onChange={checkBoxInput} checked={inc_forked}/>

            <button type="submit" value="Submit">
                    SEARCH
            </button>

            <p style={{color: 'red'}}>{err_msg}</p>
            
          </form>
          
        </div>
        {submitted && this.retrieveData()}

      </div>
    )
  }

}

export default Search;
