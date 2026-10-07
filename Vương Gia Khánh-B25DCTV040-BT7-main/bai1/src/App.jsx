  import React, { useState } from 'react';

// 1. Component Display hiển thị kết quả
function Display({ value }) {
  return (
    <div style={{
      backgroundColor: '#e0e0e0',
      padding: '20px',
      textAlign: 'right',
      fontSize: '24px',
      minHeight: '30px',
      borderBottom: '1px solid #ccc'
    }}>
      {value || '0'}
    </div>
  );
}

// 2. Component Button nhận props nhãn, màu
function Button({ label, color, onClick }) {
  return (
    <button
      onClick={() => onClick(label)}
      style={{
        padding: '20px',
        backgroundColor: color || '#4CAF50',
        color: 'black',
        border: '1px solid #333',
        fontSize: '18px',
        cursor: 'pointer'
      }}
    >
      {label}
    </button>
  );
}

// 3. Component chính
export default function Calculator() {
  // State lưu biểu thức hiện tại
  const [expression, setExpression] = useState('');

  const handleClick = (label) => {
    if (label === 'Clear') {
      setExpression('');
    } else if (label === 'Delete') {
      setExpression(expression.slice(0, -1));
    } else if (label === '=') {
      try {
        // Thực hiện tính toán biểu thức
        setExpression(eval(expression).toString());
      } catch (error) {
        setExpression('Lỗi');
      }
    } else {
      // Xử lý nối chuỗi khi bấm số hoặc phép tính (+, -, *, /)
      setExpression(expression === 'Lỗi' ? label : expression + label);
    }
  };

  return (
    <div style={{ width: '320px', margin: '50px auto', border: '1px solid #ccc' }}>
      <Display value={expression} />
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <Button label="Clear" onClick={handleClick} />
        <Button label="Delete" onClick={handleClick} />
        <Button label="." onClick={handleClick} />
        <Button label="/" color="#3b82f6" onClick={handleClick} />

        <Button label="7" onClick={handleClick} />
        <Button label="8" onClick={handleClick} />
        <Button label="9" onClick={handleClick} />
        <Button label="*" onClick={handleClick} />

        <Button label="4" onClick={handleClick} />
        <Button label="5" onClick={handleClick} />
        <Button label="6" onClick={handleClick} />
        <Button label="-" onClick={handleClick} />

        <Button label="1" onClick={handleClick} />
        <Button label="2" onClick={handleClick} />
        <Button label="3" onClick={handleClick} />
        <Button label="+" onClick={handleClick} />

        <div style={{ gridColumn: '2 / 3' }}>
          <Button label="0" onClick={handleClick} />
        </div>
        <div style={{ gridColumn: '3 / 4' }}>
          <Button label="=" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}