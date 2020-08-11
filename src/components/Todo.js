import React from 'react';
/*Okay, this should be interesting..

I will need: array of text obects with the option to strikeout

Honestly, this entire thing is obscenely confusing.
*/
//hmm... closures don't work inside react elements
//I can see that's because every time the page is updated
//The function gets invoked, re-initializing the closure.
//Wow, react is weird.
const keys = function() {
    let key = 0;
    return () => key++;
  }();

export default function Todo() {
  //I need an array of objects
  const [list, updateList] = React.useState([]);
  function strike(event) {
    if (event.target.classList.contains('strikethrough')) {
      event.target.style = 'display: none';
    } else {
      event.target.classList.toggle('strikethrough');
    }
  }
  function addItem(event) {
    event.preventDefault();
    //well, I had to learn how forms work, but I figured it out :D
    updateList([...list, {'key': keys(), 'text': event.target.text.value}])
    event.target.text.value = '';
  }

  
  //at some point, I'll need to render some stuff;
  return (
    <div className='widget-todo container'>
      <h2>Todo</h2>
      <div className='list'>
        <ul>
          {/*Ok, so then Is need to map out li's*/}
          {list.length 
          ? list.map((item) =>
            <li key={item.key} onClick={strike}>
              {item.text}
            </li>)
          : <h3>Add an item to your list!</h3>
          }
        </ul>
      </div>
      <div comment='this is where Ill try to start the form'>
        <form onSubmit={addItem}>
          <input type="text" name="text" />
          <button type="submit">add</button>
        </form>
      </div>
    </div>
  )
  //Holy crap, you can't inline comments in _some_ places in JSX either???
  //it's just a literal crapshoot isn't it.
  //and mistakes leave incredbly unclear errors.
  //I like to try and figure things out myself, but at this point.. screw that!
  //its literally just blind shots in the dark trying to do that.
}

