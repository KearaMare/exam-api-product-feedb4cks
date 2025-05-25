const API_URL = "http://51.38.232.174:3002/v1";
const feedbackWrap = document.querySelector(".feedback-wrapper")
const SearchButton = document.querySelector("#search")

async function feedbacks(){
    feedbackWrap.innerHTML = '';
    let api_infos =  await fetch(`${API_URL}/feedbacks`, {
        method: "GET"
    })

    const data = await api_infos.json();

    for ( let i = 0; i < data.length; i++ ) {
        infos(
            data[i].id, 
            data[i].title,
            data[i].description,
            data[i].category,
            data[i].votes,
            data[i].comments
        )
    }
}
feedbacks()

function infos( id, title, description, category, votes, comments){
    const feedbacksItem = document.createElement("div")
    const feedbackTitle = document.createElement("h3")
    const feedbacksDescription = document.createElement("p")
    const feedbackCategory = document.createElement("div")
    const feedbacksVote = document.createElement("div")
    const feedbacksVoteS = document.createElement("span")
    const feedbacksCommentsAll = document.createElement("div")
    const feedbacksComments = document.createElement("p")
    const feedbackElements = document.createElement("div")


    feedbackWrap.appendChild(feedbacksItem)
    feedbacksItem.classList.add("feedback-item")

    feedbackWrap.appendChild(feedbackElements)
    feedbackElements.classList.add("feedback-item-text")
    
    feedbackWrap.appendChild(feedbacksVote)
    feedbacksVote.classList.add("feedback-item-votes")
    feedbacksVote.appendChild(feedbacksVoteS)
    feedbacksVoteS.classList.add("text-regular-3")
    feedbacksVoteS.textContent = votes;

    feedbackElements.appendChild(feedbackTitle)
    feedbackTitle.classList.add("heading-3")
    feedbackTitle.textContent = title;

    feedbackElements.appendChild(feedbacksDescription)
    feedbacksDescription.textContent = description;     

    feedbackElements.appendChild(feedbackCategory)
    feedbackCategory.classList.add("text-regular-3", "feedback-chip")
    feedbackCategory.textContent = category;

    
    feedbacksItem.appendChild(feedbacksCommentsAll)
    feedbacksCommentsAll.classList.add("feedback-item-comments")

    feedbacksCommentsAll.appendChild(feedbacksComments)
    feedbacksComments.classList.add("bold")
    feedbacksComments.textContent = comments;
    
   feedbacksItem.appendChild(feedbacksVote)
   feedbacksItem.appendChild(feedbackElements)
   feedbacksItem.appendChild(feedbacksCommentsAll)
}
