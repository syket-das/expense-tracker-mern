import React from 'react';
import {useForm} from 'react-hook-form';
import List from './List';

const Form = () => {

   const {register,handleSubmit,resetField} =  useForm();

   const onSubmit = data => {


        console.log(data);
        resetField();
   }

  return (
    <div className="form max-w-sm mx-auto w-96">
      <h1 className="font-bold pb-4 text-xl">Transaction</h1>
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="input-group">
            <input
              {...register('name')}
              type="text"
              placeholder="Enter your transaction"
              className="form-input"
            />
          </div>
          <select {...register('type')} className="form-input">
            <option value="Investment" defaultValue>
              Investment
            </option>
            <option value="Savings">Savings</option>
            <option value="Expenses">Expenses</option>
          </select>
          <div className="input-group">
            <input
              {...register('amount')}
              type="text"
              placeholder="Enter Amount"
              className="form-input"
            />
          </div>
          <div className="submit-btn">
            <button
              type="submit"
              className="border py-2 text-white bg-indigo-500 w-full"
            >
              Make Transcation
            </button>
          </div>
        </div>
      </form>

      <List />
    </div>
  );
};

export default Form;
