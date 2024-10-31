import React from 'react'
import SectionTitle from '../../Components/Section/SectionTitle';
import { useSelector } from 'react-redux';
function Contact() {
    
  const {portfolioData} = useSelector(state => state.root);
  const {contacts} = portfolioData;
  const {name, age, gender, mobile, email} = contacts[0];
  const user = {
    "name": name,
    "age": age,
    "gender": gender,
    "email": email,
    "mobile": mobile
    };
  return (
    
    <div>
        <SectionTitle title="Say Hello" />
        <div className='flex sm:flex:col items-center justify-between'>
            <div className='flex flex-col gap-1'>
                <h1 className='text-tertiary text-sm'>
                    {'{'}
                </h1>
                {
                    Object.keys(user).map((key) => {
                        return <h1 className='ml-5 text-sm'>
                            <span className='text-tertiary'>{key} : </span> <span className='text-tertiary'>{user[key]}</span>
                        </h1>
                    })
                }
                <h1 className='text-tertiary text-sm'>
                    {'}'}
                </h1>
            </div>
            <div className='h-3/4 w-[300px] sm:w-3/4 sm-w-full'>
                <img src="https://placehold.co/600x400/png" alt='profile'/>
            </div>
        </div>
    </div>
  )
}

export default Contact