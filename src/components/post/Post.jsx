import React from 'react'
import like from '../../assests/like.svg';
import love from '../../assests/love.svg';
import support from '../../assests/support.svg';
import './post.css';
const Post = ({ img, inform, title,whoPost,whoReact,when,HowManyComments,height,icon}) => {
    return (
        <div className='post' style={{height}}>
            <div className='popUpdots'>
                <div className="li">
                    <i data-visualcompletion="css-img" className="gneimcpu b0w474w7" style={{backgroundImage:'url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/OaZdJOgrDqk.png&quot;)',backgroundPosition:'0px -318px',backgroundSize:'34px 1640px',width: '20px',height:'20px',backgroundRepeat:'no-repeat',display:'inline-block'}}></i>
                    <div className="text-container">
                        <span className="title">Save Post</span>
                        <span className="desc">Add this to your saved items</span>
                    </div>
                </div>
            </div>
            <div className="title-container">
                <div className="title-left">
                    <img src={icon} alt="" />
                    <div className="text-container">
                        <div className="name">
                            <p className="title">{whoPost}</p>
                        </div>
                        <div className="date">
                            <p className="dateNumber">{when}</p>
                            <svg fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em" className="b6ax4al1 m4pnbp5e somyomsx ahndzqod gnhxmgs4 k250bvdn cv5aopd8" title="Shared with Public"><title>Shared with Public</title><g fill-rule="evenodd" transform="translate(-448 -544)"><g><path d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434" transform="translate(354 143.5)"></path><path d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096" transform="translate(354 143.5)"></path><path fill-rule="nonzero" d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" transform="translate(354 143.5)"></path></g></g></svg>
                        </div>
                    </div>
                </div>
                <div className="title-right">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="desc-container">
                <span className="title">{title}</span>
            </div>
            <div className="img-container">
                <img src={img} alt="" />
            </div>
            <div className="post-inform">
                <div className="img-container">
                    <img src={love} alt="" />
                    <img src={like} alt="" />
                    <img src={support} alt="" />
                </div>
                <span className="who">{whoReact}</span>
                <span className="comment">{HowManyComments} comments</span>
            </div>
            <div className="line"></div>
            <div className="like-comment-share">
                <div className="like">
                    <i data-visualcompletion="css-img" className="gneimcpu oee9glnz" style={{backgroundImage:'url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/alOd-wLdD-n.png&quot;)',backgroundPosition:'0px -247px',backgroundSize: 'auto',width: '18px',height: '18px',backgroundRepeat: 'no-repeat',display: 'inline-block'}}></i>
                    <span>Like</span>
                </div>
                <div className="comment">
                    <i data-visualcompletion="css-img" class="gneimcpu oee9glnz" style={{backgroundImage:'url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/alOd-wLdD-n.png&quot;)',backgroundPosition:'0px -209px',backgroundSize: 'auto', width: '18px', height: '18px',backgroundRepeat: 'no-repeat', display: 'inline-block'}}></i>
                    <span>Comment</span>
                </div>
                <div className="share">
                    <i data-visualcompletion="css-img" class="gneimcpu oee9glnz" style={{backgroundImage:'url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/alOd-wLdD-n.png&quot;)',backgroundPosition:' 0px -266px',backgroundSize: 'auto', width: '18px',height: '18px',backgroundRepeat: 'no-repeat',display:'inline-block'}}></i>
                    <span>Share</span>
                </div>
            </div>
        </div>
    )
}
export default Post;
