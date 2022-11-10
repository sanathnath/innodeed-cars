import React, { useEffect, useState } from "react";
import CarInfoCard from "../components/CarInfoCard";
import "../App.css";
import ControllerSection from "../components/ControllerSection";
import Header from '../components/Header'
import cars from '../api/cars.json'
import { car } from '../interfaces'

const HomePage: React.FC = () => {
    const [data, setData] = useState<car[]>([]);
    const [page, setPage] = useState<number>(1);
    const [filterQuery, setFilterQuery] = useState<string>("");

    const handlePage = (value:number) => {
        let num:number = page+value;
        if(num > 0 && num*4 <= data.length){
            setPage(page+value)
        }
    }
    const handleFilterQuery = (item:string) => {
      setFilterQuery(item);

    }
    const handleFilter = ()=>{
      return data.filter((item)=>{
        if(item.bodyType.toLowerCase().includes(filterQuery.toLowerCase())){
          return item;
        }
      })
    }

    useEffect(()=>{
        setData(cars)
    },[])

  return (
    <div className="home-main">
      <Header handleFilterQuery={handleFilterQuery}/>
      <div className="cars-section">
        {handleFilter().slice((page-1)*4,(page*4)).map((item:car)=>{
            return <CarInfoCard key={item.id} info={item} />
        })}
      </div>
      <div className="mobile-cars-section">
        {handleFilter().map((item:car)=>{
            return <CarInfoCard key={item.id} info={item} />
        })}
      </div>
      <ControllerSection handlePage={handlePage} />
    </div>
  );
};

export default HomePage;
