import React from 'react';
import CreditCard from "./CreditCard";
import { useCreditCardData } from '../hooks/useCreditCardData';
import LoadingComponent from "./LoadingComponent";

const CreditCardList = () => {
    const { creditCards, loading, error } = useCreditCardData();

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <label className="font-semibold text-[22px]">My Cards</label>
                <a href="#" className="text-blueshade-900 font-semibold hover:text-lg transition-all">See All</a>
            </div>

            <div className="col-span-2 flex gap-x-[30px] overflow-x-auto hide-scrollbar">
                {loading ? (
                    <LoadingComponent />
                ) : error ? (
                    <div>Error: {error.message || 'Failed to fetch data'}</div>
                ) : (
                    creditCards.map((card, index) => (
                        <CreditCard key={index} {...card} />
                    ))
                )}
            </div>
        </div>
    );
};

export default CreditCardList;