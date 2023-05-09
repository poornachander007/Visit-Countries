import {Component} from 'react'
import './App.css'

// This is the list (static data) used in the application. You can move it to any component if needed.

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

const ListItem = props => {
  const {obj, onClickRemoveCountry} = props
  const {name, isVisited, id} = obj
  //   const className = isVisited ? 'visited_button' : 'visit_button'
  const onClickVisit = () => {
    onClickRemoveCountry(id)
  }
  const buttonContent = isVisited ? (
    <p className="visited">Visited</p>
  ) : (
    <button onClick={onClickVisit} className="visit_button" type="button">
      Visit
    </button>
  )

  return (
    <li className="li_visit_item">
      <p className="visit_country">{name}</p>
      {buttonContent}
    </li>
  )
}

const CountryCard = props => {
  const {obj, onClickRemoveCountry} = props
  const {id, name, imageUrl} = obj
  const onRemoveCountry = () => {
    onClickRemoveCountry(id)
  }

  return (
    <li className="visited_li_item">
      <img className="country_img" src={imageUrl} alt="thumbnail" />
      <div className="name_and_button">
        <p className="card_name">{name}</p>
        <button
          onClick={onRemoveCountry}
          className="remove_button"
          type="button"
        >
          Remove
        </button>
      </div>
    </li>
  )
}

// Replace your code here
class App extends Component {
  state = {list: initialCountriesList}

  onClickRemoveCountry = id => {
    this.setState(preState => ({
      list: preState.list.map(item => {
        if (item.id === id) {
          return {...item, isVisited: !item.isVisited}
        }
        return item
      }),
    }))
  }

  renderVisitedList = () => {
    const {list} = this.state
    const visitedList = list.filter(eachItem => eachItem.isVisited)
    return (
      <div className="visited_container">
        <h1 className="visited_heading">Visited Countries </h1>
        {visitedList.length === 0 ? (
          this.renderEmptyView()
        ) : (
          <ul className="visited_ul_container">
            {visitedList.map(eachItem => (
              <CountryCard
                onClickRemoveCountry={this.onClickRemoveCountry}
                key={eachItem.id}
                obj={eachItem}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }

  renderEmptyView = () => (
    <div className="empty_view">
      <p className="empty_heading">No Countries Visited Yet!</p>
    </div>
  )

  render() {
    const {list} = this.state
    return (
      <div className="app_container">
        <div className="content_container">
          <h1 className="main_heading">Countries</h1>
          <ul className="countries_ul_container">
            {list.map(eachItem => (
              <ListItem
                onClickRemoveCountry={this.onClickRemoveCountry}
                key={eachItem.id}
                obj={eachItem}
              />
            ))}
          </ul>
          {this.renderVisitedList()}
        </div>
      </div>
    )
  }
}
export default App
