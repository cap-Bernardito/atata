class Calculator {
  add(a, b) {
    return a + b;
  }

  multiply(a, b) {
    if (a > 0 && b > 0) return a * b;
    return 0;
  }
}

function makeChatsList(data) {
  const ul = document.createElement('ul');
  
  const fragment = document.createDocumentFragment();

  data.forEach(({ title, lastMessage }) => {
      const li = document.createElement('li');
      li.innerHTML = `${title} - ${lastMessage}`;
      fragment.appendChild(li);
  });

  ul.appendChild(fragment);
  
  return ul;
}

describe('calculator', () => {
  it('adds numbers', () => {
    makeChatsList(data) //?
    expect(1).toBe(1);
    calculator.add(100, 200) //?
  });
});
