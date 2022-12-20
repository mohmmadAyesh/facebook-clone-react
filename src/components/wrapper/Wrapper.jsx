import './wrapper.css';
import {svgs,storiesContent,feelingSvg,postInformation,contactObject} from '../../svgs';
import Advantage from '../advantage/Advantage.jsx';
import ButtonIcon from '../buttonIcon/ButtonIcon';
import Card from '../card/Card';
import profile from '../../assests/profile.jpg';
import SearchInputField from '../searchInputField/SearchInputField';
import Post from '../post/Post';
import adImage from '../../assests/adImage.png';
const Wrapper = () => {
  return (
    <div className='wrapper'>
    <div className='icon-container'>
        {svgs.map(svg=>(
          <Advantage key={svg.id} img={svg.imgSrc} title={svg.title}/>
        ))}
    </div>
    <div className='posts'>
      <div className='stories'>
        <div className='titles'>
        <ButtonIcon  height='34px' width='216px' title='Stories' text='Stories' isActive={'active'}/>
        <ButtonIcon height='34px' width='216px' title='Reels' text='Reels'/>
        <ButtonIcon height='34px' width='216px' title='Rooms' text='Rooms'/>
        </div>
        <div className='images'>
        <div className='createStory'>
          <Card img={storiesContent[0].img}/>
        <div class="text-container">
            <div class="plus-container">
                <span>
                    <svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" class="b6ax4al1 m4pnbp5e somyomsx ahndzqod qsbzbi57 dmdr2h6l kgzac55p"><g fill-rule="evenodd" transform="translate(-446 -350)"><g fill-rule="nonzero"><path d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z" transform="translate(354.5 159.5)"></path><path d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z" transform="translate(354.5 159.5)"></path></g></g></svg>
                </span>
            </div>
            <p class="create">Create story</p>
         </div>
        </div>
        {storiesContent.map(story=>(
          <Card text={story.title} icon={story.icon} img={story.img} />
        ))}
        </div>
      </div>
      <div className='posting'>
        <div className='whatsYourMind'>
          <img src={profile}/>
          <SearchInputField text='What`s on your mind,Moh?'/>
          <div className='line'></div>
        </div>
        <div className='options'>
          {feelingSvg.map(svg=>(
            <Advantage centering='center' height='45px' borderRadius='10px' width='216px' key={svg.id} svg={svg.svg} title={svg.title}/>
          ))}
        </div>
      </div>
      {/* img, inform, title,whoPost,whoReact,when,HowManyComments,height,icon */}
      {/* <Post img={postInformation[0].img} whoPost={postInformation[0].whoPost} whoReact={postInformation[0].whoReact} when={postInformation[0].when} HowManyComments={postInformation[0].HowManyComments}
        icon={postInformation[0].icon}
        title={postInformation[0].title} */}
        {postInformation.map(post=>(
          <Post
            img={post.img}
            whoPost={post.whoPost}
            whoReact={post.whoReact}
            when={post.when}
            HowManyComments={post.HowManyComments}
            icon={post.icon}
            title={post.title}
          />
        ))}
    </div>
    <div className='contacts'>
      <div className='sponsered'>
        <p className='title'>Sponsered</p>
        <div className='ad-area'>
          <div className='ad'>
            <img src={adImage} alt='sorry'/>
            <div className='text-container'>
              <p className='title'>The All in One Word Press Website Builder</p>
              <p className='desc'>elementor.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className='contact'>
        <div className='title'>
          <span>Contacts</span>
          <div className='svgs'>
            <div>
            <svg fill="#65676B" viewBox="0 0 16 16" width="1em" height="1em" class="b6ax4al1 m4pnbp5e somyomsx ahndzqod gnhxmgs4 eohcrkr5 akh3l2rg"><g fill-rule="evenodd" transform="translate(-448 -544)"><path d="M457.25 552.5H455v2.25a.75.75 0 0 1-1.5 0v-2.25h-2.25a.75.75 0 0 1 0-1.5h2.25v-2.25a.75.75 0 0 1 1.5 0V551h2.25a.75.75 0 0 1 0 1.5m6.38-4.435a.62.62 0 0 0-.64.047l-2.49 1.634v-1.394a1.854 1.854 0 0 0-1.852-1.852l-8.796.002a1.854 1.854 0 0 0-1.851 1.852v6.793c0 1.021.83 1.852 1.852 1.852l1.147-.002h7.648a1.854 1.854 0 0 0 1.852-1.851v-1.392l2.457 1.61a.641.641 0 0 0 .673.071.663.663 0 0 0 .37-.601v-6.167c0-.26-.142-.49-.37-.602"></path></g></svg>
            </div>
            <div>
                        <svg fill="#65676B" viewBox="0 0 16 16" width="1em" height="1em" class="b6ax4al1 m4pnbp5e somyomsx ahndzqod gnhxmgs4 eohcrkr5 akh3l2rg"><g fill-rule="evenodd" transform="translate(-448 -544)"><g fill-rule="nonzero"><path d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z" transform="translate(448 544)"></path><path d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z" transform="translate(448 544)"></path><path d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z" transform="translate(448 544)"></path><path d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z" transform="translate(448 544)"></path></g></g></svg>
                    </div>
                        <div class="threeDots" style={{cursor:'pointer'}}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
          </div>
        </div>
        <div className='popUp'>
          <div className='title-container'>
            <span className='bigTitle'>Chat settings</span>
            <span className='smallTitle'>
              Customize your messanger experience
            </span>
            <div className='line'></div>
          </div>
          <ul className="list list1">
                            <li>
                                {false && <i data-visualcompletion="css-img" className="gneimcpu b0w474w7" style={{backgroundImage: 'url(&quot,https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/v5VX8tDldjr.png&quot,)', backgroundPosition:' 0px -88px', backgroundSize: '22px 110px', width: '20px', height: '20px', backgroundRepeat: 'no-repeat', display: 'inline-block',}}></i>}
                                <div className="text-container">
                                <span className='title'>Incomming call sound</span>
                                <span className="desc"></span>
                            </div>
                                    <div className="blue-one">
                                        <div className="white-one"></div>
                                    </div>
                            </li>
                        </ul>
                        <div className="line"></div>
                        <ul className="list list2"></ul>
                        <div className="line"></div>
                        <ul className="list list3"></ul>
        </div>
        {contactObject.map((contact,index)=>(
          <Advantage key={index} title={contact.title} img={contact.image} borderRadius='10px' height={52} centering='flex-start'/>
        ))}
        {/* title,img,svg,borderRadius,height,centering */}
      </div>
    </div>
    </div>
  )
}
export default Wrapper;
