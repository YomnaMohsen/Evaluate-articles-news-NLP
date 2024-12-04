async function get_articles(Url){
    const apiresponse = await fetch(Url);
    try {
        const response = await apiresponse.json();
        return incoming_response(response);
        //return response;
    }
    catch (error) {
        console.log("error", error);
    }
    
}

//formulate response
function incoming_response(response){
    const {agreement, confidence, irony, score_tag, subjectivity} = response;
    const final_text ={
        agreement,
        confidence,
        irony,
        score_tag,
        subjectivity
    }
    return final_text;
}


module.exports= get_articles;