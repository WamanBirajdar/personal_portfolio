import React from "react";

const ResumePDFCard = () => {

	// Function will execute on click of button
	const onButtonClick = () => {
		// using Java Script method to get PDF file
		fetch('Waman_Birajdar_CV.pdf').then(response => {
			response.blob().then(blob => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'Waman_Birajdar_CV.pdf';
				alink.click();
			})
		})
	}
	return (
		<>
      <div className="w-full p-4 px-50 h-auto xl:py-4 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div >
				<button 
          			onClick={onButtonClick}>
					Download My Resume
				</button>
    
      </div>
    </div>
		</>
	);
};



export default ResumePDFCard