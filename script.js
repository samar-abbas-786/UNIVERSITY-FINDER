const btn = document.getElementById("btn");
const infocDiv = document.getElementById("infoc");

getUniversity = async () => {
  const countryName = document.getElementById("inp1").value;

  try {
    const response = await fetch(
      `http://universities.hipolabs.com/search?country=${countryName}`
    );

    const universities = await response.json();
    // Clear previous content in the infocDiv
    infocDiv.innerHTML = "";

    // Append details of each university to the infocDiv
    universities.forEach((university, index) => {
      const universityDetails = `
        <div>
          <p><strong>University ${index + 1}:</strong></p>
          <p>Name: ${university.name}</p>
          <p>Country: ${university.country}</p>
          <p>Country-Code: ${university.alpha_two_code}</p>
          <p>Web Page: <a href="${university.web_pages[0]}">${
        university.web_pages[0]
      }</a></p>
          <hr>
        </div>
      `;
      infocDiv.innerHTML += universityDetails;
    });
  } catch (error) {
    console.error("Error fetching university data:", error);
  }
};

btn.addEventListener("click", getUniversity);
