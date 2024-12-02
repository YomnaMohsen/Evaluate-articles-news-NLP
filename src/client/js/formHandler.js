// Replace checkForName with a function that checks the URL
import { checkForUrl} from './UrlChecker'

const serverURL = '/api'
const form = document.getElementById('urlForm');
const Urlerr = document.getElementById('Urlerror');

// Function to send data to the server
async function  handleSubmit(event) {
    event.preventDefault();
    Urlerr.style.display = "none";
    // Get the URL from the input field
    const UrlText = document.getElementById('name').value;
    

    
    // Check if the URL is valid
    if (!checkForUrl(UrlText)){
        Urlerr.style.display = "block";
        Urlerr.innerHTML = "Please enter valid Url";    
        return;
    }
 
        // If the URL is valid, send it to the server using the serverURL constant above

        const apiresponse = await fetch(serverURL, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: UrlText }),

    });
    try {
        const response = await apiresponse.json();
        const disp_res = response.sentiment;
        Update_UI(disp_res);
    }
    catch (error) {
        console.log("error", error);
    }
      
}

function Update_UI(Result){
    document.getElementById("agreement").innerHTML = `Agreement: ${Result.aggreement}`;
    document.getElementById("confidence").innerHTML = `confidence: ${Result.confidence}`;
    document.getElementById("irony").innerHTML = `Irony: ${Result.irony}`;
    document.getElementById("score_tag").innerHTML = `Score_tag: ${Result.score_tag}`;
    document.getElementById("subjectivity").innerHTML = `Subjectivity: ${Result.subjectivity}`;
    document.getElementById("text").innerHTML = `Text: ${Result.text}`;


}
form.addEventListener('submit', handleSubmit);


// Export the handleSubmit function
export { handleSubmit };

