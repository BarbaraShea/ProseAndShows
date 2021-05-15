
  const newFormHandler = async (event) => {
    console.log("I work!")
    event.preventDefault();

    const book = document.querySelector('#book').checked;
    const show = document.querySelector('#show').checked;
    const movie = document.querySelector('#movie').checked;

    let category;

    if (book) {
      category = 'book';
    } else if (show) {
      category = 'show';
    } else if (movie) {
      category = 'movie';
    }
  
    const title_of_work = document.querySelector('#title').value.trim();
    const contents = document.querySelector('#contents').value.trim();
    const genre_tag = document.querySelector('#genre').value.trim();
    const tags = document.querySelector('#tags').value.trim();

  
    if (category && title_of_work  && contents) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ category, title_of_work, contents, genre_tag, tags }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create project');
      }
    }
  };

