import React, { useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input({onEnter}) {
  
  const [text, putText] = React.useState('');
  
  const handleChange = e => {
    putText(e.target.value);
  }
  
  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      onEnter(text);
      putText('');
    }
  }

  return (
    <div className="panel-block">
    <input 
      class="input"
      type="text"
      placeholder="Press Enter to Add."
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
    </div>
  );
}

export default Input;
