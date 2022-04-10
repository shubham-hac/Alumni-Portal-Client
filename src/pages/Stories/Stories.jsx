import React from 'react'
import Story from '../../components/Story/Story'
import { stories } from '../../dummyData'
import './Stories.css'
import Categories from '../../components/Categories/Categories'
const Stories = () => {
    return (
        <div className='stories'>

            {/* <div className="story-categories-container">
                <Categories />
            </div> */}
            <div className="stories-container">
                {/* <div className="post-story">
                    Post an Event
                </div> */}
                {stories.map(story => (
                    <Story
                        key={story.id}
                        id={story.id}
                        title={story.title}
                        desc={story.desc}
                        storyImg={story.storyImg}
                        postDate={story.postDate}
                        userId={story.userId} />
                ))}
            </div>
        </div>
    )
}

export default Stories
