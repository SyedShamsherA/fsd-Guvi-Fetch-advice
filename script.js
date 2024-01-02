document.addEventListener("DOMContentLoaded", () => {
    const apiUrls =
        "https://api.adviceslip.com/advice" // API 
        // Add more APIs if needed

  
    // Function to fetch data using Promises
    const fetchData = (url) => {
        return fetch(url)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .catch((error) => {
            console.error("There was a problem fetching the data:", error);
          });
      };
    
      const displayAdvice = (data) => {
        const adviceContainer = document.getElementById("advice");
        adviceContainer.textContent = `Advice: ${data.slip.advice}`;
      };

    fetchData(apiUrls).then((data) => {
        displayAdvice(data);
      });
    
  });
  