
import CardHistory from './CardHistory'
import "./selectLevel.css"

// const cards = [
//     {
//         id: '1',
//         cover: 'bg-mechanics-3',
//         iconTitle: 'title-history-1',
//         desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam molestias, asperiores delectus obcaecati aliquam enim eligendi modi veniam eaque magni? Vitae doloribus at facere debitis. Pariatur harum reprehenderit error quod?'
//     },
//     {
//         id: '2',
//         iconTitle: 'title-history-2',
//         cover: 'bg-production-uniform-1',
//         desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam molestias, asperiores delectus obcaecati aliquam enim eligendi modi veniam eaque magni? Vitae doloribus at facere debitis. Pariatur harum reprehenderit error quod?'
//     },
//     {
//         id: '3',
//         cover: 'bg-clothing-1',
//         iconTitle: 'title-history-3',
//         desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam molestias, asperiores delectus obcaecati aliquam enim eligendi modi veniam eaque magni? Vitae doloribus at facere debitis. Pariatur harum reprehenderit error quod?'
//     }
// ];

const SelectLevelPage = ({
    stories,
    selectStory
}) => {

    return (
        <div className="selectLevel-container">
            <div className="selectLevel-container-content">
                <div className="selectLevel-container-cards">
                    {stories.map( (story) => (
                        <CardHistory
                            key={story.id}
                            story={story}
                            onCall={()=>{selectStory(story)}}
                        />    
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SelectLevelPage;