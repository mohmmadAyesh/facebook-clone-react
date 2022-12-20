import React from 'react'
import profile from '../../assests/profile.jpg';
import './profileContainer.css';
export const ProfileContainer = () => {
  return (
    <div className='profile-container'>
        <div className='profile-card'>
            <div className='profile-name'>
                <img src={profile} alt=''/>
                <span className='title'>Moh Suhail</span>
            </div>
            <div className='line'></div>
            <div className='see'>see all Profiles</div>

        </div>
        <ul class="list">
                    <li>
                        <div class="i-container">
                            <i data-visualcompletion="css-img" className="gneimcpu b0w474w7" style={{backgroundImage:'url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/xjV4j8zXH-H.png&quot;)', backgroundPosition:'0px -126px', backgroundSize:' auto', width: '20px', height: '20px', backgroundRepeat: 'no-repeat', display: 'inline-block'}}></i>
                        </div>
                        <span class="title">Setting & Privacy</span>
                        <i data-visualcompletion="css-img" class="gneimcpu oee9glnz" style={{backgroundImage:'url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/xjV4j8zXH-H.png&quot;)', backgroundPosition:'-108px -26px', backgroundSize: 'auto', width:' 24px', height: '24px', backgroundRepeat: 'no-repeat',display: 'inline-block'}}></i>
                    </li>
                </ul>
                <div className="endTitle">
                    <ul>
                        <li><a href="#">privacy</a>.</li>
                        <li><a href="#">Terms</a>.</li>
                        <li><a href="#">Advertising</a>.</li>
                        <li><a href="#">Ad Choice</a>
                            <i data-visualcompletion="css-img" className="gneimcpu oee9glnz" style={{backgroundImage:'url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/xjV4j8zXH-H.png&quot;)', backgroundPosition:' -60px -164px', backgroundSize: 'auto', width:' 12px', height: '12px', backgroundRepeat: 'no-repeat', display: 'inline-block'}}></i></li>
                            <li><a href="#">Cookies</a>.</li>
                            <li><a href="#">More</a>.Meta © 2022</li>

                    </ul>
                </div>
    </div>
  )
}
