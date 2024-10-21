document.addEventListener('DOMContentLoaded', () => {
    const teacherContainer = document.querySelector('#teachers .row');

    let lang = localStorage.getItem('selectedLang') || 'uz'; // Default to 'uz' if no language is set

    // Fetch teacher and partner data from the API
    fetch('https://angrenupt.pythonanywhere.com/teacherpage/') // Use the actual API endpoint for fetching data
        .then(response => response.json())
        .then(data => {
            // Clear the existing content
            teacherContainer.innerHTML = '';

            // Display teachers
            const teachers = data.teacher;
            teachers.forEach(teacher => {
                const teacherCard = `
                    <div class="col-lg-3 col-md-6 col-12">
                        <div class="our-team">
                            <div class="team-img">
                                <img src="${teacher.image_url}" alt="Teacher Image">
                                
                            </div>
                            <div class="team-content">
                                <h3 class="title">${teacher.name[lang]}</h3>
                                <span class="post">${teacher.direction[lang]}</span>
                            </div>
                        </div>
                    </div>
                `;
                teacherContainer.innerHTML += teacherCard;
            });

            
        })
        .catch(error => {
            console.error('Error fetching teachers and partners:', error);
        });
});





document.querySelectorAll('.language-switcher').forEach(item => {
    item.addEventListener('click', (e) => {
        const selectedLang = e.target.getAttribute('data-lang');
        localStorage.setItem('selectedLang', selectedLang); // Save the selected language to localStorage
        location.reload(); // Reload the page to apply the new language
    });
});