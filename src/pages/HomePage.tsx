import React, { useEffect, useRef, useState } from "react";
import CarInfoCard from "../components/CarInfoCard";
import "../App.css";
import ControllerSection from "../components/ControllerSection";
import Header from "../components/Header";
import cars from "../api/cars.json";
import { car } from "../interfaces";

const HomePage: React.FC = () => {
  const [allData, setAllData] = useState<car[]>([]);
  const [data, setData] = useState<car[]>([]);
  const [filterQuery, setFilterQuery] = useState<string>("");
  const scroll = useRef<HTMLDivElement>(null);

  const handlePage = (value: number) => {
    let s = scroll.current?.scrollLeft
    if(scroll.current != undefined){
      console.log(scroll.current.scrollLeft)
      scroll.current.scrollLeft += value
    }
    
  };
  const handleFilterQuery = (item: string) => {
    setFilterQuery(item);
  };
  const handleFilter = () => {
    return data.filter((item) => {
      if (item.bodyType.toLowerCase().includes(filterQuery.toLowerCase())) {
        return item;
      }
    });
  };

  useEffect(() => {
    setData(cars);
  }, []);

  return (
    <div className="home-main">
      <Header handleFilterQuery={handleFilterQuery} />
      <div className="cars-section" ref={scroll}>
        {handleFilter().map((item: car) => {
          return <CarInfoCard key={item.id} info={item} />;
        })}
      </div>
      <div className="mobile-cars-section">
        {handleFilter().map((item: car) => {
          return <CarInfoCard key={item.id} info={item} />;
        })}
      </div>
      <ControllerSection handlePage={handlePage} />
    </div>
  );
};

export default HomePage;
