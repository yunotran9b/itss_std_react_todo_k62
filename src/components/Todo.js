import React, { useState } from 'react';

/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import {getKey} from "../lib/util";

function Todo() {
  const [items, putItems] = React.useState([
      /* テストコード 開始 */
    { key: getKey(), text: '日本語の宿題', done: false },
    { key: getKey(), text: 'reactを勉強する', done: false },
    { key: getKey(), text: '明日の準備をする', done: false },
    /* テストコード 終了 */
  ]);
   
   const handleCheck = checked => {
     const newItems = items.map(item => {
       if (item.key === checked.key) {
        item.done = !item.done;
     }
     return item;
     });
     putItems(newItems);
   };
   
   const handleEnter = text => {
     putItems([...items,{key: getKey(), text: text, done: false}]);
   }
   
   const [filter, setFilter] = React.useState('ALL');
   
   const displayItems = items.filter( item => {
     if (filter === 'ALL') return true;
     if (filter === 'TODO') return !item.done;
     if (filter === 'DONE') return item.done;
   })
   
   const handleFilter = value => {
     setFilter(value);
   }

  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <Input
        onEnter={handleEnter}
      />
      <Filter
        value={filter}
        onChange={handleFilter}
      />
      {displayItems.map(item => (
        <TodoItem
          key = {item.key}
          item = {item}
          onCheck={handleCheck}
        />
      ))}
      <div className="panel-block">
        {displayItems.length} items
      </div>
    </div>
  );
}

export default Todo;