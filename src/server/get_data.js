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
    const text = response.sentence_list[0].segment_list[0].polarity_term_list[0].text;
    console.log(agreement);
    const final_text ={
        agreement,
        confidence,
        irony,
        score_tag,
        subjectivity,
        text :text
    }
    return final_text;
}


module.exports= get_articles;