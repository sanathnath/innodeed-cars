import React,{useState} from 'react'
import { headerProp } from '../interfaces'

const filterArray = ["suv","sedan","estate"];

function Header({handleFilterQuery}:headerProp) {
  const [isFilterOpen, setIsFilterOpen] = useState<Boolean>(false);

  const buttonHandler = (item:string)=>{
    setIsFilterOpen(false);
    handleFilterQuery(item);
  }
  return (
    <div className="header">
        <div className="filter-container">
          <div className="filter-button" onClick={()=>{setIsFilterOpen(!isFilterOpen)}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-filter" fill="currentColor">
            <path fillRule="evenodd" d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
          </svg>
          </div>
          {isFilterOpen && <div className="filter-list">
            <ul className="">
                {filterArray.map((item)=>{
                    return <li onClick={(event)=>{buttonHandler(item)}}>{item}</li>
                })}
            </ul>
          </div>}
        </div>
      </div>
  )
}

export default Header