import React from "react";
import pizzas from "../pizzasdata";
import Pizza from "../components/Pizza";

const Homescreen = () => {
  return (
    <div>
      <div className="row">
        {pizzas.map((pizza) => {
          return (
            <div className="col-md-4 p-3">
              <div>
                <Pizza pizza={pizza} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homescreen;
