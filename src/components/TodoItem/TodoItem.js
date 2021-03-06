import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  // toggle되는 경우에도 리렌더링 될 필요 없음 -> checked 여부를 바인딩
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }

  // 렌더 함수에 콘솔로그 집어넣어서 불필요한 타이밍에 렌더링되고 있는지 체크
  render() {
    const { text, checked, id, onToggle, onRemove, color } = this.props;
    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div className="remove" onClick={(e) => {
          e.stopPropagation();
          onRemove(id);
        }}>X
        </div>
        <div className={`todo-text ${checked ? ' checked' : ''}`}>
          <div style={{ color: color }} > {text}</div>
        </div>
        {
          checked && (<div className="check-mark">●</div>)
        }
      </div>
    )
  }
}

export default TodoItem