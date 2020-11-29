import React, {useState} from 'react';

function App() {
  // init state: example
  const [val, setVal] = useState('')
  // init state: list
  // data = [{id:1, val: '起床', completed: true}]
  const [list, setList] = useState([
      {
      id: 1,
      value: '起床',
      completed: true
      },
      {
      id: 2,
      value: '锻炼',
      completed: true
      },
      {
      id: 3,
      value: '看react视频',
      completed: true
      },
      {
      id: 4,
      value: '敲代码',
      completed: false
      },
  ])

  const onInputChange = (e) => {
    setVal(e.target.value)
    console.log(e.target.value)
  }
  const onSubmit = (e) => {
    var oldList = list;
    setList([...list, 
      {id: new Date().getTime(),
      value: val,
      completed: false
      }
    ])
  }
  const changeCompleted = (id:number, e:any)=> {
      const target = e.target;
      const value = target.checked;
      const newList = list.map((item, index) =>{
          if(id === item.id){
              return {...item, completed: value}
          }
          return item
      })
      setList(newList)
  }

  return (
    <div className="App">
      <div>
        <input
          type = 'text'
          value = {val}
          placeholder = '请输入内容'
          onChange = {
            (e) => onInputChange(e)
          }
        ></input>
        <button onClick={(e)=>{
          onSubmit(e)
        }}>添加</button>
      </div>
      <ul>
        {
          list.map((item, index) =>{
            return (
              <li key={item.id}>
                {/*  checkbox */}
                <input 
                  type="checkbox" 
                  checked={item.completed}
                  onChange={(e)=>{
                    console.log(e.target.value);
                    changeCompleted(item.id, e)
                  }}    
              ></input>
                <span className={item.completed ? 'finished' : 'unfinished'} >{item.value}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
