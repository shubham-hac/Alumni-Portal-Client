import React from 'react'
import './StoryDetails.css'
const StoryDetails = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className='story-details'>
            <div className="story-details-top">

            </div>
            <div className="story-details-bottom">
                <div className="story-image-container">
                    <img className='story-image' src={`${PF}images/posts/post1.jpg`} alt="" />
                </div>
                <h2 className="story-title">Friends for Life: 2 Stories of True Friendship from IITI Campus!</h2>
                <p className="story-description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro aliquam impedit consequatur sint praesentium cumque reprehenderit facere, minima obcaecati libero nihil recusandae sit sequi quaerat rerum a perspiciatis maxime in! Fuga, nostrum! Fugiat quis error quos labore eius recusandae laudantium explicabo voluptate libero architecto nam sequi, expedita harum asperiores totam. Numquam qui nihil odio sunt, fugit aspernatur assumenda ducimus quis, impedit repellendus, aperiam libero unde dolore?
                </p>
            </div>
        </div>
    )
}

export default StoryDetails
