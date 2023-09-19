"use client";

import ListingPlaceType from "airbnb/components/process/ListingPlaceType";
import ListingTypeSelector from "airbnb/components/process/ListingTypeSelector";
import Overview from "airbnb/components/process/Overview";
import PlaceLocation from "airbnb/components/process/PlaceLocation";
import StepOneStarter from "airbnb/components/process/StepOneStarter";
import AirBnbLogoShort from "airbnb/svg/airbnb-logo-short";
import React, { useState } from "react";

const page = () => {
  const [step, setStep] = useState(0);

  const getComponent = () => {
    switch(step) {
      case 0:
        return <Overview/>;
      case 1:
        return <StepOneStarter/>;
      case 2:
        return <ListingTypeSelector />;
      case 3:
        return <ListingPlaceType />;
      case 4:
        return <PlaceLocation />;
    }
  }

  const handleNext = () => { setStep(step + 1) };
  const handlePrevious = () => { setStep( step - 1) };

  return <div className="grid grid-rows-new-listing h-[100vh]">
    <header className="flex items-center justify-between px-20">
      <div className="cursor-pointer">
        <AirBnbLogoShort/>
      </div>
      {
        step <= 13 && 
        (<button className="border border-gray-300 px-5 py-2 rounded-full font-semibold hover:border-gray-700 cursor-pointer">
          Save & Exit
        </button>)
      }
    </header>
    {
      getComponent()
    }
    <footer className={`flex items-center px-20 pb-4 border-t-4 border-t-gray-300 ${ step > 0 ? "justify-between" : "justify-end"}`}>
      {
        step >= 1 && (<button onClick={handlePrevious} className="px-10 py-3 mt-5 text-airbnb-light-black underline hover:bg-gray-200 text-base font-medium rounded-md cursor-pointer">Back</button>)

      }
      {
        step !== 0 
        ? (<button onClick={handleNext} className="bg-[#222222] px-5 py-3 mt-5 text-white text-base font-medium rounded-md cursor-pointer">Next</button>)
        : (<button onClick={handleNext} className="bg-airbnb-gradient px-5 py-3 mt-5 text-white text-base font-medium rounded-md cursor-pointer">Get Started</button>)
      }      
    </footer>
  </div>;
};

export default page;
