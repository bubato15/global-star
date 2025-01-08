import * as React from 'react';
import { CardProps } from '../types';
import '../style/PaymentCard.css';

export const PaymentCard: React.FC<CardProps> = ({ cardType, cardNumber, amount }) => (
  <div className="flex gap-8 justify-center items-start p-4 bg-white rounded-2xl shadow-2xl payment-card-custom">
    <div className="flex gap-2 items-end">
      <div className="flex w-[76px]">
        <div className="flex shrink-0 -mr-5 w-12 h-12 bg-red-600 rounded-full" />
        <div className="flex shrink-0 w-12 h-12 bg-amber-300 rounded-full" />
      </div>
      <div className="flex flex-col justify-center text-sm font-medium text-gray-500">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/2104ee8c3b1a4036982aceb97afa3b1c/6fb263c5013350fe7c02fc563a51d467daa29cc78f40fd91ae3474d394108d3f?apiKey=2104ee8c3b1a4036982aceb97afa3b1c&" alt={`${cardType} logo`} className="object-contain aspect-[2.25] w-[54px]" />
        <div className="mt-2">{`${cardType} ~ ${cardNumber}`}</div>
      </div>
    </div>
    <div className="text-sm font-bold text-lime-600">{amount}</div>
  </div>
);