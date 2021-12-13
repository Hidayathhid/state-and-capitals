import {Component} from 'react'

import './index.css'

const stateAndCapitalsList = [
  {
    id: 'AMARAVATI',
    capitalDisplayText: 'Amaravati',
    state: 'Andhra Pradesh',
  },
  {
    id: 'ITANAGAR',
    capitalDisplayText: 'Itanagar',
    state: 'Arunachal Pradesh',
  },
  {
    id: 'DISPUR',
    capitalDisplayText: 'Dispur',
    state: 'Assam',
  },
  {
    id: 'PATNA',
    capitalDisplayText: 'Patna',
    state: 'Bihar',
  },
  {
    id: 'RAIPUR',
    capitalDisplayText: 'Raipur',
    state: 'Chhattisgarh',
  },
  {
    id: 'PANAJI',
    capitalDisplayText: 'Panaji',
    state: 'Goa',
  },
  {
    id: 'GANDHINAGAR',
    capitalDisplayText: 'Gandhinagar',
    state: 'Gujarat',
  },
  {
    id: 'CHANDIGARH',
    capitalDisplayText: 'Chandigarh',
    state: 'Haryana',
  },
  {
    id: 'SHIMLA',
    capitalDisplayText: 'Shimla',
    state: 'Himachal Pradesh',
  },
  {
    id: 'SRINAGAR',
    capitalDisplayText: 'Srinagar',
    state: 'Jammu and Kashmir',
  },
  {
    id: 'RANCHI',
    capitalDisplayText: 'Ranchi',
    state: 'Jharkhand',
  },
  {
    id: 'BENGALURU',
    capitalDisplayText: 'Bengaluru',
    state: 'Karnataka',
  },
  {
    id: 'TRIVANDRUM',
    capitalDisplayText: 'Trivandrum',
    state: 'Kerala',
  },
  {
    id: 'BHOPAL',
    capitalDisplayText: 'Bhopal',
    state: 'Madhya Pradesh',
  },
  {
    id: 'MUMBAI',
    capitalDisplayText: 'Mumbai',
    state: 'Maharashtra',
  },
  {
    id: 'IMPHAL',
    capitalDisplayText: 'Imphal',
    state: 'Manipur',
  },
  {
    id: 'SHILLONG',
    capitalDisplayText: 'Shillong',
    state: 'Meghalaya',
  },
  {
    id: 'AIZWAL',
    capitalDisplayText: 'Aizawl',
    state: 'Mizoram',
  },
  {
    id: 'KOHIMA',
    capitalDisplayText: 'Kohima	',
    state: 'Nagaland',
  },
  {
    id: 'BHUBANESWAR',
    capitalDisplayText: 'Bhubaneswar',
    state: 'Odisha',
  },
  {
    id: 'CHANDIGARH',
    capitalDisplayText: 'Chandigarh',
    state: 'Punjab',
  },
  {
    id: 'JAIPUR',
    capitalDisplayText: 'Jaipur',
    state: 'Rajasthan',
  },
  {
    id: 'GANGTOK',
    capitalDisplayText: 'Gangtok',
    state: 'Sikkim',
  },
  {
    id: 'CHENNAI',
    capitalDisplayText: 'Chennai',
    state: 'Tamil Nadu',
  },
  {
    id: 'HYDERABAD',
    capitalDisplayText: 'Hyderabad',
    state: 'Telangana',
  },
  {
    id: 'AGARTALA',
    capitalDisplayText: 'Agartala',
    state: 'Tripura',
  },
  {
    id: 'LUCKNOW',
    capitalDisplayText: 'Lucknow',
    state: 'Uttar Pradesh',
  },
  {
    id: 'DEHRADUN',
    capitalDisplayText: 'Dehradun',
    state: 'Uttarakhand',
  },
  {
    id: 'KOLKATA',
    capitalDisplayText: 'Kolkata',
    state: 'West Bengal',
  },
]

class Capitals extends Component {
  state = {
    activeCapitalId: stateAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getState = () => {
    const {activeCapitalId} = this.state

    const activeStateAndCapital = stateAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapitalId,
    )

    return activeStateAndCapital.state
  }

  render() {
    const {activeCapitalId} = this.state
    const state = this.getState(activeCapitalId)

    return (
      <div className="app-container">
        <div className="capitals-container">
          <h1 className="heading">States And Capitals</h1>
          <div className="question-container">
            <select
              className="capital-select"
              onChange={this.onChangeCapital}
              value={activeCapitalId}
            >
              {stateAndCapitalsList.map(eachCapital => (
                <option
                  key={eachCapital.id}
                  value={eachCapital.id}
                  className="option"
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which state?</p>
          </div>
          <p className="state">{state}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
