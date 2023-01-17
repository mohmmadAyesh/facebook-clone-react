import React from 'react'
import SearchInputField from '../searchInputField/SearchInputField';
import './CollectionContainer.css';
import CollectionCard from '../collectionCard/CollectionCard';
import { socialCards,gammingCards,CreateInfo } from '../../svgs';
import CreateCard from '../createCard/CreateCard';
const CollectionContainer = () => {
  return (
    <div className='collection-container'>
        <div className='title-container'>
            <p className='title'>Menu</p>
        </div>
        <div className='wrapper-container'>
            <div className='menu-container'>
                <SearchInputField width={320} text="Search a menu"/>
                <div className='title-container'>
                    <span className='title'>Social</span>
                </div>
                <div className='social list'>
                    <ul>
                    {socialCards.map((el,index)=>
                    (
                        <CollectionCard key={index} img={el.img} title={el.title} desc={el.desc}/>
                    ))}
                    </ul>
                    <div className='line'></div>
                </div>
                <div className='entertainment list'>
                    <div className='title-container'>
                        <span className='title'>Entertainment</span>
                    </div>
                    <ul>
                        {gammingCards.map((el,index)=>(
                          <CollectionCard key={index} img={el.img} title={el.title} desc={el.desc}/> 
                        ))}
                    </ul>
                    <span className='line'></span>
                </div>
            </div>
            <div className='post-container'>
                <div className='title-container'>
                    <span className='title'>Create</span>
                </div>
                <ul className='list list1'>
                        {CreateInfo.map((el,index)=>(
                            <CreateCard title={el} key={index}/>
                        ))}
                </ul>
            </div>
        </div>
    </div>
  )
}
export default CollectionContainer;
